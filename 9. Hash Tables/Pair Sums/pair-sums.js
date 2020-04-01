// Add any extra import statements you may need here
function combinationsNumber (n, k) {
  const nMinusk = n - k

  let prodrange
  if (k < nMinusk) {
    prodrange = product(nMinusk + 1, n)
    return prodrange / product(1, k)
  }
  prodrange = product(k + 1, n)
  return prodrange / product(1, nMinusk)
}

function product (i, n) {
  if (n < i) {
    return 1
  }
  if (n === i) {
    return n
  }
  const half = (n + i) >> 1 // divide (n + i) by 2 and truncate to integer
  return product(i, half) * product(half + 1, n)
}

// Add any helper functions you may need here

function numberOfWays(arr, k) {
  // Write your code here
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])){
      map.set(arr[i], 0)
    }
    map.set(arr[i], map.get(arr[i]) + 1)
  }

  let count = 0

  for (let x of map.keys())
  {
    let key = map.get(k - x)
    if (map.get(k - x) != null && (k - x) >= x){
      if (map.get(k - x) == 2 ) count += map.get(k - x)-1
      else if (map.get(k - x) >= 3 ) count += combinationsNumber(map.get(k - x),2)
      else count += map.get(k - x)
    }
  }

  return count;
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

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here