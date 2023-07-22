# Svelte Stores + AnyWidget

If you want to create svelte components on jupyter notebooks use [anywidget](https://anywidget.dev/) + [svelte](https://svelte.dev/).

To make things easier I've created an interface to create svelte writable stores that sync with anywidget. You don't even have to think about anywidget!

https://github.com/xnought/svelte-store-anywidget/assets/65095341/b37a78d1-624f-4596-9661-dc123e8ddd91

## How?

Copy and paste the [`anywidgetStore.js`](anywidgetStore.js) file into your svelte project or just import it like I did (in [`Counter.svelte`](svelte/src/Counter.svelte)).

Then, in your svelte file you must register the anywidget model (returned from the render function (see [`main.js`](svelte/src/main.js) and [`Counter.svelte`](svelte/src/Counter.svelte)) in the svelte project).

```svelte
<script>
	import { anywritable, register } from "./anywidgetStore"
	export let model; // anywidget model
	register(model); // register anywidget model once ever, then can use anywritable() across any component

	// these are normal svelte stores synced with your notebook
	// you change the value in the python notebook, this svelte store will automatically update
        // you change the svelte store value, the python notebook value will auotmatically update
	const count = anywritable("count"); // "count" is the name of the reactive value on the anywidget python class
</script>


<button
	on:click={() => {
		$count++;
	}}
>
	{$count}
</button>
```

Notice the svelte store syntax `$`. It's that easy!

And if you want to access the store in other components, just call
`const count = anywritable("value");` again in that file. It will not create another store, but give you the one you initially created.

Note that you only need to call `register(model)` once. Then you can call `anywritable` anywhere.

If you want to dispose the listeners, call `dispose(name)` where name is the name of the traitlet/value.

Or just call `disposeAll()` if you're lazy like me.

## Want to try it?

First install dependencies for the svelte components.

```bash
cd svelte
yarn
```

then run the dev server

```bash
yarn dev
```

Then out the example notebook called [`example.ipynb`](example.ipynb)

Run the notebook!

Check out the svelte files to see how I import things!
