module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				scooter: {
					50: '#f2fbfc',
					100: '#e6f7fa',
					200: '#bfecf1',
					300: '#99e0e9',
					400: '#4dc8d9',
					500: '#00B1C8',
					600: '#009fb4',
					700: '#008596',
					800: '#006a78',
					900: '#005762'
				},
				slime: {
					50: '#fcfdf7',
					100: '#f9fcee',
					200: '#f0f7d5',
					300: '#e7f2bb',
					400: '#d4e889',
					500: '#C2DE56',
					600: '#afc84d',
					700: '#92a741',
					800: '#748534',
					900: '#5f6d2a'
				}
			},
			boxShadow: {
				custom: `0.3px 0.8px 0px -24px rgba(0, 0, 0, 0.127),
  0.7px 1.9px 0.1px -24px rgba(0, 0, 0, 0.182),
  1.3px 3.5px 0.1px -24px rgba(0, 0, 0, 0.225),
  2.2px 6.3px 0.2px -24px rgba(0, 0, 0, 0.268),
  4.2px 11.7px 0.4px -24px rgba(0, 0, 0, 0.323),
  10px 28px 1px -24px rgba(0, 0, 0, 0.45)`,
				customHover: `0.4px 1.1px 0.1px -24px rgba(0, 0, 0, 0.101),
  1.1px 2.5px 0.3px -24px rgba(0, 0, 0, 0.145),
  2px 4.8px 0.5px -24px rgba(0, 0, 0, 0.18),
  3.6px 8.5px 0.9px -24px rgba(0, 0, 0, 0.215),
  6.7px 15.9px 1.7px -24px rgba(0, 0, 0, 0.259),
  16px 38px 4px -24px rgba(0, 0, 0, 0.36)`
			},
			fontFamily: {
				sans: ["'Titillium Web'", 'sans-serif'],
				mono: ["'Share Tech Mono'", "'monospace'"]
			}
		}
	}
};
