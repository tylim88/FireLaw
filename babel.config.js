module.exports = function (api) {
	api.cache(true)
	return {
		ignore: ['**/*.test.ts'],
		presets: ['@babel/preset-env', '@babel/preset-typescript'],
		plugins: ['@babel/plugin-proposal-export-namespace-from'].concat(
			process.env.NODE_ENV === 'dev'
				? []
				: [['transform-remove-console', { exclude: ['error', 'warn'] }]]
		), // remove console.log in production,,
	}
}
