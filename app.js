//Simple Function
const sayHello = function(){
    console.log('Hello');
}

//Arrow Function
const sayHello = () => {
    console.log("This is Arrow Function");
}

//In Single Line--Don't need braces
const sayHello = () => console.log("This is single line Arrow Function"); 

//Return String
const sayHello = () => "Hello";

//Same As Above
const sayHello = function(){
    return "Hello";
}

//Problem-- Returning Object Literal---Solve--Wrap curly braces in Pranthesis
const sayHello = () => ({ msg:"Hellow"});

//Arguments
const sayHello = (name) => console.log(`Hello ${name}`);   

//Same as above---Single param does not need prathesis
const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Satinder");

const users = ['Nathen','John','William'];

//Using Simple Function
const nameLengths = users.map(function(name){
    return name.length;
})

//Using Arrow Function
const nameLengths = users.map(name => name.length);

// console.log(nameLengths);