import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, 'dist')
	},
	mode: 'development',
	module: {
		rules: [
			{ test: /\.css$/, use: [
				{ loader: 'css-loader' }
			]},
			{ test: /\.ts$/, use: [
				{ loader: 'ts-loader' }
			]},
		]
	}
};

module.exports = config;
