import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	build: {
		outDir: "../build",
		lib: {
			entry: ["src/main.js"],
			formats: ["es"],
		},
	},
	plugins: [svelte({ hot: false }), anywidget()],
});
