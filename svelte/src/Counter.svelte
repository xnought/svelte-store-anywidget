<script>
	import { onDestroy, onMount } from "svelte";
	export let model;
	export let name = "value";
	console.log(model);
	let count = model.get(name);
	let event = `change:${name}`;
	let callback = () => (count = model.get(name));
	onMount(() => {
		model.on(event, callback);
	});
	onDestroy(() => {
		model.off(event, callback);
	});
</script>

<button
	on:click={() => {
		model.set(name, model.get(name) + 1);
		model.save_changes();
	}}
>
	Count is {count}
</button>

<style>
	button {
		padding: 10px;
		font-size: 2em;
	}
</style>
