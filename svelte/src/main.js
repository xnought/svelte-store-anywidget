// import "./app.css";
import App from "./App.svelte";
import Counter from "./Counter.svelte";

// const app = new App({
// 	target: document.getElementById("app"),
// })

export function render({ model, el }) {
	const counter = new Counter({ target: el, props: { model } });
	return () => counter.$destroy();
}

export default render;
