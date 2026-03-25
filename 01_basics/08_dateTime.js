// node 01_basics/08_dateTime.js
// import { Temporal } from "@js-temporal/polyfill";  // installed polyfill -> gpt guided
// console.log(Temporal.Now.instant().toString());  //.toString -> gpt guided

// -------------------------------------- //

let myDate = new Date()
console.log(myDate);
console.log(Date.now());
console.log(Date());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleString('default',{
  weekday: "long",   // Monday
  year: "numeric",
  month: "long",    // Mar
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,       // AM/PM
  timeZone: "Asia/Kolkata",
//   timeZoneName: "short"
}
));



