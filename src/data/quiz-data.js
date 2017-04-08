export const questions = [
  {
    "question": "Which of the following is true about reflows and repaints?",
    "answers": [
      "They're the same thing.",
      "Repaints (or redraws) occur when elements change their visual styles but not layout.",
      "Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.",
      "The previous two answers are correct."
    ],
    "correct": 3
  },
  {
    "question": "What are the three types of JavaScript errors?",
    "answers": [
      "Parse Errors, Syntax Errors and Runtime Errors.",
      "Loading Errors, Runtime Errors and Logic Errors.",
      "Syntax Errors, Logic Errors and Loading Errors.",
      "Bad Errors, Very Bad Errors, and Fatal Errors."
    ],
    "correct": 1
  },
  {
    "question": "What is a closure?",
    "answers": [
      "A function having access to the variables in the parent scope, even after the parent function has returned.",
      "A stateful function; a function that preserves state.",
      "An outer function that returns an inner function that's bound to the outer function's environment.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Where might you use a closure in JavaScript?",
    "answers": [
      "When currying or implementing partial application.",
      "To emulate private methods.",
      "Event handlers and callback functions.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Which of these is a use case for the bind, call, or apply methods?",
    "answers": [
      "You can use call or apply to borrow methods from other objects.",
      "You can use bind for partial function application.",
      "If you're using the map method to run a function on an array and you need to preserve the THIS context, you can use bind.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What does the bind method do?",
    "answers": [
      "Returns a function that, when executed, will call the original function with a THIS context that you pass in.",
      "Prevents the value of this from being overridden by call() or apply().",
      "Allows you to implement partial application of a function.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "How do objects inherit methods in JavaScript?",
    "answers": [
      "With Object.create().",
      "With class Sub extends Super in ES2015.",
      "Using Parent.method.call inside Child.prototype.method.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What is a promise?",
    "answers": [
      "An object that represents a possible future value.",
      "An object that's used for deferred and asynchronous computations.",
      "A proxy for a value that will eventually become available.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What is CORS?",
    "answers": [
      "Cross-Origin Resource Sharing",
      "Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain",
      "Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What is an Angular expression?",
    "answers": [
      "A JavaScript-like code snippet that is evaluated by Angular.",
      "A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).",
      "A binding in double curly brackets that gets evaluated and the results appear in the DOM in place of it.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "In Angular, what is a directive?",
    "answers": [
      "An Angular feature that takes an element and gives it new functionality.",
      "A reusable component.",
      "A combination of HTML and JavaScript that will execute together.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What does strict mode do?",
    "answers": [
      "Makes code more optimizable.",
      "Adds restrictions to prevent errors.",
      "Prevents the use of global variables and the use of dangerous code like WITH and EVAL.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What is event bubbling?",
    "answers": [
      "When the browser engine searches down the DOM tree for event handlers.",
      "When the browser engine searches up the DOM tree for event handlers.",
      "When the browser engine searches sideways on sibling elements for event handlers.",
      "None of the above."
    ],
    "correct": 1
  },
  {
    "question": "What is event delegation?",
    "answers": [
      "Attaching event handlers to child elements rather than parent elements.",
      "Creating custom event handlers.",
      "Attaching event handlers to a parent element rather than multiple child elements.",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "What is dependency injection?",
    "answers": [
      "There's no such thing.",
      "A type of data structure.",
      "A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself.",
      "A new drug the kids are doing nowadays."
    ],
    "correct": 2
  },
  {
    "question": "What are the six primitive data types in JavaScript?",
    "answers": [
      "Function, String, Undefined, Digit, Nil, and Double.",
      "Boolean, Null, Undefined, Number, String, and Symbol in ES6.",
      "Number, Class, Object, Hash, String, and Function.",
      "None of the above."
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is FALSE about the THIS keyword?",
    "answers": [
      "Its value is established at the invocation of a function.",
      "When a function is invoked with the NEW keyword, THIS is bound to the new object.",
      "Its value is set at the declaration of a function.",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "In Angular 2, which of the following are considered Structural Directives (directives that change DOM layout)?",
    "answers": [
      "NgFor and NgIf",
      "NgStyle and NgClass",
      "NgModel and NgForm",
      "None of the above."
    ],
    "correct": 0
  },
  {
    "question": "Which is TRUE about the events 'load' and 'DOMContentLoaded'?",
    "answers": [
      "The DOMContentLoaded event comes after the load event.",
      "DOMContentLoaded is fired when the document has been loaded and parsed; load fires when all files have finished loading, including images.",
      "The load event is fired when only the DOM is loaded and parsed. DOMContentLoaded is fired when the document is fully loaded, including images.",
      "They're the same thing."
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is NOT an example of a data structure in JavaScript?",
    "answers": [
      "Object",
      "Array",
      "Set in ES2015",
      "Trie"
    ],
    "correct": 3
  },
  {
    "question": "Which of the following values is truthy?",
    "answers": [
      "0",
      "\"\" (empty string)",
      "1",
      "undefined"
    ],
    "correct": 2
  },
  {
    "question": "What is an IIFE?",
    "answers": [
      "Immediately Iterable Function Evaluation",
      "Immediately Invoked Function Expression",
      "Initially Integrated Functional Element",
      "Internally Indexed File Extension"
    ],
    "correct": 1
  },
  {
    "question": "In React, what method is used to change state?",
    "answers": [
      "changeState()",
      "onChange()",
      "setState()",
      "stateSet()"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is an aspect of a pure function?",
    "answers": [
      "Doesn't have unintended side effects.",
      "Doesn't rely on, or affect, external state.",
      "Given the same input, it'll always return the same output.",
      "All of the above"
    ],
    "correct": 3
  },
  {
    "question": "Where is JavaScript used besides the browser?",
    "answers": [
      "Servers, databases, operating systems",
      "Desktop apps, mobile web apps, mobile hybrid apps, mobile native apps",
      "Robots, drones, Internet of Things devices",
      "All of the above"
    ],
    "correct": 3
  },
  {
    "question": "What are higher order components in React?",
    "answers": [
      "They're basically wrappers for other components.",
      "They take in another component as an argument.",
      "They're used to extend or modify the behavior of a wrapped component.",
      "All of the above"
    ],
    "correct": 3
  },
  {
    "question": "What does the NEW keyword do?",
    "answers": [
      "Creates a new empty object.",
      "Sets the prototype of the new object to the constructor's prototype and calls the constructor.",
      "Sets the THIS variable to the new object and returns the new object.",
      "All of the above"
    ],
    "correct": 3
  }
]
