// Add any extra import statements you may need here

// Add any helper functions you may need here

function getBillionUsersDay(growthRates) {
  // Write your code here
  let sum = 0
  let billion = 1000000000
  let days = 1
  while(sum < billion){
    for(let rates of growthRates){
      sum =+ Math.pow(rates,days)
      
    }
    if(sum < billion){
        days++
     }
  }
  return days
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

var test_1 = [1.1, 1.2, 1.3];
var expected_1 = 79;
var output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

var test_2 = [1.01, 1.02];
var expected_2 = 1047;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here