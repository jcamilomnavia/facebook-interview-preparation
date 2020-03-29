// Add any extra import statements you may need here
function countElements(arr,result,index){
  if(index == arr.length){
    return null
  }
  if (!result[arr[index]]){
    result[arr[index]] = 1
  } 
  else {
    result[arr[index]] = result[arr[index]]+ 1
  }
  countElements(arr,result, index+1)
}

function isEquivalent(arr,a, b,index) {
  if (index > arr.length) return true
   	
  if(b[arr[index]] != a[arr[index]]){
  	return false
  }
  else{
    return isEquivalent(arr,a, b,index+1)
  } 
}

// Add any helper functions you may need here

function areTheyEqual(array_a, array_b){

  let resultArrayOne = {}
  let resultArrayTwo = {}
  let index = 0
  countElements(array_a,resultArrayOne,index)
  index = 0
  countElements(array_b,resultArrayTwo,index)
  
  index=0
  if(isEquivalent(array_a,resultArrayOne,resultArrayTwo, index)) return "Yes"
  else return "No"
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

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];
var expected_1 = "Yes";
var output_1 = areTheyEqual(array_a_1, array_b_1); 
check(expected_1, output_1); 

var array_a_2 = [1, 2, 3, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = "No";
var output_2 = areTheyEqual(array_a_2, array_b_2); 
check(expected_2, output_2); 

// Add your own test cases here