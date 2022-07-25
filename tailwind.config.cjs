/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["./src/**/*.{html,js,svelte,ts}", "./public/**/*.{html,js}"],
	content: ["./public/index.html", "./src/**/*.svelte"],
	safelist: ["dark"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary-color)",
				secondary: "rgb(var(--secondary-color) / <alpha-value>)",
				bg: "var(--bg-color)",
				highlight: "var(--highlight-color)",
				background: "var(--background-color)",
				foreground: "var(--foreground-color)",
			},
			fontFamily: {
				sans: [
					"system-ui",
					"-apple-system",
					"Segoe UI",
					"Roboto",
					"Helvetica Neueve",
					"Verdana",
					"Geneva",
					"Tahoma",
					"sans-serif",
				],
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
