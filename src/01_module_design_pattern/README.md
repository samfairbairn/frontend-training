# 01: The Module Design Pattern
> _And reusable modules using prototypes_



This is a simple introduction to building apps and reusable module components with vanilla JS.

## **Reading List**

_Some useful resources to get you started._

[Understanding Design Patterns in JavaScript - Tilo Mitra](https://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930)

[JavaScript Module Pattern - Tarun Sharma](https://medium.com/@tkssharma/javascript-module-pattern-b4b5012ada9f)

[Mastering the Module Pattern - Todd Motto](https://toddmotto.com/mastering-the-module-pattern/)

[mozilla developer docs - Learn Javascript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)


## **Recap**

### **_What?_**

>Simply put, a design pattern is a reusable software solution to a specific type of problem that occurs frequently when developing software. [Tilo Mitra](https://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930)

There are various types of design patterns, for example:

**Creational** patterns focus on ways to create objects or classes,

**Structural** design patterns focus on ways to manage relationships between objects so that your application is architected in a scalable way.

_You may be familiar with acronyms like MVC or MVVM, these are Structural design patterns, if you want to learn more about these check the further reading section. I will not cover them here as I think they can add unnecessary confusion, in modern front-end dev the structural pattern is often predefined by our choice of framework._

We will focus briefly on **Creational** design patterns, in order to understand how to build simple apps with vanilla js.

### **_Why?_**

- **Scoping** - we can group together related functions giving them access to common variables and methods locally, without making them available to the whole application

- **Namespacing** - with variables and functions encapuslated inside an object, we will have fewer global variables which means we can avoid naming conflicts that can often occur with other modules or external packages/libraries.

- **Reusabilty** - we can create components that can be reusable and easily extensible, creating more concise code whilst saving coding time and improving our apps performance.

- **Legibility** - modules also makes it easier to organise our code into a more logical structure and make the codebase easier to navigate and work on as the project grows.

### **_How?_**

We can't make real classes in JavaScript but we can mimic a class' behaviour by making an object that contains it's own properties and methods.

#### **Immediately Invoked Function Expressions**

One way to do this is to make a function that executes straight away and returns a calculated object like so:

```javascript
var aPerson = (function () {

  // locally scoped Object
  var obj = {
    name: 'Wenjie'
  };

  // private method
  var privateMethod = function () {};

  // public method
  obj.greeting = function () {
    alert('Hi! I\'m ' + obj.name + '.');
  };

  return obj;

})();

aPerson.greeting();
// alerts "Hi! I'm Wenjie."
```

>What’s nice about this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables. [Tarun Sharma](https://medium.com/@tkssharma/javascript-module-pattern-b4b5012ada9f)


<!-- https://jsfiddle.net/samfairbairn/ntwory71/ -->

<!-- <script async src="//jsfiddle.net/samfairbairn/ntwory71/embed/js,result/dark/"></script> -->

#### **Simple Function Expressions**

To make the function expression reusable don't execute it straight away, we can then create multiple objects using the same function.

```javascript
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

var wenjie = createNewPerson('Wenjie');
var sam = createNewPerson('Sam');

wenjie.name;
// returns "Wenjie"
wenjie.greeting();
// alerts "Hi! I'm Wenjie."
```

#### **Constructor Functions**

 We can make the function more concise using a constructor function, this means we don't need to define a object inside the function, we just use the `this` keyword to apply the properties to the function object, then we can create multiple 'classes' using the `new` keyword, like this:

```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

var wenjie = new Person('Wenjie');
```

#### **Prototypes**

The above approach may be fine for simple use-cases, but this approach will create independent objects for each person, what if we want the people to share some common functions (not duplicates of a function), or maybe we to change some property of the `Person` object or add a new function that applies to all the existing people, to solve this we can use **prototypes**.

We create the Person object in the same way, but to add shared properties/functions we add them to the `Person.prototype` object.


```javascript
// define the person object with the properties unique for each person

function Person(first, last, age) {
  this.name = {
    first: first,
    last: last,
  }
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.name.first + ' ' + this.name.last;
}

// create some test cases

var wenjie = new Person('Wenjie', 'Kong', 'very young');
var sam = new Person('Sam', 'Fairbairn', undefined);

// add a new function to the Person prototype that will be available for all instances of a person

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.fullName() + '.');
};

wenjie.greeting();
// alerts "Hi! I'm Wenjie Kong."

sam.greeting();
// alerts "Hi! I'm Sam Fairbairn."

```

#### **Extending Prototypes (with prototype inheritance)**

Another advantage of using prototypes is they can inherit properties from one another, which means we can simplify the codebase by allowing objects to have their unique features but also share similar ones without code duplication.

There are three lines you need to add to extend a prototype object,

1. You need to call the parents constructor, passing the context (`this`) and shared properties like `Parent.call(this, properties)`

2. You must set the new objects prototype to the parents prototype like `Child.prototype = Object.create(Parent.prototype);`

3. After step 2 the new class' constructor will equal the parents constructor so you must reset it `Child.prototype.constructor = Child;`

_See the example below_

```javascript
function Person(first, last, age) {
  this.name = {
    first: first,
    last: last,
  }
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.name.first + ' ' + this.name.last;
}

// Employee object will inherit the properties of person

function Employee(first, last, age, position) {
  // 1. call the parent constructor
  Person.call(this, first, last, age);
  // set the other properties as normal
  this.position = position;
}

// 2. set the new class' prototype to the parents prototype
Employee.prototype = Object.create(Person.prototype);

// 3. reset the constructor
Employee.prototype.constructor = Employee;

// create a new child class
var wenjie = new Employee('Wenjie', 'Kong', 'very young', 'front-end developer');

// you can update the parent prototype after initialising children
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.fullName() + '.');
};

Person.prototype.introduction = function() {
  alert('Hi! I\'m ' + this.fullName() + ' and I\'m a ' + this.position + '.');
};

// this will still work the same
wenjie.greeting();
// alerts "Hi! I'm Wenjie Kong."

wenjie.introduction();
// alerts "Hi! I'm Wenjie Kong and I'm a front-end developer."

```

You can try copying the above code into the developer console and see what happens, if you then type in 'wenjie.' you'll see the object and it's properties/functions are available.

**Now in the console try adding a new employee and alerting the introduction.**

## **Exercise**

Try making a pet shop app, the page will have a table that displays a list of all the pets in the shop.

All pets will share some similar properties such as price and age, but different species may contain different properties, for example a dogs may have a breed and whether or not they are house-trained, birds may or may not have their wings clipped and so on.

If you need some guidance you can see the [full example of the Person/Employee app](https://jsfiddle.net/samfairbairn/oesbm7ar/28/) below

<iframe width="100%" height="500" src="//jsfiddle.net/samfairbairn/oesbm7ar/28/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


---

## **Further Reading**

_This is a good example of a simple vanilla js MVC app which also succinctly introduces the MVC approach:_

[Classic Front End MVC with Vanilla Javascript - Patrick Ackerman](https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702)

_This is a whole book which covers a range of topics such as MVC, MVP, frameworks like backbone, AMD, jquery, requirejs etc etc. A good reference point._

[Essential JS Design Patterns - Addy Osamni](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

_More on JS patterns and prototype_

[JavaScript Module Pattern In Depth (learn about importing global objects and advances patterns)](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

[A Definitive Guide to JavaScript Prototypes - Kevin Lee](https://hackernoon.com/a-definitive-guide-to-javascript-prototypes-2c263788021e)

_More on Structural design patterns_

[Understanding MVVM - Addy Osamni](https://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/)

[Understanding The Difference Between MVC, MVP and MVVM](https://www.linkedin.com/pulse/understanding-difference-between-mvc-mvp-mvvm-design-rishabh-software/)
