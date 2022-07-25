<script lang="ts">
	import Router from "svelte-spa-router"
	import { location } from "svelte-spa-router"

	import Home from "./routes/Home.svelte"
	import Navigation from "./routes/Navigation.svelte"
	import Versions from "./routes/Versions.svelte"
	import NotFound from "./routes/NotFound.svelte"
	import Alert from "./components/Alert.svelte"

	import { isDarkMode, darkMode, darkModeCSS } from "./stores/themes"

	$: console.log("🚀 ~ file: App.svelte ~ line 13 ~ location", $location)

	// Demo of how to use Routes with svelte-spa-router
	const routes = {
		"/": Home,
		"/versions": Versions,

		"*": NotFound,
	}

	const darkModeTimer = () => {
		let currTime = new Date().getHours()
		if (currTime >= 19 || currTime < 6) {
			isDarkMode.set(true)
			darkMode.set("dark")
		} else {
			isDarkMode.set(false)
			darkMode.set("light")
		}
	}

	darkModeTimer()
	setInterval(darkModeTimer, 1000 * 60 * 60)
</script>

<main data-mode={$darkMode} class="h-screen w-screen">
	<div class={$darkModeCSS}>
		<Navigation />
		<Router {routes} />
		<Alert />
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		--bg-color: #1d1f21;
		--primary-color: #fff;
		--secondary-color: #ffb7c5;

		--main-highlight-color: #ffb7c5;
		--main-background-color: #1d1f21;
		--main-foreground-color: #ffeff5;
	}

	body {
		font-family: Segoe UI, Verdana, Geneva, Tahoma, sans-serif;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
	}

	.drag {
		user-select: none;
		-webkit-app-region: drag;
	}

	.noDrag {
		-webkit-app-region: no-drag;
	}
</style>
