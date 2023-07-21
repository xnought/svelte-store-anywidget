<script>
	import { onDestroy } from "svelte";
	import { writableAnywidget } from "./anywidgetStore";

	export let model;
	const [count, disposeCount] = writableAnywidget(model, "value");

	onDestroy(() => {
		disposeCount();
	});
</script>

<button
	on:click={() => {
		$count++;
	}}
>
	{$count}
</button>

<style>
	button {
		padding: 10px;
		font-size: 2em;
	}
</style>
