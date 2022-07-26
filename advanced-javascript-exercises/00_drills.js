// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  //convert to an array since strings are immutable
  const split = str.split('')
  
  // ["H", "e", "l", "l", "o" ]
  const reveresed = split.reverse()

  // ["o", "l", "l", "e", "H"]
  return reveresed.join('')

  // could also compress all into return str.split('').reverse(0.join('')
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
let x = 1; 
let i = num
do{ 
  x = x-1; 
  i--;
}
while(i>0)
}
// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  arr1.length === arr2.length ? arr1.map((el=i) => [el, arr2[i]]) : -1
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let r1 = []
  let r2 = [] 

  arr.forEach(([x,y])=> {
    r1.push(x)
    r2.push(y)
  })
  return [r1, r2]
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  str.slice(str.length - num) + str.slice(0, str.legnth - num)
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  const date = new Date()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const hours = date.getHours()
  return `Today's date is ${
    months[date.getMonth()]  } ${date.getDay()}, ${date.getFullYear()}. It is ${hours}:${date.getMinutes()} in the ${
      hours > 11 ? 'afternoon' : 'morning'
    }.`
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
