// localStorage.setItem('name','anil')
// console.log(localStorage.getItem('name'));

let names= ['anil','abin','rajesh','bishu','bipin']
localStorage.setItem('names',JSON.stringify(names))


let newArray= JSON.parse(localStorage.getItem('names'))
newArray.forEach(element => {
    console.log(element)
});