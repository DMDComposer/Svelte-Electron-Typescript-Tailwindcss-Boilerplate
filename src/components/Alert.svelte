<script>
	import { ALERT_TYPES, alertMessage, alertType } from "../stores/alertsStore"
	import { isDarkMode, darkMode, darkModeCSS } from "../stores/themes"
	import { fade } from "svelte/transition"

	$: highlightColor = () => {
		switch ($alertType) {
			case ALERT_TYPES.SUCCESS:
				return "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
			case ALERT_TYPES.ERROR:
				return "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
			case ALERT_TYPES.DANGER:
				return "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
			case ALERT_TYPES.WARNING:
				return "text-orange-400 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900"
			case ALERT_TYPES.INFO:
				return "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
			case ALERT_TYPES.PRIMARY:
				return "primary"
			case ALERT_TYPES.SECONDARY:
				return "text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-300 dark:text-purple-300 dark:hover:text-white dark:hover:bg-purple-400 dark:focus:ring-purple-900"
			case ALERT_TYPES.LIGHT:
				return "light"
			case ALERT_TYPES.DARK:
				return "dark"
			default:
				return "text-pink-400 hover:text-white border border-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-pink-300 dark:text-pink-300 dark:hover:text-white dark:hover:bg-pink-400 dark:focus:ring-pink-900"
		}
	}

	// $: alertCSS = `mr-2 mb-2 rounded-lg border border-${highlightColor()}-700 px-5 py-2.5 text-center text-sm font-medium italic text-${highlightColor()}-700 hover:bg-${highlightColor()}-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-${highlightColor()}-300 dark:border-${highlightColor()}-500 dark:text-${highlightColor()}-500 dark:hover:bg-${highlightColor()}-600 dark:hover:text-white dark:focus:ring-${highlightColor()}-900`
</script>

{#if $alertMessage}
	<div
		transition:fade
		class="{$darkModeCSS} absolute right-0 bottom-0 my-6 mx-2 h-6"
	>
		<span class="{$darkModeCSS} {highlightColor()} z-50 italic">
			{$alertMessage}
		</span>
	</div>
{/if}
