<script>
	import { onDestroy, onMount } from "svelte";
	import { writableAnywidget } from "./anywidgetStore";
	import Another from "./Another.svelte";

	export let model;
	let [count, disposeCount] = writableAnywidget(model, "value");
	onDestroy(() => disposeCount());
</script>

<h1>Workking</h1>

<button
	on:click={() => {
		$count++;
	}}
>
	<Another />
</button>

<style>
	button {
		padding: 10px;
		font-size: 2em;
	}
</style>
