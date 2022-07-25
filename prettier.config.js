module.exports = {
	singleQuote: false,
	arrowParens: "always",
	insertPragma: false,
	semi: false,
	useTabs: true,
	bracketSpacing: true,
	svelteAllowShorthand: true,
	trailingComma: "es5",
	svelteBracketNewLine: true,
	svelteIndentScriptAndStyle: true,
	plugins: [require("prettier-plugin-tailwindcss")],
	pluginSearchDirs: ["."],
}
