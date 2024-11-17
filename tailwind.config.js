/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		extend: {
			colors: {
				main: '#88aaee',
				mainAccent: '#4d80e6', // not needed for shadcn components
				overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

				// light mode
				bg: '#dfe5f2',
				text: '#000',
				border: '#000',

				// dark mode
				darkBg: '#272933',
				darkText: '#eeefe9',
				darkBorder: '#000',
				secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
			},
			borderRadius: {
				base: '5px'
			},
			boxShadow: {
				light: '4px 4px 0px 0px #000',
				dark: '4px 4px 0px 0px #000',
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '-4px',
			},
			fontWeight: {
				base: '400',
				heading: '800',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'fade-out': {
					from: {
						opacity: '1'
					},
					to: {
						opacity: '0'
					}
				},
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

