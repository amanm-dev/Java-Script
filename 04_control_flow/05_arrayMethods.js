let arr = [1,2,3,4]

let prod = arr.reduce( (acc, curr) => acc*curr+curr-acc,0);
console.log(prod);
