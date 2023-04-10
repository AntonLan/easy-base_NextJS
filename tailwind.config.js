module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: ['class', ':global(.dark)'],
	theme: {
		extend: {
			colors: {
				'main': '#07748C',
				'primary': '#379BA6',
				'txt-color': '#39BFBF',
				'light-green': '#39BFB2',
				'light-gray': '#F2F2F2',
				'dark-light-gray': '#595959',
				'dark-light-green': '#1B5953',
				'dark-txt-color': '#c8fdfd',
				'dark-primary': '#266B73',
				'dark-main': '#011116',
			}
		}
	},
	plugins: []
}
