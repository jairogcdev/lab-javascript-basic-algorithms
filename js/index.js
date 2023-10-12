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

// Bonus1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus efficitur ligula, ac volutpat tellus cursus id. Morbi luctus congue orci. Fusce egestas ex ut diam congue consectetur. In pharetra nisi arcu, et gravida orci viverra ut. Mauris maximus eros a orci rutrum condimentum. Vestibulum leo metus, facilisis sed venenatis ut, malesuada suscipit nibh. Nulla viverra ex diam, sed iaculis nisi congue quis. Ut lectus eros, efficitur id lacinia malesuada, semper id justo. Donec eu felis et nibh feugiat viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ipsum lectus, imperdiet ut augue ac, dignissim convallis massa. Morbi eget leo dapibus, ornare nulla quis, gravida neque. Curabitur quis nisl est. Integer egestas sapien ac nulla faucibus, at convallis est imperdiet.

Donec varius viverra luctus. Vivamus at lectus ac nisl eleifend eleifend. Quisque maximus, odio eu consectetur vestibulum, quam lorem pharetra ante, quis placerat ligula turpis ac felis. Integer sollicitudin eleifend nunc, nec interdum eros faucibus id. Duis gravida tincidunt egestas. Phasellus placerat neque porta sem luctus gravida. Sed et laoreet odio. Maecenas ut bibendum enim. Nullam et leo scelerisque, varius nisi at, dictum lacus.

Duis fringilla eu lacus id facilisis. Phasellus pretium lectus ut varius posuere. Maecenas sollicitudin ante id sapien cursus, vel consectetur est porttitor. Proin et metus sit amet purus fringilla feugiat at quis nisl. Pellentesque consequat est dui, in blandit dui tristique eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt urna ut pellentesque fringilla. Phasellus faucibus tellus dui, dignissim ultricies nulla aliquet nec. Nam vitae pharetra sapien, sed eleifend libero. Maecenas id ex eleifend, tincidunt urna in, dignissim enim. Sed at nulla id magna sodales faucibus et a augue. Donec sodales feugiat massa, eget rutrum eros feugiat vitae.`;

let contadorWords = 0;
let contadorEt = 0;
let contadorParagraph = 0;

for (let index = 0; index < longText.length; index++) {
  const element = longText[index];
  const nextElement = longText[index + 1];
  if (element === " ") {
    contadorWords++;
  }
  if (element === "\n") {
    contadorParagraph++;
  }
  if (element === "e" && nextElement === "t") {
    contadorEt++;
  }
}
let nWords = contadorWords + 1 + contadorParagraph / 2;
console.log(nWords);
console.log(contadorEt);

let phraseToCheck = `No 'x' in Nixon`;
let newPhrase = "";
for (let index = 0; index < phraseToCheck.length; index++) {
  if (
    phraseToCheck[index] === " " ||
    phraseToCheck[index] === "," ||
    phraseToCheck[index] === "'" ||
    phraseToCheck[index] === "!" ||
    phraseToCheck[index] === "?"
  ) {
    continue;
  }

  newPhrase += phraseToCheck[index].toLocaleLowerCase();
}

let phraseLength = newPhrase.length;
let halfPhrase;
if (phraseLength % 2 === 0) {
  halfPhrase = newPhrase.slice(0, newPhrase.length / 2);
} else {
  halfPhrase = newPhrase.slice(0, newPhrase.length / 2 + 1);
}
let secondHalfPhrase = newPhrase.slice(newPhrase.length / 2);
let element = "";

for (let index = halfPhrase.length - 1; index >= 0; index--) {
  element += halfPhrase[index];
}

if (element === secondHalfPhrase) {
  console.log("is Palindrome");
} else {
  console.log("is not Palindrome");
}
