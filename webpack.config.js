var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: "inline-sourcemap",
	entry: "./src/app.js",
	output: {
		path: __dirname,
		filename: "app.min.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	},
	externals: {
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	debug: true
}
