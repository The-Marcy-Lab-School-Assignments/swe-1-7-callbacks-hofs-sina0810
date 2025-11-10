// Create callback functions for Higher-Order Functions:

const logEachValue = (arr) => {
   arr.forEach((value , index) => {
    console.log(`Value: ${value}, index: ${index}.`)
   })
};


const makePeopleHappy = (arr) => {
   arr.forEach((people) => people.isHappy = true)
};
   


const getEvenNumbers = (arrNum) => {
 return arrNum.filter((n) => n % 2 === 0)

};



const doubleEveryNumber = (arrNums) => {
  return arrNums.map((nums) => nums * 2)
};



const convertToBooleans = (arr) => {   
return arr.map((words) => Boolean(words))

};

// Create your own Higher Order Functions:
const myForEach = (arr, callback) => {
  arr.forEach((words) => callback(words))
 };
 const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
const result = myForEach(myNames, (name) => {
  console.log(`Hi, ${name}!`)
});


const myMap = (arr, transform) => {
    return arr.map(transform)
 };


const myFilter = (arr, test) => {
  let newArr = []
 for (let i =0; i < arr.length; i++){
  let word = arr[i]
  if (test(word)){
    newArr.push(word)  }
 }
   return newArr

 };

const myFind = (arr, test) => {

  for (let i =0; i < arr.length; i++){
  let word = arr[i];
    if(test(word)){
       return word
  } else {
    }
  }
      return undefined
};

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



