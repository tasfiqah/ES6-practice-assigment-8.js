// assigment-8.js
//Question 1: Array - Create an array

const fruits = ["apple", "Banana" , "Mango"];
fruits.push("orange");

console.log("push result:" , fruits);

fruits.pop();
console.log("pop result:" , fruits);

  // Question 2: Array Methods Create an array

const numbers = [10,20,30,40,50];

const mapResult = numbers.map(num=> num *2);
console.log("map result:" ,mapResult ,)

const filterResult = numbers.filter(num => num>25);
console.log("filter Result:" , filterResult);

// Question 3: Object Create an object:
//  find :
//  1. Print all keys using Object.keys().
// 2. Check if the object has the property "age".

const student = {
    name: "Rahim",
    age: 22
}

const objectkeys = Object.keys(student);
console.log("keys:" , objectkeys);

const checkHasOwnPropertyage = student.hasOwnProperty("age");
console.log("check Result:" , checkHasOwnPropertyage);


 // Question 4: Spread Operator

 const arr1 =[1,2,3];
 const arr2 = [4,5,6];
 const SpreadArray = [...arr1 , ...arr2];
 console.log("spread array:" , SpreadArray);


  // Question 5: Rest Parameter


   function sum(...numbers){
     return numbers.reduce((initialValue , total) =>  initialValue +total, 0);
}
   console.log("sum :", sum(10,20,30));


//    Question 6: Hoisting
// What will be the output of the following code?

console.log(a);
var a = 10;

// answer: undefined