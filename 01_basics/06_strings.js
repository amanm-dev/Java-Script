// node 01_basics/06_strings.js
let str = "hello-world"
let str2 = "aman-mishra n ajit-mishra"

console.log(str.replace("hello","aman's"));
console.log(str2.split(" n "));
console.log(str.split(" "));

let c = "  hi  "
console.log(c.trim());
console.log(str.substring(1,5));

console.log(str.slice(3))

let name = "Aman"
// name = name.concat("Mishra",str,"Done")
// console.log(name);
let rep = name.repeat(3)
console.log(rep);
const paragraph = "Aman 123 Mishra";
const regex = /\d+/g;
const found = paragraph.matchAll(regex);

let x = 'd'
let y = 'd'
let ans = x.localeCompare(y)

console.log(ans);

