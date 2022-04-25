# Final Review Sheet:
## Javascript:
### Iteration tricks:
#### Arrays:
`for(const [index, num] of arr.entries())`

`for(const i of arr)`

`[...arr]` or `arr.push(...arr2)`

```
const arr = [1,2];
const [a, b] = arr; // a = 1, b = 2
```

#### Object:
`for(const [key, value] of Object.entries(obj))`

`for(const i in obj)`

```
const obj = {a:1, b:2};
const {a1, b1} = obj; // a1 = 1, b1 = 2
```

`{...obj}` - Pushes all the deep properties of object

#### This:

#### html menipulation:

```
document.getElementById("id").onclick = functioncall
document.getElementById("id").innerHTML = "str";
document.getElementById("inputTagId").value = "str";
document.querySelector("path")
document.querySelectorAll("path")

const div = document.createElement('div');
div.classList.add('className');
const h2 = document.createElement('h2');
h2.innerHTML = "category";
to add before elements: div.append(h2); || div.prepend(h2) to add element at the start
to add child element: parentElement.appendChild(childElement) || parentElem.prependChild(childElem)
element.remove()
element.addEventListener('change', (e) => console.log(e))
```

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




## Angular:

## React:

## CSS:

## Database:

## API:

### Headers:
```
Accept:  application/json - The media type/types acceptable by client
Access-Control-Request-Method - GET/POST/PUT/DELETE
Access-Control-Request-Headers: origin, x-requested-with, accept
Authorization: Bearer by.....
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

#####Use case:

#####Time complexity: 
	O(n) for contains, O(1) to remove or peek
	
#####Implementation:
	node - stack array
	add = arr.push
	remove = arr.pop
	peek = arr[length - 1]


### Queues:
	[3,2,1] -  1 goes in first and comes out 1st
#####Use case:

#####Time complexity: 
	O(n) to add, contains, O(1) to remove
	
#####Implementation:
	node - queue array
	add = arr.unshift
	remove = arr.pop
	peek = arr[lenth - 1]


### Linked-lists:
	1 -> 2 -> 3 -> 4

#####Use case:

#####Time complexity:
	
#####Implementation:
	node = this.data, this.next
		


### Binary tree:

#####Use case:

#####Time complexity:
	
#####Implementation:


### Binary search tree:

#####Use case:

#####Time complexity:
	
#####Implementation:


## Big o:


## Space complexity:






















