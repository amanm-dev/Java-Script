let given = 464

let temp = given
let rev = 0

while(temp > 0) {
    let digit = temp%10
    temp = Math.floor( temp/10 )
    rev = rev*10 + digit
}

if(given == rev)
    console.log("Yes");
else 
    console.log("No");
    