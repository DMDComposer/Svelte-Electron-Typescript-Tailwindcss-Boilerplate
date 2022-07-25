<script>
	// https://youtu.be/ql_-tLTpPKg
	import { isOverlayOpen } from "../stores/overlayStore"
	import { fade } from "svelte/transition"
</script>

<div
	class="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-700 opacity-90"
	on:click={() => isOverlayOpen.set(false)}
	transition:fade
>
	<div
		class="relative max-w-lg rounded-md bg-gray-900 px-8 py-10 text-white opacity-95"
		on:click|stopPropagation
	>
		<button
			class="absolute top-0 right-3 text-4xl text-gray-300 transition-transform hover:top-2 hover:mt-1 hover:-translate-y-0.5 hover:rounded-lg hover:bg-red-600"
			on:click={() => isOverlayOpen.set(false)}
		>
			&times;
		</button>
		<slot />
	</div>
</div>
