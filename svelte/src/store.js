async function loadModel() {
	let _model = undefined;
	while (_model === undefined) {
		let { model } = await import("./main");
		_model = model;
	}
	return _model;
}

export const model = await loadModel();
// export const [v, d] = writableAnywidget(await loadModel(), "value");
