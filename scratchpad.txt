
const numberArray = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

function twoNumberSum(array, targetSum) {
  let sum = 0;
  let index1 = 0;
  let index2 = 0;
  let aLength = array.length;

  while (targetSum != sum) {
  
    while (index1 < aLength) {
      
      if(index2 === aLength){
        index2 = 0;
      }

      while (index2 < aLength) {
        index2++;
        sum = array[index1] + array[index2];
        console.log(sum);
      }
      console.log(sum);
      index1++;
    }

    if(index1 === aLength && index2 === aLength){
        return [];
    }

  }
  return [index1, index2];
}

let final = twoNumberSum(numberArray, target);
console.log(final);