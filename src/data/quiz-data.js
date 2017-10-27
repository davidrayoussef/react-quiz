import React from 'react';

export const questions = [
  {
    "question": <p>Which of the following is TRUE about reflows and repaints?</p>,
    "answers": [
      <p>They're the same thing.</p>,
      <p>Repaints (or redraws) occur when elements change their visual styles but not layout.</p>,
      <p>Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.</p>,
      <p>The previous two answers are correct.</p>
    ],
    "correct": "Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc."
  },
  {
    "question": <p>What are the three types of JavaScript errors?</p>,
    "answers": [
      <p>Parse Errors, Syntax Errors and Runtime Errors.</p>,
      <p>Loading Errors, Runtime Errors and Logic Errors.</p>,
      <p>Syntax Errors, Logic Errors and Loading Errors.</p>,
      <p>Bad Errors, Very Bad Errors, and Fatal Errors.</p>
    ],
    "correct": "Loading Errors, Runtime Errors and Logic Errors."
  },
  {
    "question": <p>What is a closure?</p>,
    "answers": [
      <p>A function having access to the variables in the parent scope, even after the parent function has returned.</p>,
      <p>A stateful function; a function that preserves state.</p>,
      <p>An outer function that returns an inner function that's bound to the outer function's environment.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Where might you use a closure in JavaScript?</p>,
    "answers": [
      <p>When currying or implementing partial application.</p>,
      <p>To emulate private methods.</p>,
      <p>Event handlers and callback functions.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Which of these is a use case for the <code>bind</code>, <code>call</code>, or <code>apply</code> methods?</p>,
    "answers": [
      <p>You can use <code>call</code> or <code>apply</code> to borrow methods from other objects.</p>,
      <p>You can use <code>bind</code> for partial function application.</p>,
      <p>If you're using the <code>map</code> method to run a function on an array and you need to preserve the <code>this</code> context, you can use <code>bind</code>.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What does the <code>bind</code> method do?</p>,
    "answers": [
      <p>Returns a function that, when executed, will call the original function with a <code>this</code> context that you pass in.</p>,
      <p>Prevents the value of <code>this</code> from being overridden by <code>call</code> or <code>apply</code>.</p>,
      <p>Allows you to implement partial application of a function.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>How do objects inherit methods in JavaScript?</p>,
    "answers": [
      <p>With <code>Object.create</code>.</p>,
      <p>With <code>class Sub extends Super</code> in ES2015.</p>,
      <p>Using <code>Parent.prototype.method.call</code> inside <code>Child.prototype.method</code>.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What is a promise?</p>,
    "answers": [
      <p>An object that represents a possible future value.</p>,
      <p>An object that's used for deferred and asynchronous computations.</p>,
      <p>A proxy for a value that will eventually become available.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What is CORS?</p>,
    "answers": [
      <p>Cross-Origin Resource Sharing</p>,
      <p>Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain.</p>,
      <p>Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What is an Angular expression?</p>,
    "answers": [
      <p>A JavaScript-like code snippet that is evaluated by Angular.</p>,
      <p>A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).</p>,
      <p>A binding in double curly brackets that gets evaluated and the results appear in the DOM in place of it.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>In Angular, what is a directive?</p>,
    "answers": [
      <p>An Angular feature that takes an element and gives it new functionality.</p>,
      <p>A reusable component.</p>,
      <p>A combination of HTML and JavaScript that will execute together.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What does strict mode do?</p>,
    "answers": [
      <p>Makes code more optimizable.</p>,
      <p>Adds restrictions to prevent errors.</p>,
      <p>Prevents the use of global variables and the use of dangerous code like <code>with</code> and <code>eval</code>.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What is event bubbling?</p>,
    "answers": [
      <p>When the browser engine searches down the DOM tree for event handlers.</p>,
      <p>When the browser engine searches up the DOM tree for event handlers.</p>,
      <p>When the browser engine searches sideways on sibling elements for event handlers.</p>,
      <p>None of the above.</p>
    ],
    "correct": "When the browser engine searches up the DOM tree for event handlers."
  },
  {
    "question": <p>What is event delegation?</p>,
    "answers": [
      <p>Attaching event handlers to child elements rather than parent elements.</p>,
      <p>Creating custom event handlers.</p>,
      <p>Attaching event handlers to a parent element rather than multiple child elements.</p>,
      <p>None of the above.</p>
    ],
    "correct": "Attaching event handlers to a parent element rather than multiple child elements."
  },
  {
    "question": <p>What is dependency injection?</p>,
    "answers": [
      <p>There's no such thing.</p>,
      <p>A type of data structure.</p>,
      <p>A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself.</p>,
      <p>A new drug the kids are doing nowadays.</p>
    ],
    "correct": "A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself."
  },
  {
    "question": <p>What are the six primitive data types in JavaScript?</p>,
    "answers": [
      <p>Function, String, Undefined, Digit, Nil, and Double.</p>,
      <p>Boolean, Null, Undefined, Number, String, and Symbol in ES6.</p>,
      <p>Number, Class, Object, Hash, String, and Function.</p>,
      <p>None of the above.</p>
    ],
    "correct": "Boolean, Null, Undefined, Number, String, and Symbol in ES6."
  },
  {
    "question": <p>Which of the following is FALSE about the <code>this</code> keyword?</p>,
    "answers": [
      <p>Its value is established at the invocation of a function.</p>,
      <p>When a function is invoked with the <code>new</code> keyword, <code>this</code> is bound to the new object.</p>,
      <p>Its value is set at the declaration of a function.</p>,
      <p>None of the above.</p>
    ],
    "correct": "Its value is set at the declaration of a function."
  },
  {
    "question": <p>In Angular 2, which of the following are considered Structural Directives (directives that change DOM layout)?</p>,
    "answers": [
      <p><code>NgFor</code> and <code>NgIf</code></p>,
      <p><code>NgStyle</code> and <code>NgClass</code></p>,
      <p><code>NgModel</code> and <code>NgForm</code></p>,
      <p>None of the above.</p>
    ],
    "correct": "NgFor and NgIf"
  },
  {
    "question": <p>Which is TRUE about the events <code>load</code> and <code>DOMContentLoaded</code>?</p>,
    "answers": [
      <p>The <code>DOMContentLoaded</code> event comes after the <code>load</code> event.</p>,
      <p><code>DOMContentLoaded</code> is fired when the document has been loaded and parsed; <code>load</code> fires when all files have finished loading, including images.</p>,
      <p>The <code>load</code> event is fired when only the DOM is loaded and parsed. <code>DOMContentLoaded</code> is fired when the document is fully loaded, including images.</p>,
      <p>They're the same thing.</p>
    ],
    "correct": "DOMContentLoaded is fired when the document has been loaded and parsed; load fires when all files have finished loading, including images."
  },
  {
    "question": <p>Which of the following is NOT an example of a data structure in JavaScript?</p>,
    "answers": [
      <p>Object</p>,
      <p>Array</p>,
      <p>Set in ES2015</p>,
      <p>Trie</p>
    ],
    "correct": "Trie"
  },
  {
    "question": <p>Which of the following values is truthy?</p>,
    "answers": [
      <p><code>0</code></p>,
      <p><code>""</code> (empty string)</p>,
      <p><code>1</code></p>,
      <p><code>undefined</code></p>
    ],
    "correct": "1"
  },
  {
    "question": <p>What is an IIFE?</p>,
    "answers": [
      <p>Immediately Iterable Function Evaluation</p>,
      <p>Immediately Invoked Function Expression</p>,
      <p>Initially Integrated Functional Element</p>,
      <p>Internally Indexed File Extension</p>
    ],
    "correct": "Immediately Invoked Function Expression"
  },
  {
    "question": <p>In React, what method is used to change state?</p>,
    "answers": [
      <p><code>changeState()</code></p>,
      <p><code>onChange()</code></p>,
      <p><code>setState()</code></p>,
      <p><code>stateSet()</code></p>
    ],
    "correct": "setState()"
  },
  {
    "question": <p>Which of the following is an aspect of a pure function?</p>,
    "answers": [
      <p>Doesn't have unintended side effects.</p>,
      <p>Doesn't rely on, or affect, external state.</p>,
      <p>Given the same input, it'll always return the same output.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Where is JavaScript used besides the browser?</p>,
    "answers": [
      <p>Servers, databases, operating systems</p>,
      <p>Desktop apps, mobile web apps, mobile hybrid apps, mobile native apps</p>,
      <p>Robots, drones, Internet of Things devices</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What are higher order components in React?</p>,
    "answers": [
      <p>They're basically wrappers for other components.</p>,
      <p>They take in another component as an argument.</p>,
      <p>They're used to extend or modify the behavior of a wrapped component.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What does the <code>new</code> keyword do?</p>,
    "answers": [
      <p>Creates a new empty object.</p>,
      <p>Sets the prototype of the new object to the constructor's prototype and calls the constructor.</p>,
      <p>Sets the <code>this</code> variable to the new object and returns the new object.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>How is <code>let</code> different from <code>var</code>?</p>,
    "answers": [
      <p><code>let</code> is block scoped.</p>,
      <p><code>let</code> isn't hoisted.</p>,
      <p><code>let</code> can't be redeclared.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Which of the following is TRUE about the <code>this</code> keyword?</p>,
    "answers": [
      <p>If a method is called, <code>this</code> refers to the object that the method is a property of. If the <code>new</code> keyword is used, <code>this</code> is the new object instance.</p>,
      <p>If <code>call</code>, <code>apply</code> or <code>bind</code> are used, <code>this</code> is the object that's passed in as the argument.</p>,
      <p>If none of the above conditions are met, <code>this</code> refers to the global object (<code>window</code> in the browser in non-strict mode; <code>global</code> in Node).</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Which of the following is something to look out for when using arrow functions?</p>,
    "answers": [
      <p>An arrow function receives the <code>this</code> value of its surrounding lexical scope at the time it was created; it behaves as if it had been created using <code>fn.bind(this)</code>.</p>,
      <p>If used in an event listener attached to a DOM element, the <code>this</code> variable will refer to the parent (usually the window) object rather than the element you're targeting.</p>,
      <p>An arrow function can't be used as a constructor.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Which of the following methods can be used to organize/encapsulate code?</p>,
    "answers": [
      <p>The module pattern in ES5 or Module Import Export in ES6.</p>,
      <p>An Immediately Invoked Function Expression.</p>,
      <p>OO or Objects Linked to Other Objects</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What's an example of a practical use case for recursion?</p>,
    "answers": [
      <p>Traversing a tree (e.g., Walking the DOM).</p>,
      <p>Flattening a deeply nested array.</p>,
      <p>Deep freezing a deeply nested object.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What's the difference between <code>=</code>, <code>==</code>, and <code>===</code>?</p>,
    "answers": [
      <p><code>=</code> is the basic assignment operator. It assigns the value of its right operand to its left operand.</p>,
      <p><code>==</code> compares two values for equality AFTER converting both values to a common type.</p>,
      <p><code>===</code> is used for strict equality. It checks for equality of both value AND type.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  }
];
