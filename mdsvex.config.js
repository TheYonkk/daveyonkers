import remarkSectionize from 'remark-sectionize';

/** @type {import('mdsvex').MdsvexConfig} */
export const mdsvexConfig = {
	extensions: ['.svx'],
	layout: {
		blog: 'src/lib/components/blog/layout.svelte'
	},
	remarkPlugins: [remarkSectionize]
};
