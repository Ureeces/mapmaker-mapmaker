/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(nums) {
  const doubled = [];
  for(let i = 0; i < nums.length; i++) {
    doubled.push(nums[i] * 2);
  }

  return doubled;
}

const yelledGreetings = function(greetings) {
  const yells = [];
  for(let i = 0; i < greetings.length; i++) {
    yells.push(greetings[i] + "!");
  }

  return yells;
}

const absoluteValues = function(nums) {
  const absolutes = [];
  for(let i = 0; i < nums.length; i++) {
    absolutes.push(Math.abs(nums[i]));
  }

  return absolutes;
}

const upperCaseFirstLetters = function(words) {
  const upperCased = [];
  for(let i = 0; i < words.length; i++) {
    let currWord = words[i];
    
    let formattedWord = currWord[0].toUpperCase() 
    + currWord.slice(1).toLowerCase();
    
    upperCased.push(formattedWord);
  }

  return upperCased;
}

const changeToInitials = function(names) {
  const initials = [];
  for(let i = 0; i < names.length; i++) {
    let currName = names[i];
    
    let firstInitial = currName[0].toUpperCase();
    
    let lastIndex = currName.indexOf(" ");
    let lastInitial = currName[lastIndex + 1].toUpperCase();

    initials.push(firstInitial + lastInitial);
  }

  return initials;
}

const doubleOdd = function(nums) {
  const doubledOdds = [];

  for(let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let isOdd = Math.abs(Math.floor(currNum)) % 2 !== 0 ? true : false;
    
    if(isOdd) {
      doubledOdds.push(currNum * 2);
    }

    else {
      doubledOdds.push(currNum);
    }
  }

  return doubledOdds;
}

const add1ToLeft = function(nums) {
  const numsWith1 = [];

  for(let i = 0; i < nums.length; i++) {
    let currNum = "" + nums[i];
    if(currNum[0] === "-") {
      currNum = "-1" + currNum.slice(1);
    }

    else {
      currNum = "1" + currNum;
    }

    numsWith1.push(Number(currNum));
  }

  return numsWith1;
}






/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
