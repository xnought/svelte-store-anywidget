import Counter from "./Counter.svelte";

export function render({ model, el }) {
	const counter = new Counter({ target: el, props: { model } });
	return () => {
		counter.$destroy();
	};
}

export default render;
