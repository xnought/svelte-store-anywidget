<script>
	import { onDestroy } from "svelte";
	import { syncAnywidget } from "../../../anywidgetStore";
	import { count, name } from "./store";
	import AnotherExperiment from "./AnotherExperiment.svelte";

	export let model;

	const disposeCount = syncAnywidget(count, model, "count");
	const disposeName = syncAnywidget(name, model, "name");

	onDestroy(() => {
		disposeCount();
		disposeName();
	});
</script>

(Experimental sync syntax)

<button
	on:click={() => {
		$count++;
	}}
>
	Increment:
	<!-- displays count from Another.svelte file to show global store -->
	<AnotherExperiment />
</button>

<br />

{$name}
<input type="text" bind:value={$name} />

<style>
	button {
		padding: 10px;
		font-size: 2em;
	}
</style>
