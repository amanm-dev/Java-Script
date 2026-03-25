// node 01_basics/0_temp.js
let x = 10  // x!
let n = 10 // 1+2+...+n
let fact=1, sum=0

for(let i=x; i>0; i--){
    fact *= i
}

for(let i=1; i<=n; i++){
    sum += i
}
if(fact > 10000) fact = 10000
// console.log("Factorial = "+fact);
// console.log("Sum = "+sum);
let a = `${"jkbj-"}${"bhjgkj"}`
// console.log(a);

let gameName = "hello"
console.log(gameName[0]);
console.log(gameName.__proto__);


