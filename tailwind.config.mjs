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
				primary: "#22223b", // Titres (OLD : #2C254D)
				secondary: "#ffd7ba", // Fond navbar beige (OLD : #F2E9E4)
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
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				".glow-text": {
					color: "#fff",
					fontSize: "2rem",
					textAlign: "center",
					filter: "url(#glow)",
				},
			});
		},
	],
};

// Exportation propre avec variable nommée
export default config;
