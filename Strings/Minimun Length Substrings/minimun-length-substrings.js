// Add any extra import statements you may need here
function compareChars(s,t,minIndex,maxIndex,index){
  if (index == t.length){
    return (maxIndex - minIndex)
  }
  if (s.indexOf(t[index]) != -1){
    if (countInArray(s,t[index]) != countInArray(t,t[index])){
      return -1
    }
    let newIndex = s.indexOf(t[index]) + 1
    if(minIndex > newIndex - 1 ){
      minIndex = newIndex - 1
    } 
    if (maxIndex < newIndex ){
      maxIndex = newIndex
    }
    return compareChars(s,t,minIndex,maxIndex,index+1)
  } else {
    return -1
  }
}

function countInArray(array, value) {
  // used reduce and not filter nor map because these last two are a waste of memory
  // since they create a new array
  return array.reduce((n, x) => n + (x === value), 0);
}

// Add any helper functions you may need here

function minLengthSubstring(s, t) {
  // Write your code here
  // Try reading t as an array an iterate over it
  // search for each char from t in s, and get the min and the max index found for each char
  // the diff index would be the answer
  // the substring in s can start in any position, thats why it should be the diff
  // also i should check if the strings has repeated elements
  // and compare the ocurrences of both strings
  let minIndex = s.length
  let maxIndex = 0
  let index = 0 // until t is over
  
  let arrayT = t.split("")
  let arrayS = s.split("")

  return compareChars(arrayS,arrayT,minIndex,maxIndex,index)

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

var s_1 = "dcbefebce";
var t_1 = "fd";
var expected_1 = 5;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here