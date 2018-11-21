# 03: Package Managers (NPM/Yarn)


Package managers such as NPM and Yarn help you manage and request resources from online registries.

<!-- ## **Reading List**

_Some useful resources to get you started._

[Lorem ipsum](https://www.lipsum.com/feed/html) -->

## **Recap**

A package manager alone is quite simple, it will download the resources defined in your `package.json` file from the repository and save them in the `node_modules` directory, after that, it's up to you what you do with them. To install packages, in your terminal run:

```bash
npm install
```

You can also install packages via the terminal, and install packages globally using the `-g` tag so that you can use them from anywhere in you computer.

```bash
npm install -g http-server
```

<!-- Often a package manager is used together with a module bundler, module bundlers allow you to easily import a package into your front-end code, for example Vue uses Webpack as it's module bundler and it let's you easily import installed packages into your code like:

```javascript
import $ from 'jquery'
```

Now jQuery's $ is available inside your code. We will look at Webpack more in another lesson. -->

<expand title="Extra: A Note on Importing JS Modules">

  There are various ways to import packages into a project, traditionally node.js uses CommonJS, now with ES6 you can use the more powerful ES Modules, which are supported in most modern browsers and made available to others with Babel, you've probably seen both being used in a project somewhere before.

  #### CommonJS

  The CommonJS module specification is the standard used in Node.js for working with modules.


  ```javascript
  const package = require('module-name')
  ```

  [Read this introduction on CommonJS](https://flaviocopes.com/commonjs/)

  #### ES Modules

  While Node.js has been using the CommonJS standard for years, the browser hasn't had a module system until ES Modules was implemented in ES6 and is supported across most modern browsers.

  ```javascript
  import package from 'module-name'
  ```

  [Read this introduction on ES Modules](https://flaviocopes.com/es-modules/)

</expand>

### package.json config

There are [a lot of different options](https://docs.npmjs.com/misc/config) that can be defined in the package.json, and some meta data that must be included, such as name, description and the repository info. Some of the most important properties include:

#### dependencies

Here are all the packages you want your bundler to include in you final build package. Include the name of the package and the version you want to install. The `^` in the package version means it is allowed to install minor upgrades to that package.

```javascript
"dependencies": {
  "vue": "^2.5.2",
}
```

#### devDependencies

Similar to dependencies but these packages are just for your dev environment and won't be bundled into your final build js.

```javascript
"devDependencies": {
  "webpack": "^3.6.0",
}
```

#### scripts

Define some shortcuts to execute nodejs scripts in the scripts property

```javascript
"scripts": {
  "dev": "webpack-dev-server",
  "build": "webpack --config webpack.config.js"
  "server": "node server.js",
},
```

.. and run them from the terminal like this

```bash
npm run dev
```

#### browser

Useful to know, sometimes you might want to include some js files that aren't hosted in a registry, you can like this

```javascript
"browser": {
  "vendor": "./path/to/package.js"
}
```

and include it in your code (with help of a bundler) like normal

```javascript
import v from 'vendor'
```

### node versions and nvm

As a slight aside, some packages need specific versions of node.js to function properly, it can be difficult and time consuming to be constantly switching between and installing different versions, [nvm](https://github.com/creationix/nvm) is a useful tool to simplify this process.

You can define the node version for a project in the `.nvmrc` file, and use it `nvm use`, check the current version `nvm current`, install a new version `nvm install <version>`, see installed versions `nvm ls` and use an installed version `nvm use <version>`.

Read more about nvm [here](https://github.com/creationix/nvm)


<!--
## **Exercise**
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus volutpat mauris. Donec non orci nunc. In mollis viverra sollicitudin.
-->


## **Further Reading**

[NPM docs](https://docs.npmjs.com/getting-started/what-is-npm)  
[Sitepoint: beginners guide node package manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)
