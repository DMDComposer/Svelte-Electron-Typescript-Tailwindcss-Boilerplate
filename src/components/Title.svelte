<script lang="ts">
	import { push } from "svelte-spa-router"

	let t_styleFirstLetter =
		"font-sans text-3xl font-thin uppercase text-[color:var(--main-highlight-color)] tracking-tighter"
	let t_styleOtherLetters =
		"font-sans text-sm font-thin uppercase tracking-widest"
</script>

<div
	class="flex justify-center bg-white dark:bg-[color:var(--main-background-color)]"
>
	<div class="mt-auto mb-auto hover:animate-spin">
		<svg
			on:click={() => push("/")}
			class="titleIcon noDrag mt-auto mb-auto h-8 w-8 cursor-pointer fill-[#d7dce2]"
		>
			<path
				fill-rule="evenodd"
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
			/>
		</svg>
	</div>
	<div
		class="t-auto my-2 mt-auto mb-auto inline-block w-fit content-center bg-white pl-3 text-center align-middle text-black dark:bg-[color:var(--main-background-color)] dark:text-white"
		id="mqsTitle"
	>
		<span class={t_styleFirstLetter}>B</span>
		<span class={t_styleOtherLetters}>oiler </span>
		<span class={t_styleFirstLetter}>P</span>
		<span class={t_styleOtherLetters}>late </span>
	</div>
</div>

<style>
	.titleIcon {
		/* background: url("./Icon.ico") no-repeat center center; */
		/* fill: #d7dce2; */
		transition: all 0.2s ease-in-out;
		animation: titleIconSpin 12s linear infinite;
		animation-delay: 4s;
	}

	/* Spin titleIcon CSS */
	@keyframes titleIconSpin {
		0% {
			transform: rotate(0deg);
		}
		8.33%,
		25% {
			transform: rotate(90deg);
		}
		33.33%,
		50% {
			transform: rotate(180deg);
		}
		58.33%,
		75% {
			transform: rotate(270deg);
		}
		83.33%,
		100% {
			transform: rotate(360deg);
		}
	}
</style>
