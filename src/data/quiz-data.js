import React from 'react';

export const questions = [
  {
    "question": <span>Which of the following is TRUE about reflows and repaints?</span>,
    "answers": [
      <span>They're the same thing.</span>,
      <span>Repaints (or redraws) occur when elements change their visual styles but not layout.</span>,
      <span>Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.</span>,
      <span>The previous two answers are correct.</span>
    ],
    "correct": "Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc."
  },
  {
    "question": <span>What are the three types of JavaScript errors?</span>,
    "answers": [
      <span>Parse Errors, Syntax Errors and Runtime Errors.</span>,
      <span>Loading Errors, Runtime Errors and Logic Errors.</span>,
      <span>Syntax Errors, Logic Errors and Loading Errors.</span>,
      <span>Bad Errors, Very Bad Errors, and Fatal Errors.</span>
    ],
    "correct": "Loading Errors, Runtime Errors and Logic Errors."
  },
  {
    "question": <span>What is a closure?</span>,
    "answers": [
      <span>A function having access to the variables in the parent scope, even after the parent function has returned.</span>,
      <span>A stateful function; a function that preserves state.</span>,
      <span>An outer function that returns an inner function that's bound to the outer function's environment.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Where might you use a closure in JavaScript?</span>,
    "answers": [
      <span>When currying or implementing partial application.</span>,
      <span>To emulate private methods.</span>,
      <span>Event handlers and callback functions.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Which of these is a use case for the <code>bind</code>, <code>call</code>, or <code>apply</code> methods?</span>,
    "answers": [
      <span>You can use <code>call</code> or <code>apply</code> to borrow methods from other objects.</span>,
      <span>You can use <code>bind</code> for partial function application.</span>,
      <span>If you're using the <code>map</code> method to run a function on an array and you need to preserve the <code>this</code> context, you can use <code>bind</code>.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What does the <code>bind</code> method do?</span>,
    "answers": [
      <span>Returns a function that, when executed, will call the original function with a <code>this</code> context that you pass in.</span>,
      <span>Prevents the value of <code>this</code> from being overridden by <code>call</code> or <code>apply</code>.</span>,
      <span>Allows you to implement partial application of a function.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>How do objects inherit methods in JavaScript?</span>,
    "answers": [
      <span>With <code>Object.create</code>.</span>,
      <span>With <code>class Sub extends Super</code> in ES2015.</span>,
      <span>Using <code>Parent.prototype.method.call</code> inside <code>Child.prototype.method</code>.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What is a promise?</span>,
    "answers": [
      <span>An object that represents a possible future value.</span>,
      <span>An object that's used for deferred and asynchronous computations.</span>,
      <span>A proxy for a value that will eventually become available.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What is CORS?</span>,
    "answers": [
      <span>Cross-Origin Resource Sharing</span>,
      <span>Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain.</span>,
      <span>Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What is an Angular expression?</span>,
    "answers": [
      <span>A JavaScript-like code snippet that is evaluated by Angular.</span>,
      <span>A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).</span>,
      <span>A binding in double curly brackets that gets evaluated and the results appear in the DOM in place of it.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>In Angular, what is a directive?</span>,
    "answers": [
      <span>An Angular feature that takes an element and gives it new functionality.</span>,
      <span>A reusable component.</span>,
      <span>A combination of HTML and JavaScript that will execute together.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What does strict mode do?</span>,
    "answers": [
      <span>Makes code more optimizable.</span>,
      <span>Adds restrictions to prevent errors.</span>,
      <span>Prevents the use of global variables and the use of dangerous code like <code>with</code> and <code>eval</code>.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What is event bubbling?</span>,
    "answers": [
      <span>When the browser engine searches down the DOM tree for event handlers.</span>,
      <span>When the browser engine searches up the DOM tree for event handlers.</span>,
      <span>When the browser engine searches sideways on sibling elements for event handlers.</span>,
      <span>None of the above.</span>
    ],
    "correct": "When the browser engine searches up the DOM tree for event handlers."
  },
  {
    "question": <span>What is event delegation?</span>,
    "answers": [
      <span>Attaching event handlers to child elements rather than parent elements.</span>,
      <span>Creating custom event handlers.</span>,
      <span>Attaching event handlers to a parent element rather than multiple child elements.</span>,
      <span>None of the above.</span>
    ],
    "correct": "Attaching event handlers to a parent element rather than multiple child elements."
  },
  {
    "question": <span>What is dependency injection?</span>,
    "answers": [
      <span>There's no such thing.</span>,
      <span>A type of data structure.</span>,
      <span>A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself.</span>,
      <span>A new drug the kids are doing nowadays.</span>
    ],
    "correct": "A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself."
  },
  {
    "question": <span>What are the six primitive data types in JavaScript?</span>,
    "answers": [
      <span>Function, String, Undefined, Digit, Nil, and Double.</span>,
      <span>Boolean, Null, Undefined, Number, String, and Symbol in ES6.</span>,
      <span>Number, Class, Object, Hash, String, and Function.</span>,
      <span>None of the above.</span>
    ],
    "correct": "Boolean, Null, Undefined, Number, String, and Symbol in ES6."
  },
  {
    "question": <span>Which of the following is FALSE about the <code>this</code> keyword?</span>,
    "answers": [
      <span>Its value is established at the invocation of a function.</span>,
      <span>When a function is invoked with the <code>new</code> keyword, <code>this</code> is bound to the new object.</span>,
      <span>Its value is set at the declaration of a function.</span>,
      <span>None of the above.</span>
    ],
    "correct": "Its value is set at the declaration of a function."
  },
  {
    "question": <span>In Angular 2, which of the following are considered Structural Directives (directives that change DOM layout)?</span>,
    "answers": [
      <span><code>NgFor</code> and <code>NgIf</code></span>,
      <span><code>NgStyle</code> and <code>NgClass</code></span>,
      <span><code>NgModel</code> and <code>NgForm</code></span>,
      <span>None of the above.</span>
    ],
    "correct": "NgFor and NgIf"
  },
  {
    "question": <span>Which is TRUE about the events <code>load</code> and <code>DOMContentLoaded</code>?</span>,
    "answers": [
      <span>The <code>DOMContentLoaded</code> event comes after the <code>load</code> event.</span>,
      <span><code>DOMContentLoaded</code> is fired when the document has been loaded and parsed; <code>load</code> fires when all files have finished loading, including images.</span>,
      <span>The <code>load</code> event is fired when only the DOM is loaded and parsed. <code>DOMContentLoaded</code> is fired when the document is fully loaded, including images.</span>,
      <span>They're the same thing.</span>
    ],
    "correct": "DOMContentLoaded is fired when the document has been loaded and parsed; load fires when all files have finished loading, including images."
  },
  {
    "question": <span>Which of the following is NOT an example of a data structure in JavaScript?</span>,
    "answers": [
      <span>Object</span>,
      <span>Array</span>,
      <span>Set in ES2015</span>,
      <span>Trie</span>
    ],
    "correct": "Trie"
  },
  {
    "question": <span>Which of the following values is truthy?</span>,
    "answers": [
      <span><code>0</code></span>,
      <span><code>""</code> (empty string)</span>,
      <span><code>1</code></span>,
      <span><code>undefined</code></span>
    ],
    "correct": "1"
  },
  {
    "question": <span>What is an IIFE?</span>,
    "answers": [
      <span>Immediately Iterable Function Evaluation</span>,
      <span>Immediately Invoked Function Expression</span>,
      <span>Initially Integrated Functional Element</span>,
      <span>Internally Indexed File Extension</span>
    ],
    "correct": "Immediately Invoked Function Expression"
  },
  {
    "question": <span>In React, what method is used to change state?</span>,
    "answers": [
      <span><code>changeState()</code></span>,
      <span><code>onChange()</code></span>,
      <span><code>setState()</code></span>,
      <span><code>stateSet()</code></span>
    ],
    "correct": "setState()"
  },
  {
    "question": <span>Which of the following is an aspect of a pure function?</span>,
    "answers": [
      <span>Doesn't have unintended side effects.</span>,
      <span>Doesn't rely on, or affect, external state.</span>,
      <span>Given the same input, it'll always return the same output.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Where is JavaScript used besides the browser?</span>,
    "answers": [
      <span>Servers, databases, operating systems</span>,
      <span>Desktop apps, mobile web apps, mobile hybrid apps, mobile native apps</span>,
      <span>Robots, drones, Internet of Things devices</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What are higher order components in React?</span>,
    "answers": [
      <span>They're basically wrappers for other components.</span>,
      <span>They take in another component as an argument.</span>,
      <span>They're used to extend or modify the behavior of a wrapped component.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What does the <code>new</code> keyword do?</span>,
    "answers": [
      <span>Creates a new empty object.</span>,
      <span>Sets the prototype of the new object to the constructor's prototype and calls the constructor.</span>,
      <span>Sets the <code>this</code> variable to the new object and returns the new object.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>How is <code>let</code> different from <code>var</code>?</span>,
    "answers": [
      <span><code>let</code> is block scoped.</span>,
      <span><code>let</code> isn't hoisted.</span>,
      <span><code>let</code> can't be redeclared.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Which of the following is TRUE about the <code>this</code> keyword?</span>,
    "answers": [
      <span>If a method is called, <code>this</code> refers to the object that the method is a property of. If the <code>new</code> keyword is used, <code>this</code> is the new object instance.</span>,
      <span>If <code>call</code>, <code>apply</code> or <code>bind</code> are used, <code>this</code> is the object that's passed in as the argument.</span>,
      <span>If none of the above conditions are met, <code>this</code> refers to the global object (<code>window</code> in the browser in non-strict mode; <code>global</code> in Node).</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Which of the following is something to look out for when using arrow functions?</span>,
    "answers": [
      <span>An arrow function receives the <code>this</code> value of its surrounding lexical scope at the time it was created; it behaves as if it had been created using <code>fn.bind(this)</code>.</span>,
      <span>If used in an event listener attached to a DOM element, the <code>this</code> variable will refer to the parent (usually the window) object rather than the element you're targeting.</span>,
      <span>An arrow function can't be used as a constructor.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>Which of the following methods can be used to organize/encapsulate code?</span>,
    "answers": [
      <span>The module pattern in ES5 or Module Import Export in ES6.</span>,
      <span>An Immediately Invoked Function Expression.</span>,
      <span>OO or Objects Linked to Other Objects</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What's an example of a practical use case for recursion?</span>,
    "answers": [
      <span>Traversing a tree (e.g., Walking the DOM).</span>,
      <span>Flattening a deeply nested array.</span>,
      <span>Deep freezing a deeply nested object.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  },
  {
    "question": <span>What's the difference between <code>=</code>, <code>==</code>, and <code>===</code>?</span>,
    "answers": [
      <span><code>=</code> is the basic assignment operator. It assigns the value of its right operand to its left operand.</span>,
      <span><code>==</code> compares two values for equality AFTER converting both values to a common type.</span>,
      <span><code>===</code> is used for strict equality. It checks for equality of both value AND type.</span>,
      <span>All of the above.</span>
    ],
    "correct": "All of the above."
  }
];
