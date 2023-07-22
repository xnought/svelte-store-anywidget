<script>
	import { onDestroy } from "svelte";
	import {
		register,
		anywritable,
		dispose,
		disposeAll,
	} from "../../anywidgetStore";
	import Another from "./Another.svelte";

	export let model;
	register(model); // do this or pass in the model directly just once (once ever)
	// const count = anywritable("count", model); // or pass in the model directly (just once ever)

	const count = anywritable("count");
	const name = anywritable("name");

	onDestroy(() => {
		// dispose("count")
		// dispose("name")
		disposeAll();
	});
</script>

<button
	on:click={() => {
		$count++;
	}}
>
	Increment:
	<!-- displays count from Another.svelte file to show global store -->
	<Another />
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
