// Add any extra import statements you may need here
function searchNode(node,depth,dictionary){
  if(node.val === depth) return node
  for(let element of node.children){
      let res = searchNode(element,depth,dictionary)
      if(res) return res
  }
}

function equalChar(node,dictionary,string,parent){
  if(!node) return null
  if(!dictionary[node.val]){
    dictionary[node.val] = string[node.val-1]
   	for(let element of node.children){
       if(!dictionary[element.val]){
        equalChar(element,dictionary,string)
      }
    }
   }
   else {
     return null
   }
}

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}
// Add any helper functions you may need here

// Definition for a Node.
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
};

function countOfNodes(root, queries, string) {
  // Write your code here
  let ans = []
  for(let querie of queries){
    let dictionary = {}
    let nodeReq = searchNode(root,querie[0],dictionary)

    dictionary = {}
    equalChar(nodeReq,dictionary,string,nodeReq.val)
    
    let compares = Object.values(dictionary)
    ans.push(compares.reduce((n, x) => n + (x === querie[1]), 0))
  }
  return ans
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

// test case 1
var n_1 = 3, q_1 = 1;
var s_1 = "aba";
var node_1 = new Array(n_1 + 1);
for (var i = 1; i <= n_1; i++) {
  node_1[i] = new Node(i);
}
var root1 = node_1[1];
node_1[1].children = [node_1[2], node_1[3]];
// node_1[2].children = [node_1[1]];
// node_1[3].children = [node_1[1]];
var queries_1 = [[1, 'a']];
var output_1 = countOfNodes(root1, queries_1, s_1); 
var expected_1 = [2];
check(expected_1, output_1);

// test case 2
var n_2 = 7, q_2 = 3;
var s_2 = "abaacab";
var node_2 = new Array(n_2 + 1);
for (var i = 1; i <= n_2; i++) {
  node_2[i] = new Node(i);
}
var root2 = node_2[1];
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [ node_2[4], node_2[5]];
node_2[3].children = [ node_2[6]];
// node_2[4].children = [node_2[2]];
// node_2[5].children = [node_2[2]];
// node_2[6].children = [node_2[3]];
// node_2[7].children = [node_2[1]];

// BEFORE GETTING RID OF THE BUG
/*
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [node_2[1], node_2[4], node_2[5]];
node_2[3].children = [node_2[1], node_2[6]];
node_2[4].children = [node_2[2]];
node_2[5].children = [node_2[2]];
node_2[6].children = [node_2[3]];
node_2[7].children = [node_2[1]];
*/
var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']]; 
var output_2 = countOfNodes(root2, queries_2, s_2); 
var expected_2 = [4, 1, 2];
check(expected_2, output_2); 

// Add your own test cases here