// Add any extra import statements you may need here

// Add any helper functions you may need here

function minOperations(arr) {
  // Write your code here
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

var n_1 = 5;
var arr_1 = [1, 2, 5, 4, 3];
var expected_1 = 1;
var output_1 = minOperations(arr_1);
check(expected_1, output_1);

var n_2 = 3;
var arr_2 = [3, 1, 2];
var expected_2 = 2;
var output_2 = minOperations(arr_2);
check(expected_2, output_2);

// Add your own test cases here