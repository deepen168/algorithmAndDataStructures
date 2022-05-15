# Final Review Sheet:
## Javascript:
#### Arrays:
`for(const [index, num] of arr.entries()) {break; continue;}`

`for(const i of arr)`

`[...arr]` or `arr.push(...arr2)`

```
const arr = [1,2];
const [a, b] = arr; // a = 1, b = 2

arr.reduce(rev,val) => rev + val, '')  -> arr.reduce((revisionVal, eachElement) => revision + eachElement, initialValue);
arr.map((val) => val*2) // creates new array with returned value
arr.forEach((val, index) => {
	// use val and index here
})
arr.filter((val) => 
	if(val != 1){
		retrun val;
	}
) // creates new array with returned value
```
```
const arr = [0,1,2,3,4,5,6]
arr.slice(2); // [2,3,4,5] Does not modify original array
arr.slice(1,4) // [1,2,3] Does not modify original array
arr.slice(-2) // [5,6] Does not modify original array
arr.slice(2, -1) // [2,3,4,5] Does not modify original array

arr.splice(2) // [2,3,4,5] Modifies the original array
arr.splice(start, deleteCount, addItem1, addItem2, addItem3, ...)

arr.join('')
arr.includes('')
arr.indexOf(val)
arr.reverse()
arr.sort((a,b) => a - b)

Array.isArray(arr)

arr.indexOf(1) // 1
```

#### Object:
`for(const [key, value] of Object.entries(obj))`

`for(const i in obj)`

```
const obj = {a:1, b:2};
const {a1, b1} = obj; // a1 = 1, b1 = 2
```

`{...obj}` - Pushes all the deep properties of object

	obj.hasOwnProperty(property)
	Object.assign({}, obj) || {...obj} // copies from obj to empty or other object
	Object.create(obj) // creates a new object with obj as prototype
	
#### String:
	str.charAt(index)
	str.includes(word)
	str.indexOf(word|letter, startPoint)
	str.replace(word|regex, word) || replaceAll(word|regex, word)
	str.split(' ') //returns array
	str.subsring(start, end)
	str.toUpperCase() || str.toLowerCase()
	str.trim() || trimEnd() || trimStart()

#### This:

	references to the object that is calling the function
	There are three ways to call functions:
	1. function call as constructor, in this case this points to the function object if it was instantiated with new keyword
	2. object property as function, this will point to global object. window/process
		in strict mode it will be undefined until bind with any object
	3. indirect invocation
```
function car(model){
	console.log(model + ' and '+ this.make);
}

const honda = {
	make: 'honda'
}

const toyota = {
	make: 'toyota'
}


const hondaCar = car.call(honda, 'accord')
const toyotaCar = car.call(toyota, 'corolla')
```

```
function.bind(obj)
function.call(obj, arg)
function.apply(obj, [...args])
```

#### promise:
```
async function f() {

    let promise = new Promise((resolve, reject) => {
	    try {
			setTimeout(() => resolve("done!"), 1000);
		} catch (error) {
			reject(new Error('Failed')l
		}
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
}

f();

```

#### iterator | generator function:
```
function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();
it.next() // {value: 1, done:false}

can also be iterated by for of loop:

for (const itItem of it) {
    console.log(itItem);
}

```
#### Memory:
	Stack -  all premitive types are stored here, string, bool, numbers, references to Object and arrays in heap.
	Heap - all the objects and arrays are stored here
	
#### ___proto_ or prototype

	__proto__ - added to strings, nums, bool, array, object. all the executing methods
	prototype - added to classes, this stores all the base methods inside

#### Event-Loop and how JS executes

	call stack                   Web apis
	Javascript executes 		  Timeout and async waits happen here
	everything here 	
	
	
	EventLoop
	Event Queue - once wait or promises are fulfilled, they come here and wait for call stack to be over then they go inside call stack to be executed
	Render Queue - Animations come here and goes in the call stack in same fashion as event queue

