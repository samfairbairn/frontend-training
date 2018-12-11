# 04: ES6


The ES in ES6 stands for ECMAScript, which is a scripting-language specification that JavaScript builds upon, and 6 is the 6th edition of the standard released in 2015, so is also known as ES2015.

Not all ES6 features are supported natively across browsers yet so tools such as [Babel](https://babeljs.io/docs/en/) are used to compile the code into a backwards compatible version and provide polyfills for the features missing in your target environment.

If you've already been working with tools like Vue or Webpack you'll probably already be familiar with some ES6, but it's worth reading through the materials below to make sure you're familiar with the most commonly used features.

## **Reading List**

_Some useful resources to get you started._

[codeburst - es6 for beginners](https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be)  
[pragmatists - top 10 es6 features](https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb)  
[codeburst - a simple guide to promises](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a)

## **Recap**

#### Importing Modules

There are various ways to import packages into a project, traditionally node.js uses CommonJS, now with ES6 you can use the more powerful ES Modules, which are supported in most modern browsers and made available to others with Babel, you've probably seen both being used in a project somewhere before.

##### CommonJS

The CommonJS module specification is the standard used in Node.js for working with modules.


```javascript
const package = require('module-name')
```

[Read this introduction on CommonJS](https://flaviocopes.com/commonjs/)

##### ES Modules

While Node.js has been using the CommonJS standard for years, the browser hasn't had a module system until ES Modules was implemented in ES6 and is supported across most modern browsers.

```javascript
import package from 'module-name'
```

[Read this introduction on ES Modules](https://flaviocopes.com/es-modules/)

#### let & const

let is similar to var however it has block scope, meaning let can be defined inside a function and it won't affect the same named let outside the object instance. const are the same, except const values cannot be redefined.

```javascript
function f() {
  var x = 1;
  let y = 1;
  y = 2;
  const z = 3;
  z = 4; // shows error. You cannot change the value of const.
  {
    var x = 10;
    let y = 20;
    const z = 30;
    // here x === 10, y === 20, z === 30
  }
  // here x === 10, y === 2, z === 3
}

f();
```

#### Arrow Functions

Arrow functions are a shorthand for writing functions in JavaScript.

```javascript
// before
var double = function(val) {
  return val * 2
}

// after
var double = (val) => { return val * 2 }

// or, for simple calculations remove the braces and return
var double = (val) => val * 2

// or, where there is only one parameter, remove the parentheses
var double = val => val * 2

```

**Note** that while in ES5 `this` referred to the parent of the function, in ES6, arrow functions use lexical scoping — `this` refers to it’s current surrounding scope and no further. So you no longer need to defined the context with code like `var _this = this;` or `...}.bind(this));` See [this example](https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881)

```javascript

var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses']
}

// old
bunny.showTasks = function() {
  var _this = this;
  this.tasks.forEach(function(task) {
    console.log(_this.name + " wants to " + task);
  });
};

// or

bunny.showTasks = function() {
  this.tasks.forEach(function(task) {
    console.log(this.name + " wants to " + task);
  }.bind(this));
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

whereas in ES6

```javascript
// new
// using function here means this scope is 'bunny' object
bunny.showTasks = function() {
  // arrow function means parent scope remains 'bunny' object
  this.tasks.forEach((task) => {
    console.log(this.name + " wants to " + task);
  });  
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses

```

It may not look like a big change in this example but in practice it certainly makes things easier and removes the need for a lot of repetitive code.

#### Arrays - forEach, map, filter, find, every, some, reduce

There are a lot of different helper functions here, make sure you read through the [pragmatists](https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb) post above to get a good understanding of them all.

They work especially well with arrow functions.

```javascript

// this forEach will print each name

var colors = ['red', 'green', 'blue']
colors.forEach(val => console.log(val))

// This filter function will create a new array with the filtered results.

var values = [1, 60, 34, 30, 20, 5]
var valuesLessThan20 = values.filter(val => val < 20)
console.log(valuesLessThan20) // [1,5]

// This find example will find the **first** matching case.

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9},
  {name: 'John', age: 40},
  {name: 'Ann', age: 19},
  {name: 'Elisabeth', age: 16}
]

var firstTeenager = people.find(person => person.age > 10 && person.age < 20)
console.log(firstTeenager) // {name: "Ann", age: 19}
```

#### for of loop

for..of is like for..in except it will return the element and not the index

```javascript
let arr = [{a: 1},{a: 2}, {a: 3, b: 4}];
for (let value of arr) {
 console.log(value);
}

// {a: 1}
// {a: 2}
// {a: 3, b: 4}

```

#### Default parameters

You may want to define default parameters for a function, pretty straight forward I think!

```javascript
let Func = (a, b = 10) => {
 return a + b;
}
Func(20); // 20 + 10 = 30
```

#### Spread operators

Spread attributes help to spread the expression as the name suggests. In simple words, it converts a list of elements to an array and vice versa.

```javascript
// example 1
let SumElements = (...arr) => {
  console.log(arr); // [10, 20, 40, 60, 90]
  // ... function computations
}
SumElements(10, 20, 40, 60, 90); // Note we are not passing array here. Instead we are passing the elements as arguments.

// example 2
Math.max(10, 20, 60); // Math.max requires a list of values, not an array. returns 60.

let arr = [10, 20, 60];
Math.max(arr); // Shows error. Doesn't accept an array.

let arr = [10, 20, 60];
Math.max(...arr); // 60

// example 3
var defaultColors = ['red', 'blue', 'green']
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...defaultColors, ...userDefinedColors] // ["red","blue","green","yellow","orange"]

```

#### Template strings

No longer necessary to concatenate strings like

```javascript
let msg = "Good morning " + firstName + " " + lastName + "!\n How are you?";
```

can use more easily readable template strings like

```javascript
let msg = `Good morning ${firstName} ${lastName}!
How are you?`;
```

#### Promises

Promises are great for asynchronous programming while avoiding some of the problems of using callbacks. It's important to have a good understanding of promises as we use them a lot! Make sure you read the [article](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a) in the reading list.

>A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

When you create a promise, if the computation passes you `resolve` the promise, otherwise you `reject` it. When using a promise there are two handlers, when the promise is resolved the result will be passed to the `then` handler, if it's rejected use the `catch` handler.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 100 < 90) {
          resolve('Promise resolved');
      }
      reject(new Error('In 10% of the cases, Promise rejected'));
    }, 2000)
});

myPromise
.then((resolvedValue) => {
    console.log(resolvedValue);
})
.catch((error) => {
	console.log(error);
});
```

Try copying and pasting the code above into the Chrome terminal, you will see the promise is returned first, then 2 seconds later the promise is resolved and the result is logged in the console.

---

There are many other ES6 features that you should be aware of and understand, make sure to read through the reading list and understand **Destructuring**, **Maps**, **Classes**, **Enhanced object literals**.


## **Exercise**

All the examples above will work in the Chrome developer console, try copying them, changing them and experimenting with them.


---

## **Further Reading**

[w3schools - good es6 overview](https://www.w3schools.com/js/js_es6.asp)  
[FreeCodeCamp - cleaner, shorter, easier to read code with es6](https://medium.freecodecamp.org/make-your-code-cleaner-shorter-and-easier-to-read-es6-tips-and-tricks-afd4ce25977c)  
[More on promises](https://www.datchley.name/es6-promises/)  
[ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)  
[FreeCodeCamp - ES6 tips and tricks](https://medium.freecodecamp.org/check-out-these-useful-ecmascript-2015-es6-tips-and-tricks-6db105590377)
