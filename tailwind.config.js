/** @type {import('tailwindcss').Config} */
/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"oscii-wallpaper": "url(/images/wallpaper.webp)",
				"meta-image": "url(/images/meta-image.webp)",
			},
			colors: {
				...defaultTheme.colors,
				oscii1: "#dca978",
				oscii2: "#f3f0dc",
				oscii3: "#89623d",
				oscii4: "#00a879",
				oscii5: "#ffe002",
				oscii6: "#e38d37",
				oscii7: "#1b603d",
				oscii8: "#063a20",

				koscii1: "#a7886b",
				koscii2: "#fff4e3",
				koscii3: "#59a482",
				koscii4: "#fb9e00",
				koscii5: "#ffe002",
				koscii6: "#e38d37",
				koscii7: "#733229",
				koscii8: "#ac4a3d",

				toscii1: "#dca979",
				toscii2: "#a7886b",
				toscii3: "#fdf2e1",
				toscii4: "#5ba582",
				toscii5: "#e48c36",
				toscii6: "#fce105",

				snowtrap1: "#d1fffe",
				snowtrap2: "#6fe6fa",
				snowtrap3: "#62d463",
				snowtrap4: "#ff9a50",
				snowtrap5: "#ffeea6",
				snowtrap6: "#ff6b26",
				snowtrap7: "#03147c",

				milo01: "#ff4f2e",
				milo02: "#e82b16",
				milo03: "#fff152",
				milo04: "#ffb234",
				milo05: "#1a1a1a",
				milo06: "#cfcfcf",
				milo07: "#ff8d40",
				milo08: "#ffb946",
				milo09: "#33ff59",
				milo10: "#00d740",
			},
			fontFamily: {
				caveat: ['"Caveat"', ...defaultTheme.fontFamily.sans],
				shantellSans: ['"Shantell Sans"', ...defaultTheme.fontFamily.sans],
				sfMono: ['"SF Mono"', ...defaultTheme.fontFamily.mono],
				jetbrainsMono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#89623d",
					secondary: "#e38d37",
					accent: "#00a879",
					neutral: "#f3f0dc",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
