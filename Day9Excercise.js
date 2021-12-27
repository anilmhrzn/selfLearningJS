let element = document.getElementById('heading')
console.log(element);
let eleCreated = document.createElement('div');
eleCreated.innerHTML=`<p>click here to change it</p>`;
element.appendChild(eleCreated);
console.log(eleCreated);

eleCreated.addEventListener('click',params=>{
    let str=prompt ('write');
    localStorage.setItem('changed',str)
    eleCreated.innerText=str
})
let stringss=localStorage.getItem('changed')
eleCreated.innerHTMl=`<p>${stringss}</p>`