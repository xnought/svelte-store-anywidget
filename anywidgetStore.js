import { writable } from "svelte/store";

/** @type {Record<string, import("svelte/store").Writable>} */
export let stores = {};

/** @type {Record<string, () => void>} */
export let storeDisposals = {};

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

let globalModel;
/**
 * Registers a model to a global variables called globalModel
 * Neccesary for future anywidget() function calls
 * @param model anywidget model
 */
export function register(model) {
	globalModel = model;
}

/**
 * Disposes and unsubscribes from the svelte store and anywidget listeners with the given name
 *
 * @param {string} name of the anywidget value you want to track/update in the store
 */
export function dispose(name) {
	if (name in storeDisposals) {
		storeDisposals[name]();
		delete storeDisposals[name];
	} else {
		throw Error("Name not found");
	}
}

export function disposeAll() {
	for (const dispose of Object.values(storeDisposals)) dispose();
}

/**
 * Creates a svelte store synced with your [Anywidget Model](https://anywidget.dev/). Reads and updates both ways.
 *
 * You must either call the register(model) or pass in a model (just once) since I store the model globally.
 * Then you can register svelte stores by calling anywidget(name) where the name is the name from the anywidget class/model
 *
 * Import and call dispose(name) on the name to unsubscribe and delete the sync
 *
 * @param model anywidget model
 * @param {string} name of the anywidget value you want to track/update in the store
 * @return {import("svelte/store").Writable}
 */
export function anywritable(name, model = undefined) {
	// if we already created a store for this value, load it here
	if (name in stores) {
		return stores[name];
	}

	if (globalModel) {
		return writableAnywidget(globalModel, name, true)[0];
	} else if (!globalModel && model) {
		// if just given the model, register and return store
		register(model);
		return anywritable(name); // restart
	} else {
		throw Error(
			"provide a model once or register(model) once before calling anywritables"
		);
	}
}

/**
 * ALTERNATIVE SYNTAX TO anywritable()
 * preferable if you want to create stores in other files first before linking to the model
 * Links your svelte/store to the notebook value (read, updates, writes all synced both ways)
 *
 * @param {import("svelte/store").Writable} store writable svelte store
 * @param model anywidget jupyter model
 * @param {string} name of the anywidget value you want to track/update in the store
 * @return {() => void} disposes of various listeners when called for this link
 */
export function syncAnywidget(store, model, name) {
	store.set(model.get(name)); // get the default value from the notebook

	/**
	 * Updating notebook value from svelte store change
	 */
	let updatedInNotebook = false;
	const storeUnsubscribe = store.subscribe((newValue) => {
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
		store.set(model.get(name));
	};
	const event = `change:${name}`;
	model.on(event, updateFromNotebook);
	function unsubscribe() {
		model.off(event, updateFromNotebook);
		storeUnsubscribe();
	}

	return unsubscribe;
}