## HTML:
```
<html>
<head> - metadata about html (base url, link to js or css file, title of the page)
	<title> - Required, does not show on page but used as title to find pages on search engine
	<link rel="stylesheet" href="styles.css">
	<base href="https://www.w3schools.com/" target="_blank"> - base url
	<meta> data about the html(encoding, author, description, keywords)
	<script src="myscripts.js"></script>
	<noscript>Your browser does not support JavaScript!</noscript>
<style> - inline styling
<script>
<body> - all the main HTML lives here
	<label for="idOfInput">
	<input type="text/radio/password/checkbox/color/date/...." id="usedInlabel" value="default"> - get by value attribut not by innerHTML
	<button class="button">Blue</button>
	<img src="img_boy.jpg" alt="the image of a boy" width="500" height="600">
	<ol> <li value="startPoint">
	<ul> <li> bullet points | to remove bullets list-style-type: none;
```

#### html menipulation:

```
document.getElementById("id").onclick = functioncall
document.getElementById("id").innerHTML = "str";
document.getElementById("inputTagId").value = "str";
document.querySelector("path")
document.querySelectorAll("path")

const div = document.createElement('div');
div.setAttribute('id' | 'class' | 'value', assignValue)
div.removeAttribute('att');
div.classList.add('className');
const h2 = document.createElement('h2');
h2.innerHTML = "category";
to add before elements: div.append(h2); || div.prepend(h2) to add element at the start
to add child element: parentElement.appendChild(childElement) || parentElem.prependChild(childElem)
element.remove()
element.addEventListener('change', (e) => console.log(e))
```

#### Accessibility
	Use headers <h1>,<h2>,<h3>… ;
	Use <img alt=””;
	Use attributetabindex=”index_position” to navigate the focus using Tab key;
	Use roles like <ul role=”list”><li role=”listitem”>, <dialog role=”dialog”. Find the whole list here;
	Use accesskey=”key” for creating keyboard shortcuts;
	use attributes to describe the element:
	   aria-label=”label_text”or aria-labelledby=”text_id”, aria-describedby=”text_id” and <label id="text_id">label_text</label> ;
	Use color contrasts, textures;
	Use text size;
	Use captions in a video;

## Angular:

## React:

## CSS:


### Content - Padding - Border - Margin

### Flex:

##### Parent container:
	display: flex; - add this to parent container
	flex-direction: row | row-reverse | column | column-reverse
	flex-wrap: nowrap | wrap
	justify-content: flex-start | flex-end | center
	
##### Child container:
	li {flex-grow: 4 | 3 | 2}

### Common CSS:
	@media screen and (max-width: 600px), (max-height: 500px)
	
	em - relative to parent element
	rem - relative to root element of html
	
	reset page
	*{
		margin:0;
		padding:0;
	}
	
	border: 5px solid #1C6EA4;
	
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	display: block | inline - blocks rest of the line, inline allows other elements
	
	background-image: url('./path')
	background-color: #ffffff; -sets background color
	color: #ffffff; - sets color of font or icon
	float: left

##### Selectors:
	.class tag{} 
	.class tag, .class {} - applies to both paths
	.class > tag {} - tag inside class
	.class input[type="text"]	
	
##### Text:	
	font-family: arial, helvetica, sans-sarif;
	font-size: 16px;
	font-weight: normal; // 100 | 200 | 300
	alt---
	font: normal 16px arial, helvetica, sans-sarif;
	line-height: 1.6em - use em for to the fonts
	text-align: center;
	text-decoration: underline; | none
	text-transform: uppercase;
	letter-spacing: 0.2em;
	word-spacing: 1em;
	
##### List:
	list-style: square;
	list-style: none;
	list-style-image: url('./image-path/.jpg')
		
	
##### pseudo:
	:hover
	:active - when element is clicked on
	:visited - changes color if element is visited(needs actual page in href)
	:first-child
	:last-child
	:nth-child(index | even | odd)
	
##### Button reset:
	.button{
		background-color: #333;
		color: #fff;
		padding: 10px 15px;
		border: none;
	}

##### Positioning elements side by side
	float: left;
	width: 33.3% - three block in the same line
	padding: 15px; this will make one of the block wrap into next line
	box-sizing: border-box; this will adjust width accordingly and account for padding and any border added
	
	
