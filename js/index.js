// Iteration 1: Names and Input
const hacker1 = "Pedro";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Julia";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1CharLength = hacker1.length;
const hacker2CharLength = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1CharLength} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2CharLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2CharLength} characters!`
  );
}

// Iteration 3: Loops
let nombreHacker1 = [];
for (let i = 0; i < hacker1CharLength; i++) {
  nombreHacker1 += hacker1[i].toUpperCase() + " ";
}

console.log(nombreHacker1);

let nombreHacker2 = [];
for (let i = hacker2CharLength - 1; i >= 0; i--) {
  nombreHacker2 += hacker2[i];
}

console.log(nombreHacker2);

let firstLetterHacker1 = hacker1[0];
let firstLetterHacker2 = hacker2[0];

if (firstLetterHacker1 > firstLetterHacker2) {
  console.log(`The driver's name goes first.`);
} else if (firstLetterHacker1 < firstLetterHacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Iteration 4: Functions
