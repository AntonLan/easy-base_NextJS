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
				'light-gray': '#F2F2F2'
			}
		}
	},
	plugins: []
}
