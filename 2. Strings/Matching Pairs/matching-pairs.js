function equalString(s){
  for(let i=0; i < s.length ;i++){
    let re = new RegExp(s[i])
    if(s.match(re).length >= 2){
      return s.length
    }
  }
return s.length-2
}

function compareAllChars(s,t){
let cont = 0
let flag = false
let charPosition
for(let j=0; j < t.length ;j++){
  if(t[j] == s[j]){
    cont++
  }
  else{
    if (flag){
      if(charPosition == j){
        cont++
      }
    } 
    else{
      charPosition = s.indexOf(t[j])
      if (t[charPosition] === s[j]){
        flag =true
        cont++
      }
    }
  }
}
return cont
}

function matchingPairs(s, t) {
let numMatch
if(s === t){
  numMatch = equalString(s)
} else {
  numMatch = compareAllChars(s,t)
}
return numMatch
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

var s_1 = "abcde";
var t_1 = "adcbe";
var expected_1 = 5;
var output_1 = matchingPairs(s_1, t_1);
check(expected_1, output_1);

var s_2 = "abcd";
var t_2 = "abcd";
var expected_2 = 2;
var output_2 = matchingPairs(s_2, t_2);
check(expected_2, output_2); 

// Add your own test cases here