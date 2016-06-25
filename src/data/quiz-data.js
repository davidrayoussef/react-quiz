export const questions = [
	{
		"id": 0,
		"question": "Which of the following is true about reflows and a repaints?",
		"answers": [
			"They're the same thing.", 
			"Repaints (or redraws) occur when elements change their visual styles but not layout.",
			"Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.",
			"The previous two answers are correct."				
		],
		"correct": 3
	},
	{
		"id": 1,		
		"question": "What are the three types of JavaScript errors?",
		"answers": [
			"Parse Errors, Syntax Errors and Runtime Errors",
			"Loading Errors, Runtime Errors and Logic Errors",
			"Syntax Errors, Logic Errors and Loading Errors",		
			"Bad Errors, Very Bad Errors, and Fatal Errors"
		],
		"correct": 1
	},
	{
		"id": 2,
		"question": "What is a closure?",
		"answers": [
			"A function having access to the parent scope, even after the parent function has closed.",
			"A stateful function; a function that preserves state.",
			"An outer function that returns an inner function that's bound to the outer function's enviornment.",
			"All of the above."
		],
		"correct": 3
	},
	{
		"id": 3,
		"question": "Where might you use a closure in JavaScript?",
		"answers": [
			"When currying or implementing partial application.",
			"To emulate private methods.",
			"Counting events.",
			"All of the above."				
		],
		"correct": 3
	},
	{
		"id": 4,
		"question": "Which of these is a problem you can solve with the bind, call, or apply methods?",
		"answers": [
			"If you're using the map method to run a function on an array and you need to preserve the THIS context, you can use bind.",
			"You can use call or apply to borrow methods from other objects.",
			"You can use bind for partial function application.",		
			"All of the above."				
		],
		"correct": 3
	},
	{
		"id": 5,
		"question": "What does the bind method do?",
		"answers": [
			"Returns a function that, when executed, will call the original function with a THIS context that you pass in.",
			"Prevents the value of this from being overridden by call() or apply().",
			"Answer 3",
			"Answer 4"				
		],
		"correct": 3
	},
	{
		"id": 6,
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
		"id": 7,
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
		"id": 8,
		"question": "What is CORS?",
		"answers": [
			"Cross-Origin Resource Sharing",
			"Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain",
			"Answer 3",
			"Answer 4"
		],
		"correct": 3
	},
	{
		"id": 9,
		"question": "What is a digest loop?",
		"answers": [
			"A task that iterates over expressions and watchers when Angular-related events occur.",
			"How Angular tracks changes and performs updates.",
			"Answer 3",
			"Answer 4"
		],
		"correct": 3
	},
	{
		"id": 10,
		"question": "What is $scope.apply?",
		"answers": [
			"Used to change $scope values and trigger a digest cycle.",
			"Useful for when changes occur outside of Angular.",
			"Answer 3",
			"Answer 4"	
		],
		"correct": 3
	},
	{
		"id": 11,
		"question": "What is scope in Angular?",
		"answers": [
			"A scope can be seen as the glue which allows the template, model and controller to work together.",
			"The current context that a directive, controller or template is executing within.",
			"Answer 3",
			"Answer 4"
		],
		"correct": 3
	},
	{
		"id": 12,
		"question": "What is an isolate scope?",
		"answers": [
			"Scope that's unique to the directive and is not affected by anything outside of it (aside from bindings)",
			"Answer 2",
			"Answer 3",
			"Answer 4"							
		],
		"correct": 3
	},
	{
		"id": 13,
		"question": "Which is an isolate scope property choices in Angular?",
		"answers": [
			"@ (Attribute observer)",
			"& (Expression builder)",
			"= Two-way binding - Used to pass data to directive",
			"All of the above."
		],
		"correct": 3
	},	
	{
		"id": 14,
		"question": "What is a way to improve performance in an Angular app?",
		"answers": [
			"Disable debug info and use bind once syntax.",
			"Limit amount of watchers and use ng-if instead of ng-show.",
			"Limit filters and use track by in ng-repeat.",
			"All of the above."
		],
		"correct": 3
	},
	{
		"id": 15,
		"question": "Which of the following are ways to communicate between modules in an Angular app?",
		"answers": [
			"Services and Events.",
			"Between controllers using ControllerAs.",
			"Module injection.",
			"All of the above."
		],
		"correct": 3
	},
	{
		"id": 16,
		"question": "What is an Angular expression?",
		"answers": [
			"A JavaScript-like code snippet that is evaluated by Angular.",
			"A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).",
			"A binding in double curly brackets that gets evaluated and the results get placed in the DOM in place of it.",
			"All of the above."
		],
		"correct": 3
	},
	{
		"id": 17,
		"question": "What is a directive?",
		"answers": [
			"An Angular feature that takes an element and gives it new functionality.",
			"A reusable component.",
			"A combination of HTML and JavaScript that will execute together.",
			"ngIf, ngHide, ngShow, ngRepeat, ngClick, ngClass, ngModel"
		],
		"correct": 3
	},
	{
		"id": 18,
		"question": "What's strict mode?",
		"answers": [
			"Makes code more optimizable.",
			"Adds restrictions to prevent errors.",
			"Prevents the use of global variables.",
			"Prevents the use of dangerous code like with and eval."
		],
		"correct": 3
	},
	{
		"id": 20,
		"question": "What is event bubbling?",
		"answers": [
			"When the browser engine goes up the DOM tree looking for events.",
			"When the browser engine goes down the DOM tree looking for events.",
			"Answer 3",
			"Anser 4"
		],
		"correct": 3
	},
	{
		"id": 21,
		"question": "What is event delegation?",
		"answers": [
			"Attaching event handlers to a parent element rather than multiple child elements.",
			"Answer 2",
			"Answer 3",
			"Anser 4"			
		],
		"correct": 3
	},
	{
		"id": 21,
		"question": "What is dependency injection?",
		"answers": [
			"A coding pattern in which a class receives the instances of objects it needs from an external source rather than creating them itself.",
			"Answer 2",
			"Answer 3",
			"Anser 4"			
		],
		"correct": 3
	}
]
