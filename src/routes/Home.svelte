<script lang="ts">
	import { darkModeCSS, navBarHoverColors } from "../stores/themes"
</script>

<div class="h-screen w-screen p-4 {$darkModeCSS}">
	<h1 class="text-4xl">Svelte - Electron - TS Template</h1>
	<p>This template uses svelte, electron, and typescript.</p>
	<p>
		svelte-spa-routing is used for easier routing between pages. To enable
		hot-reloading run
		<code
			class="rounded p-4 hover:bg-[color:var(--main-highlight-color)] hover:text-black"
			>npm run watch</code
		>.
	</p>
</div>
