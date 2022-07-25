<script lang="ts">
	import { link, location, pop, push } from "svelte-spa-router"
	import { api } from "../api"
	import Title from "../components/Title.svelte"
	import {
		isDarkMode,
		darkMode,
		darkModeCSS,
		navBarHoverColors,
	} from "../stores/themes"

	const toggleTheme = () => {
		$isDarkMode ? isDarkMode.set(false) : isDarkMode.set(true)
		$isDarkMode ? darkMode.set("dark") : darkMode.set("light")
	}
</script>

<nav
	class="drag grid grid-cols-12 justify-between {$darkModeCSS} h-10 items-center p-2"
>
	<div class="inline-nav col-span-3 text-left">
		<a class="noDrag {$navBarHoverColors}" href="#/settings">⚙️</a>
		{#if $location !== "/"}
			<a href="#/" class="noDrag {$navBarHoverColors}" on:click={() => pop()}>
				⬅️ BACK
			</a>
		{/if}
	</div>
	<div class="col-span-6 {$darkModeCSS}">
		<Title />
	</div>
	<div class="inline-nav menu-btns noDrag col-span-3 text-right">
		<a
			href={$location}
			use:link
			class="btn noDrag {$navBarHoverColors}"
			on:click={toggleTheme}
			data-value="navBar"
			id="navBar-toggleTheme"
		>
			{$isDarkMode ? "🌙" : "🌤️"}
		</a>
		<a
			href={$location}
			use:link
			class="btn noDrag {$navBarHoverColors}"
			on:click={api.window.minimize}
			data-value="navBar"
		>
			0
		</a>
		<a
			href={$location}
			use:link
			class="btn noDrag {$navBarHoverColors}"
			on:click={api.window.exit}
			data-value="navBar"
		>
			r
		</a>
	</div>
</nav>

<style>
	.inline-nav a {
		font-weight: 400;
		cursor: pointer;
		transition: 0.4s;
		text-decoration: none;
	}

	[data-value="navBar"] {
		cursor: pointer;
		vertical-align: bottom;
		font-family: Webdings;
		font-size: 11pt;
	}

	[data-value="navBar"]:focus {
		outline: none;
		box-shadow: none;
	}
</style>
