/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2C254D", // Titres
				secondary: "#F2E9E4", // Fond navbar beige
				accent: "#FFA500", // Boutons actifs
				background: "#FEFFFE", // Fond principal
				darkBackground: "#2C254D", // Fond sections alternées
				darkText: "#FEFFFE", // Texte clair
				blue: "#4961E1",
				orange: "#FFA500",
				green: "#048B9A",
				gray: "#A5A6BC",
			},
			fontFamily: {
				heading: ["Helvetica", "sans-serif"], // Titres
				body: ["Arial", "sans-serif"], // Paragraphes
			},
			transformOrigin: {
				"center-back": "center back",
			},
			perspective: {
				"3d": "1000px",
			},
		},
	},
	plugins: [],
};

// Exportation propre avec variable nommée
export default config;
