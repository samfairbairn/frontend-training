(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("HTTP Requests are what we use to get stuff from a server. There are various libraries available to simplify this process, Vue projects usually will use either "),a("a",{attrs:{href:"https://github.com/pagekit/vue-resource",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-resource"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Axios"),a("OutboundLink")],1),t._v(", we will cover these later on. For now lets learn the vanilla JS for HTTP requests.")]),t._m(1),t._m(2),a("p",[a("a",{attrs:{href:"https://www.kirupa.com/html5/making_http_requests_js.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Making HTTP Requests in JavaScript - Kirupa"),a("OutboundLink")],1)]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("There are some occasions where you will receive a CORS error, when a request from your front-end to a different server will be rejected for security. Normally this can be fixed by the back-end, however there are some occasions where you might need to add the 'withCredentials' property (see above) to the request, for example if you want to include credentials such as cookies or Authorization headers.")]),t._m(10),a("p",[t._v("Try creating a .json file and using a GET request to retrieve it's data. You can use the dev tools network tab to see the request and it's headers.")]),t._m(11),a("p",[a("a",{attrs:{href:"https://www.w3schools.com/xml/ajax_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3schools: AJAX Introduction"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3schools: AJAX - The XMLHttpRequest Object"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3schools: AJAX - Send a Request To a Server"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("w3schools: AJAX - Server Response"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreeCodeCamp: Popular ways to make an HTTP requests"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mozilla Developer: CORS"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/cors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5Rocks: CORS"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mozilla Developer: withCredentials"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_02-http-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-http-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" 02: HTTP Requests")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"reading-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-list","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Reading List")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Some useful resources to get you started.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"recap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recap","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Recap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Get request")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server_address "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://server.com'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onreadystatechange "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" processRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("open")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server_address"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("processRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Post request")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server_address "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://server.com'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onreadystatechange "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" processRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("open")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server_address"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setting headers such as authorisation")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Authorization'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[auth key]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// sending form data")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Content-type"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"application/x-www-form-urlencoded"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"param1=val1&param2=val2&param3=val3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// sending JSON data")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("processRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"common-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-issues","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Common Issues")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("CORS (Cross-Origin Resource Sharing)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"exercise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercise","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Exercise")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),s("strong",[this._v("Further Reading")])])}],!1,null,null,null);s.default=e.exports}}]);