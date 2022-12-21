/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			spacing: {
				88: "22rem",
				112: "28rem",
				128: "32rem",
				144: "36rem",
				160: "40rem",
				176: "44rem",
				192: "48rem",
				208: "52rem"
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "3rem"
			},
			translate: {
				26: "6.5rem"
			},
			screens: {
				mini: "360px"
			}
		}
	},
	plugins: [
		require("daisyui"),
		require("tailwind-scrollbar-hide"),
		require("tailwind-scrollbar")({ nocompatible: true })
	],
	daisyui: {
		themes: ["night", "light"]
	},
	variants: {
		scrollbar: ["rounded"]
	}
};
