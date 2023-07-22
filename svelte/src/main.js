import Counter from "./Counter.svelte";
import CounterExperiment from "./experiment/CounterExperiment.svelte";

const EXPERIMENT = false;

export function render({ model, el }) {
	const CounterComponent = EXPERIMENT ? CounterExperiment : Counter;
	const counter = new CounterComponent({ target: el, props: { model } });
	return () => {
		counter.$destroy();
	};
}

export default render;
