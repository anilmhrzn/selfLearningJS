// console.log("hello");
// let element=document.getElementById('h2');
// element=element.parentNode
// element.innerText='this changes inner text'
// element.innerHTML='<b>hey this changes html'
// console.log(element);


// multi element selector 
// let elements = document.getElementsByClassName('child')
// elements=document.getElementsByTagName('div')
// Array.from(elements).forEach((element)=>{element.style.color="blue";})


// let sel =document.querySelector('.temp')
// sel=document.querySelector('#container')
// console.log(sel.children[0].nodeType);

// selecting grandchilds
// let sel = document.querySelector('#container');
// let firstChild=sel.children[0]
// let childOfFirstChild=firstChild.children[0]
// console.log(childOfFirstChild);

//********* */
// firstChild 
// firstElementChild
// childElementCount
//parentNode
//nextElementSibling

// let sel=document.querySelector('#container')
// let firstChild =sel.firstElementChild
// console.log(sel);
// console.log(firstChild);
// console.log(sel.childElementCount);


// let sel =document.querySelector('#container')
// let firstChild=sel.firstElementChild
// let nextSibling=firstChild.nextElementSibling
// console.log(nextSibling);


// creating removing and deleting the element

// create

// let element=document.createElement('li')
// element.className='myList';
// element.setAttribute('title','list Title')
// element.innerText="this is my list"


// let myElement=document.querySelector('div#first')
// myElement.appendChild(element)

// replace 
//  using .repalaceWith

/*
let element=document.querySelector('div.temp')

let myElement= document.createElement('h1')
myElement.className='myHeading'
myElement.innerText="hello this is my heading"
element.replaceWith(myElement)
*/

//remove 
// using remove()

/*
let element=document.querySelector('div.temp')
element.remove()
*/

// using setAttribute
/*
let element=document.querySelector('div.temp')


element.setAttribute('title','title of temporary dev')
console.log(element);
*/

// quick quiz 
// create a heading element with text as "Go to codewithharry" and create an a tag outside it with href = "htttps://www.codewithharry.com" 

/*
let element=document.createElement('h1')
element.innerText='Go to codewithharry'
let outElement=document.createElement('a')
outElement.setAttribute('href','https:www.codewithharry.com')
outElement.appendChild(element)
let sel=document.querySelector('body')
    sel.append(outElement)
    console.log(element);
*/