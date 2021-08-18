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

// functions

// annotations on variables that are assigned function expression/value
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};

// annotations on function expression/value
const add = (a: number, b: number): number => {
  return a + b;
};

// annotations for arrow functions (also anonymous)
const subtract = (a: number, b: number) => {
  a - b; // produces no warnings or errors on missing return statement since void is still a valid return type
};

const divide = (a: number, b: number) => {
  return a / b + "string"; // produces runtime bug or logical error | infers wrong incorrect return type
};

// annotations for function declarations
function divide2(a: number, b: number): number {
  return a / b;
}

// annotations for anonymous funcs assigned to variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void return type
const logger = (message: string): void => {
  console.log(message);
};

// never return type - only use if no return statements and using throw new Error
const throwError = (message: string): never => {
  throw new Error(message);
};

// annotate return type even if code throws an error and return statement not reached, when func is executed
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// still need to annotate void cause we return void if we don't enter if-conditional block
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// desctructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// objects

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// arrays

const carMakers = ["ford", "toyota", "chevy"];

// annotate if initializing var with an empty array
const carMakers2: string[] = [];

const carsByMake = [
  ["f150"],
  ["corolla"],
  ["camaro"]
]

const carsByMake2: string[][] = []