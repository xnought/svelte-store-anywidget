import { writable } from "svelte/store";

/**
 * Creates a writable store synced with anywidget value
 * @param model anywidget model
 * @param {string} name of the anywidget value you want to track/update in the store
 * @return {[import("svelte/store").Writable, () => void]}
 */
export function writableAnywidget(model, name) {
	const svelteStore = writable(model.get(name));

	/**
	 * Updating notebook value from svelte store change
	 */
	let updatedInNotebook = false;
	const storeUnsubscribe = svelteStore.subscribe((newValue) => {
		// reflect changes in notebook from svelte change
		if (updatedInNotebook == false) {
			model.set(name, newValue);
			model.save_changes();
		}
		updatedInNotebook = false;
	});

	/**
	 * Updating svelte store from notebook value change
	 */
	const updateFromNotebook = () => {
		// reflect changes in svelte store from notebook change
		updatedInNotebook = true;
		svelteStore.set(model.get(name));
	};
	const event = `change:${name}`;
	model.on(event, updateFromNotebook);
	function disposeStoreAndAnywidget() {
		model.off(event, updateFromNotebook);
		storeUnsubscribe();
	}

	return [svelteStore, disposeStoreAndAnywidget];
}
