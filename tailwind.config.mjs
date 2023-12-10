/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				'home-image':"url(public/img/26643688_m.jpg)"
			},
			fontFamily:{
				sans: ["DotGothic16", ...defaultTheme.fontFamily.sans],

			}
		},
	},
	plugins: [],
}
