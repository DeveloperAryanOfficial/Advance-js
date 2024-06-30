// In js there are 5 types of loops 
/*
1. for 
2. do
3. do while
4. for in
5. for of
*/

// Example for , for in loop
const obj = {
    a: 1,
    b: 2
}
let text = "arya";
for(let key in obj){
    // console.log(obj[key]);
    text =  text + obj[key];
}

console.log(text);

// for in over arrays case

const arr = [1, 3, 4, 5, 6];
for (const index in arr) {
    // console.log(index);  Here in the case of array x is a indexing values
    console.log(index, arr[index]);   // now this is the value of arrays
}

// foreach method in arrays
arr.forEach((e)=>{
    console.log(e);
})


// for of loops in js 
// You can use for of with array and strings 
console.log("This is for the for of loop");

for (const x of arr) {
    console.log(x);
}

// IN the case of string
console.log("This is for the string using with for of");
const str = "MY name is aryan yadav"
for (const x of str) {
    console.log(x);
}