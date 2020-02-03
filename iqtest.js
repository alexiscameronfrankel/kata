function iqTest(numbers){
let numArr = numbers.split(" ");
// console.log(numArr);
let evenOrOdd = [];
numArr.forEach(num => evenOrOdd.push(parseInt(num,10)) ); //turns elements into numbers
console.log(evenOrOdd);
let oddArr  = [];
let evenArr = []; 

evenOrOdd.forEach(num => {

  if(num % 2) {
  oddArr.push(num)}
  
  else {
    evenArr.push(num)
}});

if(evenArr.length > oddArr.length) return evenOrOdd.indexOf(oddArr[0])+1; 
if(oddArr.length > evenArr.length) return evenOrOdd.indexOf(evenArr[0])+1;






}
