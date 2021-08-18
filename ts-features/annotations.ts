// type annotations

// using annotations with variable assignments

// primitives
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use type annotations:

// 1) func returns "any" type

// const json = "{'x': 10, 'y': 20}"; // not valid json since using single quotes
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // returns an "any" type because method depends on the args so ts automatically says that method returns any
console.log(coordinates);

// 2) delayed initialization - declare a variable on one line and only initialize later

let words = ["red", "green", "blue"];
let foundWord: boolean; // in reality: let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) inference doesn't work

// bad code
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
