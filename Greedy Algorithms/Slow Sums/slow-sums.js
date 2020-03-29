// Add any extra import statements you may need here
function sumGreatest(arr,acumulator){
  if(arr.length == 1){
    return acumulator
  }
  
  let left
  let right
  
  let i = arr.indexOf(Math.max(...arr))
  let removedIndex = i
  
  let max = arr[i]
  
  if(removedIndex > 0 && removedIndex < arr.length-1 ){
    left = arr[i-1]
    right = arr[i+1]
    
    if(left >= right){
      i--
      num2 = left
    } else{
      i++
      num2 = right
    }
  }
  if(removedIndex == 0 ){
    num2 = arr[i+1]
    i++
  }
  if(removedIndex == arr.length-1){
    num2 = arr[i-1]
    i--
  }

  let sum = max + num2
 
  acumulator.push(sum)
  
  arr[i] = sum
  arr.splice(removedIndex,1)

  sumGreatest(arr,acumulator)
}

// Add any helper functions you may need here

function getTotalTime(arr) {
  // Write your code here
  // 17 + 21 + 24 + 26
 	// find the greatest
  // sum the contiguous greatest
  // sum the result
  // do it repeatedly
  let acumulator = []
  sumGreatest(arr,acumulator)
  acumulator = acumulator.reduce((a,b) => a+b)
  return acumulator
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = '[' + n + ']';
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
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [4, 2, 1, 3];
var expected_1 = 23;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

// Add your own test cases here