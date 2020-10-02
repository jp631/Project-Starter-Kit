const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	 entry: ['./src/javascript/index.js'],
	 output: {
		 path: PATH.resolve(__dirname, 'public'),
		 filename: 'javascript/bundle.js'
	 },
	 devServer: {
		 contentBase: './public'
	 },
	 plugins: [
		 new HtmlWebpackPlugin({
			 filename: 'index.html',
			 template: './src/index.html'
		 })
	 ],
	 module: {
		 rules: [
			 {
				 test: /\.js$/,
				 exclude: /node_modules/,
				 use: {
					 loader: 'babel-loader'
				 }
			 }
		 ]
	 }
 };
