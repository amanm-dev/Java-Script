let a = 123
console.log(typeof a, a);

a = String(a)
console.log(typeof a, a);

let b=true
b = String(b)
console.log(typeof b, b);

let c = null, d = undefined
c = Number(c)
d = Number(d)
console.log(typeof c, c);
console.log(typeof d, d);