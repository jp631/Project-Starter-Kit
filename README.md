# Project-Starter-Kit
##why?
-With this starter kit, Developers do not have to go through the struggles of setting up a local web development.
-After setting up this local development, babel will be able to convert any ES/6 or any ES/Next (future Ecmoscript release) that is used in the project. 
-You should not use this starter kit if you are using react to create your application. Instead use the `create-react-app` command to start your project.
## Requirements
-Node
-[NPM](https://www.npmjs.com) or [YARN](https://classic.yarnpkg.com/en/)
#Tools that come with the starter Kit
--`live-server` : It create a local host server for the application
<!-- ## inside the parkage.json -->

## insde webpack.config.js
`const PATH = require('path');
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
	 ]
 };
`
##Details:
- The starter kit content two major folder a **src** folder and **public**
-- The **src** folder contains contain all the development files. It is the place where the devloper should created new html or javascript
--The **public** folder is where webpack bundle everything from the **src** folder. Do not touch the public folder unless you are sure of what you are doing. 
##Start Using it
--Fork the repository to make it yours.
--Clone or download the repository through your own account.
--Navigate to the project folder in the command line.
--Type `npm init` or `yarn init` to setup the package.json to your liking.
--`yarn add` or `npm uninstall` to remove any dependency or package.

##commands
`yarn run dev` or `npm run dev` to copy everything from **src** to **public** folder
`yarn run start` or `npm run start` to open the live server with the default browser
`yarn run build` or `npm run build` to create the build folder when the project is complete, and it is what need to uploaded

***This project starter kit is not yet complete, but it is ready to use, and developers can use add or yarn to add any package the want***