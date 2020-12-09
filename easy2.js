// subsequent arrays

//given one array of integers, is a second array a subsequent of the first?

//steps to check - is the value at the first index of the second array, in the first array?

//if yes, store the location of the value from the first array.

//move to the second value of the second array - is it in the first array, starting from the index stored from the previous iteration?

//third step, is the second value of the second array BEFORE the index stored from the previous iteration? if yes, return false

// HAND WRITE THIS OUT FIRST

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sequence = [3, 4, 6, 7];

function isValidSubsequence(array, sequence) {
  let found = false;
  let less = true;
  let positions = [];

  //first, check if any numbers in second array are not in first array - second array should be a subset of first

  //--------------NEXT ITEM TO FIX----------------
  //this is not working all the time, not picking up that a number in the sequence is not in the array

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (sequence[i] == array[j]) {
        found = true;
      }
    }
    if (found == false) {
      return false;
    }
  }



  //then check second array, to see if array length is one

  if (sequence.length == 1) {
    return true;
  }

  if(sequence.length > array.length){
    return false;
  }


  //obtain index positions of numbers in sequence within array
  for(let i = 0; i < sequence.length; i++){

    for(let j = 0; j < array.length; j++){

        if(sequence[i] == array[j]){
            let item = array.indexOf(array[j]);
            positions.push(item);
        }
    }
    console.log(positions);
  }


  //then check positions array, to see if any numbers are less than the one before

  for (let i = 1; i < positions.length; i++) {
    if (positions[i - 1] > positions[i]) {
      less = false;
    }
  }

  if (less == false) {
    return false;
  } else {
    return true;
  }
}

let result = isValidSubsequence(array, sequence);

console.log(result);
