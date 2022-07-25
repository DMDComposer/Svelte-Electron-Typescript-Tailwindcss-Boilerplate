import { writable, readable } from "svelte/store"

export type Theme = "dark" | "light"
export const isDarkMode = writable(false)
export const darkMode = writable<Theme>("light")
export const darkModeCSS = readable(
	"bg-white text-black dark:bg-[color:var(--main-background-color)] dark:text-white"
)
export const hoverBtnColor = readable(
	"hover:bg-[color:var(--main-foreground-color)] hover:text-black p-4"
)
export const navBarHoverColors = readable(
	"hover:bg-[color:var(--main-highlight-color)] hover:text-black rounded p-4"
)
