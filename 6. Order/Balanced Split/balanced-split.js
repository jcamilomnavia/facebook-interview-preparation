      // Add any extra import statements you may need here
function checkEqual(A,B){
  for(let a of A){
    if ( B.indexOf(a) > -1){
      return false
    }
  }
  return true
}

function sum(arr){
  return arr.reduce((a,b)=> a+b)
}

// Add any helper functions you may need here

function balancedSplitExists(arr) {
  // Write your code here
  let j = 0
  let i = arr.length-1
  
  arr.sort((a,b) => a-b)
  
  let A = [arr[j]]
  let B = [arr[i]]
  let sumA = sum(A)
  let sumB = sum(B)
  
  while(j < i){
    if (sumA < sumB) {
      j++
      A.push(arr[j])
      sumA = sum(A)
    }
    else if( sumA > sumB){
      i--
      B.push(arr[i])
      sumA = sum(B)
    }
    if ( i - j > 1){ // For use all the elements in the array
      j++
      A.push(arr[j])
      sumA = sum(A)
    }
    else if(sumA == sumB){
      return checkEqual(A,B)
    }
  }
  return false
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1, 2, 5];
var expected_1 = true;
var output_1 = balancedSplitExists(arr_1); 
check(expected_1, output_1); 

var arr_2 = [3, 6, 3, 4, 4];
var expected_2 = false;
var output_2 = balancedSplitExists(arr_2); 
check(expected_2, output_2); 

// Add your own test cases here