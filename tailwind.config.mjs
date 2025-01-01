/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		// "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2C254D",
				secondary: "#F2E9E4",
				accent: "#FFA500",
				background: "#FEFFFE",
				darkBackground: "#2C254D",
				darkText: "#FEFFFE",
			},
			fontFamily: {
				heading: ["Helvetica", "sans-serif"],
				body: ["Arial", "sans-serif"],
			},
		},
	},
	plugins: [],
};
