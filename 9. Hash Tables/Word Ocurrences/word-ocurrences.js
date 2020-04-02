// Add any extra import statements you may need here
function mapWords(arr,map){
  for(let i=0; i< arr.length;i++){
    if(!map[arr[i]]) map[arr[i]]=1
    else map[arr[i]] += +1
  }
  return map
}
// Add any helper functions you may need here

function ocurrences(arr, n) {
  // Write your code here
  let map = {}
  mapWords(arr,map)

  
  let ocurrencesArray = []
  let values = Object.values(map)
  let keys = Object.keys(map)

  while(ocurrencesArray.length < n){
    let max = Math.max(...values)
    let index = values.indexOf(max)
    ocurrencesArray.push(keys[index])
    values.splice(index,1)
    keys.splice(index,1)
  }
  return ocurrencesArray
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

var k_1 = 2;
var arr_1 = ["hello","hello","the","do","do","do","word","other"];
var expected_1 = ["do","hello"];
var output_1 = ocurrences(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 3;
var arr_2 = ["hello","the","hello","hello","do","do","do","word","other","the","may"];;
var expected_2 = ["hello","do","the"];
var output_2 = ocurrences(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here