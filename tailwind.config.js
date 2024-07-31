/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					0: "#00BC7D",
					50: "#009664",
					100: "#005E3F",
					200: "#005E3F",
					300: "#005639",
				},
				secondary: {
					100: "#B3533C",
					200: "#AA503A",
					300: "#88402E",
					400: "#663023",
					500: "#442017",
				},
				background: "#005E3F",
			},
			fontFamily: {
				body: ["Nunito"],
			},
		},
	},
	plugins: [],
};
