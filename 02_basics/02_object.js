// node 02_basics/01_array.js
const obj = {
    name: "aman mishra",
    // "namefull": "Aman Mishra",
    age: 21
}
// console.log(obj.namefull);
// console.log(obj["namefull"]);
// obj.age = 20
// console.log(obj.age);
// obj.f = function(){
//     console.log("Hello User");
// }

// obj.f()

// let f2 = obj.f
// f2()

const obj2 = {
    name2: "ajit mishra",
    age2: 18
}
const obj3 = {
    name3: "kabir"
}

const obj4 = Object.assign(obj,obj2,obj3)
console.log(obj);
console.log(obj2);
console.log(obj4);



