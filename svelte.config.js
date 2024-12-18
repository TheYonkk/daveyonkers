import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
	extensions: ['.svelte', '.svx'],
	runes: true,

	kit: {
		adapter: adapter()
	}
};

export default config;