##### Positioning:
	static- default, follows the document flow
	relative - set this to parent and absolute will help move child element inside
	absolute - if parent is set to relative then child can be absolute and positioned whereever we want
	fixed - fixed position on the page, does not scroll with page scroll
	
##### CSS preprocessor - SASS- symentically awesome style sheet [transpiler]
	variables: $variable: value;
	Nested rules:
	
				div {
					h1 {
						a {}
					}
				}
				
	Modules: breakdown sass file in two, refer by @base
	
	mixin:@mixin | @include - use them as functions
				@mixin theme($theme: DarkGray) {
					background: $theme;
				}
				
	extend/inheritance:
				@extend %message-shared {
					border: 1px solid #ccc;
				}
				
## Database:

## API:

### Headers:
```
Accept:  application/json - The media type/types acceptable by client
Access-Control-Request-Method - GET/POST/PUT/DELETE/PATCH/DELETE/OPTIONS
Access-Control-Request-Headers: origin, x-requested-with, accept
Authorization: Bearer .......
Content-Type: application/x-www-form-urlencoded - The content type of the body of the request (used in POST and PUT requests).
Coockie:
Host:
origin:
X-CSRF-Token:
```

### Response Headers:

```
Cache-control: public(browser and proxy server can cache),
    private(only browser can cache) 
    , max-age=(in second)
    , must-revalidate(revalidate after expired)
    , no-cache(validate everytime before reused
    , no-store(dont store response)
```

## Data structures

### Stacks:
	[1,2,3,4,5] - 5 goes in last and comes out first

##### Use case:

##### Time complexity: 
	O(n) for contains, O(1) to remove or peek
	
##### Implementation:
	node - stack array
	add = arr.push
	remove = arr.pop
	peek = arr[length - 1]


### Queues:
	[3,2,1] -  1 goes in first and comes out 1st
##### Use case:

##### Time complexity: 
	O(n) to add, contains, O(1) to remove
	
##### Implementation:
	node - queue array
	add = arr.unshift
	remove = arr.pop
	peek = arr[lenth - 1]


### Linked-lists:
	1 -> 2 -> 3 -> 4

##### Use case:

##### Time complexity:
	
##### Implementation:
	node = this.data, this.next
		


### Binary tree:

##### Use case:

##### Time complexity:
	
##### Implementation:


### Binary search tree:

##### Use case:

##### Time complexity:
	
##### Implementation:


## Big o:


## Space complexity:

## Misc:

/[^a-zA-Z0-9]/g - to keep strings and numbers. add any perticular symbol or char you want to keep and it will keep it


## Linkedin:
	1. Event Propagation - specifically event bubbling and capturing. Give example.
		1. elem.addEventListener('click', function, capturing = false)
		2. capturing goes runs event from parent to child
		3. bubbling goes from child to parent
	2. CSS common methods and crash course
	3. css preprocessors
	4. How do you hide an element in web page? 
		1. add hidden tag
		2. set display: none for element
	5. How many ways can you compare two objects in javascript?
		1. I use lodash.isEqual for it
		2. iterate over props, shallow and deep
	6. binary tree node = data, children = [], add(), remove() traverse() -> Bfs,Dfs
	7.closures
		1. Function within function that uses variables from main function.
	8. inheritance
		function Foo(){
			this.a = 1
		}
		Foo.prototype.b = 2
		
		const foo = new Foo();
		foo.a // 1
		foo.b // 2
	9. execute a function without a constructor
	10. how to load video in html?
	11. how to add caption to video for accessibility?

## Infinite scroll:
	const elem = document.documentElement;
	elem.scrollTop - scrolled pixels
	elem.scrollHeight - total height of scrolling for element
	elem.clientHeight - height of client pixels

## Event debouncing:
	waits for trigerring the function execution until timeout between previous event is finished

	timeout is 1 sec, if user keeps typing words time out will not be met and function execution when there is a gap of greater than 1 sec 

## Event throttling:

	executes function once timeout is met after 1st event execution






