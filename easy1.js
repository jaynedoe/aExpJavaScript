
const numberArray = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

function twoNumberSum(array, targetSum) {
  
  //declare an empty array variable to store the two array indexes
  let result = [];

  //for each item in the number array, find out if the difference between the number and the target is also in the array
  //if a number representing the difference is in the array, then the numbered index of that number will be somewhere between 0 - array.length
  
  array.forEach(function(item, index){
    let difference = targetSum - item;
    let differenceIndex = array.indexOf(difference);

  //if the number representing the difference is not in the array, the indexOf will be -1
  //to prevent using the same number twice, include an additional AND condition that checks that the differenceIndex does not equal the current index iteration  
  //if the conditions are met and a 'difference' is found that isn't also the current index, push that into the results array.
  //I'm not sure why this is returning two indexes instead of one?

    if(differenceIndex > -1 && differenceIndex !== index){
      result.push(index);
     // result.push(differenceIndex);
    }
  });

  return result;
}

console.log(twoNumberSum(numberArray, target));

