//Part 1
/**
 * With that in mind, write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number.
For example, stringsLongerThan([‘say’, ‘hello’, ‘in’, ‘the’, ‘morning’], 3); would return [“hello”, “morning”].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/
let arr = [3, 5, 7, 8, 9];
// function sumArray(arr){
//     //store sum
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum +=arr[i]
//     }
//     return sum;
// }
//Part 2
/**
 * For the tasks below, use the following data to test your work:
[
{ id: “42”, name: “Bruce”, occupation: “Knight”, age: “41" },
{ id: “48”, name: “Barry”, occupation: “Runner”, age: “25" },
{ id: “57”, name: “Bob”, occupation: “Fry Cook”, age: “19" },
{ id: “63”, name: “Blaine”, occupation: “Quiz Master”, age: “58" },
{ id: “7”, name: “Bilbo”, occupation: “None”, age: “111" }
]
Use callback functions alongside Array methods to accomplish the following:
//Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/
let csvObj = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
//Sort the array by age.
function sortedByAge(arr) {
  return arr.sort((a, b) => parseInt(a.age) - b.age);
}
//Filter the array to remove entries with an age greater than 50.
function filterAge(array) {
  return array.filter((item) => Number(item.age) <= 50);
}
//Map the array to change the “occupation” key to “job” and increment every age by 1.
function mapOccupationAndIncrementAge(array) {
  let newObj = array.map((item) => ({
    id: item.id,
    name: item.name,
    job: item.occupation,
    age: String(Number(item.age) + 1),
  }));
  return newObj;
}
// Use the reduce method to calculate the sum of the ages.
function sumOfAge(array) {
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.age),
    0
  );
  return sum;
}
//calculate the average age
function AverageAge(array) {
  return sumOfAge(array) / array.length;
}
let result = AverageAge(csvObj);
console.log("The original ", csvObj, "The result ", Math.round(result));
