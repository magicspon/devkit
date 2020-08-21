module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
		'no-console': 'warn',
	},
	settings: {
		polyfills: [
			// Example of marking entire API and all methods and properties as polyfilled
			'fetch',
			'Array.from',
		],
	},
}
