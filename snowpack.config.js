module.exports = {
	mount: {
		public: '/',
		src: '/_dist_',
	},

	alias: {
		'@': './src',
	},

	plugins: [
		'@snowpack/plugin-postcss',

		[
			'@snowpack/plugin-run-script',
			{
				cmd: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
				watch: 'watch "$1" src',
			},
		],

		[
			'@snowpack/plugin-build-script',
			{ cmd: 'postcss', input: ['.css'], output: ['.css'] },
		],

		[
			'snowpack-plugin-imagemin',
			{
				/* see "Plugin Options" below */
				include: ['**/*.jpg', '**/*.png'],
				plugins: [
					require('imagemin-mozjpeg')({ quality: 90, progressive: true }),
					require('imagemin-optipng')({ optimizationLevel: 7 }),
				],
			},
		],
	],
}
