const numberArray = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

let randomArray = [];

for (i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  randomArray.push(randomNumber);
}

let newTarget = Math.floor(Math.random() * 10);

//FIRST SOLUTION

function twoNumberSum(array, targetSum) {
  //declare an empty array variable to store the two array indexes
  let result = [];

  //for each item in the number array, find out if the difference between the number and the target is also in the array
  //if a number representing the difference is in the array, then the numbered index of that number will be somewhere between 0 - array.length

  for (let i = 0; i < array.length; i++) {
    let difference = targetSum - array[i];
    let differenceIndex = array.indexOf(difference);

    if (differenceIndex > -1 && differenceIndex !== i) {
      result.push(array[i]);
      result.push(array[differenceIndex]);
      break;
    }
  }

  return result;
}

// SECOND SOLUTION - HASH TABLE

function twoNumberSumming(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
		const firstNum = array[i];
		for (let j = i + 1; j < array.length; j++){
			const secondNum = array[j];
			if(firstNum+secondNum === targetSum){
				return [firstNum, secondNum];
			}
		}
	}
	return [];
}

console.log(twoNumberSumming(randomArray, newTarget));
console.log(`Random array was: ${randomArray} and the target was ${newTarget}`);
