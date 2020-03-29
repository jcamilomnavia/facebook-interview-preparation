// Add any extra import statements you may need here
function findMaxDiff(arr){
  let sum
  let maxDiff = 0
  for(let i=0;i<arr.length;i++){
    if(i+1 == arr.length){
      sum  = Math.abs(arr[i]-arr[0])
    } else {
      sum  = Math.abs(arr[i]-arr[i+1])
    }
    if(sum > maxDiff){
      maxDiff = sum
    }
      
  }
  return maxDiff
}

// Add any helper functions you may need here

function minOverallAwkwardness(arr) {
  // Write your code here
  arr.sort((a, b) => {
    return a-b
  })
  let reverseArr
  if(arr.length % 2 == 0){
    reverseArr = arr.splice(arr.length/2,arr.length-1)
  } else{
    reverseArr = arr.splice(arr.length/2+1,arr.length-1)
  }
  
  reverseArr.reverse()
 	arr.push(...reverseArr)
  
  let maxDiff = findMaxDiff(arr)

  return maxDiff
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

var arr_1 = [5, 10, 6, 8];
var expected_1 = 4;
var output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2, 5, 3, 7];
var expected_2 = 4;
var output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here