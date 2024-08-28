/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"accent-primary": "var(--accent-primary)",
			"accent-secondary": "var(--accent-secondary)",
			"neutral-01": "var(--neutral-01)",
			"neutral-02": "var(--aneutral-02)",
			"neutral-03": "var(--neutral-03)",
			"neutral-04": "var(--neutral-04)",
			"neutral-05": "var(--neutral-05)",
			"neutral-06": "var(--neutral-06)",
			"neutral-07": "var(--neutral-07)",	
			"text-primary": "var(--text-primary)"	
		},
		screens:{
			'sm': {'min': '0px','max':'1023px'},
			'md': {'min': '768px', 'max': '1023px'},
			'lg': {'min': '1024px'},
		}
	},
	plugins: [],
}
