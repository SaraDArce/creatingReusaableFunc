// Creating Reusable Functions Lab

// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.

const basketNumbers = [15, 76, 5, 45, 67];

const sumArr = (numArr) => {
  let sum = 0;
  for (let i = 0; i <= numArr.length - 1; i++) {
    sum = sum + numArr[i];
  }
  return sum;
};
console.log(sumArr(basketNumbers));

// Take an array of numbers and return the average.

const avgArr = (averageArr) => {
  let sum = 0;
  for (let i = 0; i <= averageArr.length - 1; i++) {
    sum = sum + averageArr[i];
  }
  return sum / averageArr.length;
};
console.log(avgArr(basketNumbers));

// Take an array of strings and return the longest string.
const lambChop = ["This", "is", "the", "song", "that", "never", "ends"];

const longString = (groupString) => {
  let longestString = "";
  for (let i = 0; i <= groupString.length - 1; i++) {
    if (groupString[i].length > longestString.length) {
      longestString = groupString[i];
    }
  }
  return longestString;
};

// Take an array of strings, and a number and return an array of the strings that are longer than the given number
const givenNumString = (groupString, num) => {
  let arrayStrings = [];
  for (let i = 0; i <= groupString.length - 1; i++) {
    if (groupString[i].length > num) {
      arrayStrings.push(groupString[i]);
    }
  }
  return arrayStrings;
};
console.log(givenNumString(lambChop, 2));

// Optional- Take a number n, and print every number between 1 and n without using loops. Use recursion.

function stringLongerThanNum(strings, arrNumber) {
  let longerStrings = [];
  strings.forEach((string) => {
    if (string.length > arrNumber) {
      longerStrings.push(string);
    }
  });
  return longerStrings;
}

let mixArray = stringLongerThanNum(
  ["hello", "wonderful", "cool", "hi", "bye"],
  3
);
console.log("Longer String than Number: " + mixArray);
// let mixArray = stringLongerThanNum([‘hello’, ‘wonderful’, ‘cool’, ‘hi’, ‘bye’],3);
// console.log(“Longer Strings than number:“,mixArray);
