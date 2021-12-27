// let element1 = document.querySelector('h5')
// element1.innerHTML="<h2>helllo this is my introduction </h2>"

// let element2 = document.getElementById('first')
// console.log(element2);
// let childElem2 = element2.children[0]
// childElem2.innerText="list of things i love to do "
// console.log(childElem2);


let element = document.createElement('h1')
element.innerText='hello eveyone'
element.setAttribute('id','hello')
element.setAttribute('class','helloWala')
let docEle= document.querySelector('#fifth')
docEle.appendChild(element)
element.removea