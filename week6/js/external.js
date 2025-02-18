console.log("Ummm... where are we?");

const birthYear = 1207;
let myName = "Ty the Noodle Arm Guy";

console.log(myName, "was born", birthYear);

myName = "Ty the Fly Guy";

// birthYear = 1208;
// ^ const variables cannot change value

console.warn(myName, "MAY hve devoured ten souls");

console.log("My name is", myName.length, "characters long");

console.log("My name includes ty", myName.toUpperCase().includes("TY"));

console.log("My name has uppercase", myName !== myName.toLowerCase());