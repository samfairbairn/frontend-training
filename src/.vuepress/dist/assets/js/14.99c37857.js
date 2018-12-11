(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{166:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("Just a quick note on Babel. As mentioned in the previous lesson, Babel will help to transform your ES6 code to a backwards compatible version that will work across browsers.")]),e("p",[t._v("In our Vue projects we normally use the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),e("OutboundLink")],1),t._v(" to get going. Babel settings are defined differently depending on which verison of the Vue CLI you're using.")]),t._m(1),t._m(2),t._m(3),e("p",[t._v("The webpack loaders required are defined somewhere in the build process, but if you need to change them you can do so in the "),e("code",[t._v("vue.config.js")]),t._v(" file. Refer to the docs "),e("a",{attrs:{href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),e("p",[t._v("This may well be confusing right now, if so, come back after you've completed the webpack and vue-cli lessons.")]),e("hr"),t._m(9),e("p",[e("a",{attrs:{href:"https://babeljs.io/docs/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel docs"),e("OutboundLink")],1),e("br"),e("a",{attrs:{href:"https://cli.vuejs.org/config/#babel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 3 babel usage"),e("OutboundLink")],1),e("br"),e("a",{attrs:{href:"https://babeljs.io/docs/en/6.26.3/babelrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using .babelrc"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_05-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-babel","aria-hidden":"true"}},[this._v("#")]),this._v(" 05: Babel")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"vue-cli-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue CLI 3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The newest vue-cli, Vue CLI 3, as used in the NBA QMQ Revamp, uses Babel 7, and here the Babel config is defined in the "),s("code",[this._v("babel.config.js")]),this._v(" file in the root of the project. You probably won't need to change any of the settings here, but occasionally you may need to defined a particular plugin or feature to use.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  presets"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v("'@vue/app'")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"vue-cli-3-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue CLI < 3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If your using the older version of the vue-cli, such as Vue CLI 2 used in the qmq-ui project, you'll find the babel presets and plugins in the "),s("code",[this._v(".babelrc")]),this._v(" file, looking something like this;")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"presets"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"es2015"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"stage-2"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token string"}},[t._v('"transform-runtime"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"es6-promise"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"dynamic-import-webpack"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token string"}},[t._v('"comments"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("and you can see the webpack loaders being defined in "),s("code",[this._v("build/webpack.base.conf.js")]),this._v(" like so;")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'babel'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  include"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" projectRoot"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  exclude"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token regex"}},[t._v("/node_modules/")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Further Reading")])])}],!1,null,null,null);s.default=n.exports}}]);