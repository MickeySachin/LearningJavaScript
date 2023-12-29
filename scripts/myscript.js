
// ************************************************* JS DOM

// Creating new element and appending it into body
/*
let newElem = document.createElement('p')
newElem.textContent = 'This is a paragraph.'
newElem.id = 'p1';
document.body.appendChild(newElem)

// Changing newly created element's content
newElem.innerHTML = '<h1>Hello world!</h1>';
newElem.style.textAlign = 'center'

let userInpBox = document.createElement('input')
userInpBox.type = "text"
userInpBox.placeholder="Enter your name here..."
userInpBox.id = 'username'
document.body.appendChild(userInpBox)

let submitBtn = document.createElement('button')
submitBtn.type = 'button'
submitBtn.innerText = 'Click Me'
submitBtn.id = 'btn1'
submitBtn.addEventListener('click', onClickFunc)
document.body.appendChild(submitBtn)
// document.body.insertAdjacentHTML('afterbegin', submitBtn)

// adding onclick event on button
function onClickFunc() {
    let username = document.getElementById("username").value;   
    document.getElementById("p1").innerHTML = '<h1>'+ username +'</h1>'
}


// ****************************************************** Numbers and Operators

// nullish coalescing operator
var x = null ?? 0; // Returns that argument which is not null
console.log(x)

// optional chaining operator
var y = {type : 'Mclaren', engine : 'v12'};
console.log(y ?. name);   // returns 'undefined' argument not found

// Numbers ( double precision 64-bit floating pt numbers )
// JS interpreter works from left side to right side of operand
var x = 4;
var y = '5';
var z = x + y
console.log(z)
console.log(typeof(z))

// JS numeric strings
x = '5'
y = '4'
z = x * y
console.log(z)
console.log(typeof(z))


// *************************************************** Objects

const obj1 = {
    firstname : 'Sachin',
    lastname : 'Bawa',
    // fullname : this.firstname + this.lastname,  // This doesn't works
    funFullName : function(){
        return this.firstname + ' ' + this.lastname;
    }
};

console.log(obj1.lastname)
console.log(obj1.funFullName())


// **************************************************** Arrays

const arr = ['mango', 'apple', 20];
let arrLen = arr.length;

// Accessing array elements using Array.forEach()
var text = '<ul>';
arr.forEach(myfunc);
text += '</ul>';

document.getElementById('pr1').innerHTML = text;

function myfunc(item){
    text += '<li>' + item + '</li>'
}

arr.push(21);
console.log(arr)

arr[arr.length + 1] = 24;  // arr[4] = 24
console.log(arr)

// knowing the array type
const newarr = new Array(1, 'mango', 'orange', 'limon', 2);
console.log('typeof - ', typeof newarr)
console.log('is array? - ', newarr instanceof Array)

// array methods
const arr1 = []
const arr2 = []

arr1.push('Orange')
arr1.push('mango')
arr1.push('grapes')
console.log(arr1)

arr2[0] = 1
arr2[1] = 7
arr2[2] = 4
console.log(arr2)

arr1.unshift('Apple')  // Adds new element at beginning
console.log(arr1)

arr1.shift()
console.log(arr1)  // Removes first element from beginning

arr1.pop()   // Remove last element
console.log(arr1)

arr1.splice(1, 0, 'Apple', 'Lichi')  // Adds new elements at 1st index without removing any existing elements
console.log(arr1)

arr1.splice(0, 2)  // Removes 2 elements from 0th index
console.log(arr1)  

delete arr1[1]
console.log(arr1)  

let mergedArr = arr.concat(arr1, arr2)
console.log(`Concatenated arrays = ${mergedArr}`)

let fname = 'Sachin'
console.log(`my name is ${fname}`)



// **************************************************** Functions

// Self invoking function - function of global object - window
(function(){
    document.write('<h2>Welcome to this page!</h2>');
})();


// Function constructor
function printData(){
    let name = prompt('Enter your name : ');
    let age = parseInt(prompt('Enter your age : '));
    document.write(`${name} - ${age} <br>`);
}
const obj1 = new printData();  // caling constructor


// rest parameter with function returning multiple values 
function sumAll(...args){
    let sum = 0;
    for ( let i = 0; i < arguments.length; i++) 
    {
        sum += arguments[i];
    }
    return [sum, arguments.length];
}
let x = sumAll(3, 4, 5, 6, 7, 8, 9, 90, 1);  // Array
document.write(`Sum of ${x[1]} arguments = ${x[0]}  <br><br>`);
document.write(`typeof x = ${typeof(x)}  <br><br>`);
document.write(`Is x an Array = ${x instanceof Array}  <br><br>`);
// OR 
// let [x, y] = sumAll(3, 4, 5, 6, 7, 8, 9, 90, 1);  // Array
// document.write(`Sum of ${y} arguments = ${x}  <br><br>`);
// document.write(`typeof x = ${typeof([x, y])}  <br><br>`);
// document.write(`Is x an Array = ${[x, y] instanceof Array}  <br><br>`);


// call()
const person = {
    fullName : function(address){
        return `${this.fname} - ${this.lname} - ${address} <br><br>`;
    }
}
const per1 = {
    fname : 'Sachin',
    lname : 'Bawa'
};
const per2 = {
    fname : 'Soham',
    lname : 'Kashyap'
};
document.write(person.fullName.call(per1, 'Kharal'));
document.write(person.fullName.call(per2, 'Akhara'));


// apply() - takes args in array
const person = {
    fullName : function(address, age){
        return `${this.fname} - ${this.lname} - ${address} - ${age} <br><br>`;
    }
}
const per1 = {
    fname : 'Sachin',
    lname : 'Bawa'
};
document.write(person.fullName.apply(per1, ['Kharal', 23]));


// bind() with setTimeout()- to borrow a method from another object
const person = {
    fname : 'sachin',
    lname : 'bawa',
    fullName : function(address, age){
        document.write(`${this.fname} - ${this.lname} <br><br>`);
    }
};
let displayFunc = person.fullName.bind(person);
setTimeout(displayFunc, 3000);


// closures using nested functions
let counter = 0;
const add = (function(){
    return function(){ counter++; return counter; }
})();

function onClickFunc(){
    document.getElementById('para').innerHTML = add();
}


*/
// Sorting - sort() is used to sort alphabets by default
function sortNumbers(){
    let arr = [56, 78, 45, 9];
    return arr.sort(function(a, b) { return b - a; });
}
function onClickFunc(){
    document.getElementById('para').innerHTML = sortNumbers();
}