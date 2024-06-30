console.log("Now we are going to create js objects");


// Object is a key value pair system and it must be created with const , key value pairs are also called literals
// Creating my first object in js and this is the first type to create a object
const obj = {
    firstName: "Aryan",
    LastName: "Yadav",
    age: "20"
};
// adding properties in first type of object
obj.son = "Dangerous";


// Creating js object using second method that is the copy of the first object
let x = obj; 
x.daughter = "calm";
console.log("this is for the first object");
console.log(obj.daughter);

// Creating Nested object in javascript
const parent = {
    Husband: "Aryan",
    Wife: "Ishu",
    children:{
        boy:"main",
        girl:"dangerous"
    }
};

// parent.child.boy = "myson";
console.log("this is for the nested object");
console.log(parent.children["boy"]);

// Javascript using object method
const obj2 = {
    first: "Aryan",
    last: "Yadav",
    age: 20,
    fullName: function(){
        return (`My fullname is ${this.first} ${this.last}`)
    }
}

