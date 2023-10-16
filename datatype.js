//data types specificaly the different kinds of values that can be used and manipulated within a program .
//in js datatypes can be categorised as primitive(basic) or reference(complex) datatypes
//primitive datatypes include number, string,boolean, undefined, null
let height = 90; //number
const unit = "meters"; //string
let isAdmin = false; //boolean can store true or false
let userName =null;
let lastName // undefined --- initializing a variable without assigning it a value maks it undefined
//reference datatypes include object, array, functions
//object--- an imitation of a real world object
const car={
    color:"white", 
    is4WD: true ,
    start: function(){
        console.log("this car is starting");
    },
}
console.log(car);
//an array is a list of items (elements)
let colors = ["red", "yellow", "green"];;
const items= ["juice", { user: "fred", age:60},,'jug',true, 89]
//we can use typeof operator to check the datatype of any value or variable
console.log(typeof height);//number
console.log(typeof age);//string
console.log(typeof true); //boolean
console.log(typeof lastName);
console.log(typeof colors); 
console.log(typeof items); 


