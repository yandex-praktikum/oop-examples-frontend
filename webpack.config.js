// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = fs.readdirSync('./src/examples/pages').filter((page) => page.endsWith('.html'));
const lesson_9_3 = fs.readdirSync('./src/examples/pages/9-3').filter((page) => page.endsWith('.html'));
const lesson_9_4 = fs.readdirSync('./src/examples/pages/9-4').filter((page) => page.endsWith('.html'));

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
	entry: {
		index: './src/index.ts',
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist-examples'),
	},
	devServer: {
		open: true,
		host: 'localhost',
		watchFiles: ["./src/**/*"],
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		...pages.map(filename => new HtmlWebpackPlugin({
			inject: false,
			template: path.join('./src/examples/pages/', filename),
			filename
		})),
		...lesson_9_3.map(filename => new HtmlWebpackPlugin({
			inject: false,
			template: path.join('./src/examples/pages/9-3/', filename),
			filename
		})),
		...lesson_9_4.map(filename => new HtmlWebpackPlugin({
			inject: false,
			template: path.join('./src/examples/pages/9-4/', filename),
			filename
		}))

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					stylesHandler,
					'css-loader',
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: ['src/scss'],
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};

pages.map(file => {
	const filename = file.replace('.html', '');
	if (filename !== 'index' && filename !== 'lesson_9-3' && filename !== 'lesson_9-4') {
		config.entry[filename] = `./src/examples/scripts/${filename}.ts`;
	}
});

lesson_9_3.map(file => {
	const filename = file.replace('.html', '');
	config.entry[filename] = `./src/examples/scripts/9-3/${filename}.ts`;
});

lesson_9_4.map(file => {
	const filename = file.replace('.html', '');
	config.entry[filename] = `./src/examples/scripts/9-4/${filename}.ts`;

});


module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
