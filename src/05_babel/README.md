# 05: Babel

Just a quick note on Babel. As mentioned in the previous lesson, Babel will help to transform your ES6 code to a backwards compatible version that will work across browsers.

In our Vue projects we normally use the [vue-cli](https://cli.vuejs.org) to get going. Babel settings are defined differently depending on which verison of the Vue CLI you're using.

#### Vue CLI 3

The newest vue-cli, Vue CLI 3, as used in the NBA QMQ Revamp, uses Babel 7, and here the Babel config is defined in the `babel.config.js` file in the root of the project. You probably won't need to change any of the settings here, but occasionally you may need to defined a particular plugin or feature to use.

```javascript
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```

The webpack loaders required are defined somewhere in the build process, but if you need to change them you can do so in the `vue.config.js` file. Refer to the docs [here](https://cli.vuejs.org/config/#vue-config-js).

#### Vue CLI < 3

If your using the older version of the vue-cli, such as Vue CLI 2 used in the qmq-ui project, you'll find the babel presets and plugins in the `.babelrc` file, looking something like this;

```javascript
...
{
  "presets": ["es2015", "stage-2"],
  "plugins": ["transform-runtime", "es6-promise", "dynamic-import-webpack"],
  "comments": false
}
...
```

and you can see the webpack loaders being defined in `build/webpack.base.conf.js` like so;

```javascript
...
{
  test: /\.js$/,
  loader: 'babel',
  include: projectRoot,
  exclude: /node_modules/
},
...
```

This may well be confusing right now, if so, come back after you've completed the webpack and vue-cli lessons.


---

## **Further Reading**

[Babel docs](https://babeljs.io/docs/en/)  
[Vue CLI 3 babel usage](https://cli.vuejs.org/config/#babel)  
[Using .babelrc](https://babeljs.io/docs/en/6.26.3/babelrc)
