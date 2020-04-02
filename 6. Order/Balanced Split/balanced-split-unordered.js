// NOTE THAT IN THIS PROBLEM IT DOESNT MATTER IF THE LEFT SIDE NUMBERS ARE SMALLER
// THAN THE RIGHT SIDE NUMBERS
// THIS WAS MY INTERVIEW FACEBOOK QUESTION

function helper(arr,sumA,sumB,i,j){
  console.log(sumA,sumB)
  if(j  < i){}
  if (sumA > sumB) {
    j--
    sumB += arr[j]
  }
  else if(sumA < sumB){
    i++
    sumA += arr[i]
  } 
  if(i -j > 1){
    i++
    sumA += arr[i]
    return helper(arr,sumA,sumB,i,j)
  } else if(sumA == sumB){
    return true
  }
  return false
}

function balancedSplitExists(arr) {
  // Write your code here
  let i= 0
  let j = arr.length-1
  let sumA = arr[i]
  let sumB = arr[j]
  return helper(arr,sumA,sumB,i,j)
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
var expected_1 = false;
var output_1 = balancedSplitExists(arr_1); 
check(expected_1, output_1); 

var arr_2 = [5, 2, 3];
var expected_2 = true;
var output_2 = balancedSplitExists(arr_2); 
check(expected_2, output_2); 

var arr_3 = [5, 2, 3];
var expected_3 = true;
var output_3 = balancedSplitExists(arr_3); 
check(expected_3, output_3); 

// Add your own test cases here