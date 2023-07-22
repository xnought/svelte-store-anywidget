import { writable } from "svelte/store";

/** @type {Record<string, import("svelte/store").Writable>} */
export let stores = {};

/** @type {Record<string, () => void>} */
export let storeDisposals = {};

export function disposeAllStored() {
	for (const dispose of Object.values(storeDisposals)) dispose();
}

/**
 * Creates a writable store synced with anywidget value
 * @param model anywidget model
 * @param {string} name of the anywidget value you want to track/update in the store
 * @param {boolean} storeGlobally stores the name to a dictionary globally called stores accessible by any file
 * @return {[import("svelte/store").Writable, () => void]}
 */
export function writableAnywidget(model, name, storeGlobally = true) {
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
		if (storeGlobally) {
			delete stores[name];
			delete storeDisposals[name];
		}
	}

	if (storeGlobally) {
		stores[name] = svelteStore;
		storeDisposals[name] = disposeStoreAndAnywidget;
	}
	return [svelteStore, disposeStoreAndAnywidget];
}
