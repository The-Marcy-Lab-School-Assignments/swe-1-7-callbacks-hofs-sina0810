// Create callback functions for Higher-Order Functions:

const logEachValue = (arr, callback) => {
  return arr.forEach(word => callback(word))
};
const eachValue = logEachValue (["a", "b", "c"], item => item)
console.log(eachValue)


const makePeopleHappy = (arrPeople, callback) => {
   return arrPeople.forEach(word => callback(word))
 };
 people.isHappy = people.isHappy = true
 console.log(people.isHappy)


const getEvenNumbers = (evenArr, callback) => { 
    return evenArr.filter(num => callback(num))
};
  const isEven = num => num % 2 === 0;
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]))



const doubleEveryNumber = (arrNums, callback) => { 
  return arrNums.map(num => callback(num))
};
  const result = doubleEveryNumber([1, 2, 3], item => item * 2 );
  console.log(result);



const convertToBooleans = () => { };

// Create your own Higher Order Functions:
const myForEach = () => { };

const myMap = () => { };

const myFilter = () => { };

const myFind = () => { };

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};



