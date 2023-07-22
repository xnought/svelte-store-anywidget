<script>
	import { anywritable } from "../../anywidgetStore";

	// see you don't have to pass in model since it's already registered from Counter.svelte
	const count = anywritable("count");
</script>

<div>{$count}</div>

<style>
	/*  put stuff here */
</style>
