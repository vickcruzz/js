console.log("Hello world!!");
console.log("Hello world!!");
//variables---data stores--- in js we can deggine variables in three words, using let, const and var;
let userName = " Victor ";
let age = 40;
var email= "vickcruzz21@gmail.com";//The only way before 2015(ES6)
const gender ="male";//Hold constant varaiables - values cannot be changed in the program
console.log(email);
email="cruzz@gamil.com";
console.log(email);
//gender = female ;//Typeerror -We cannot reasign a valuae to a contant variable
console.log(gender);
if(age > 18) {
    console.log(userName + " is an adult ");
    document.querySelector("h1").textContent= userName + " is an adult ";
} else{
    console.log(userName + " is young ");
    document.querySelector("h1").textContent= userName + " is an young ";

}