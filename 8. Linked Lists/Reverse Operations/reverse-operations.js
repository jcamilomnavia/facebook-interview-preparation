// Add any extra import statements you may need here
function rotate(arr){
  arr.reverse()
  for(let i = 0; i < arr.length;i++){
    if(i == 0){
      arr[arr.length-1].next = arr[0].next
    } 
    if(i  <  arr.length-1){
      arr[i].next = arr[i+1]
    }
  }
  return arr
}

function rebuildNode(temp,nodes){
  temp = rotate(temp)
  for(let mini of temp){
    if(nodes == null){
      nodes = mini
      tempHead = nodes
    } else {
      nodes.next = mini
      nodes = nodes.next
    }
  }
}

class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Add any helper functions you may need here
function reverse(head) {
  // let flag = false
  // let notNull = true
  let temp = []
  let nodes = null
  let tempHead = nodes

  while(head){
    if (head.data % 2 == 0) {
      temp.push(head)
      head = head.next
    } else if(temp.length > 0){
      temp = rotate(temp)
      for(let mini of temp){
        if(nodes == null){
          nodes = mini
          tempHead = nodes
        } else {
          nodes.next = mini
          nodes = nodes.next
        }
      }
      temp = []
    } else{
      if(nodes == null){
        nodes = head
        tempHead = nodes
      } else {
        nodes.next = head
        nodes = nodes.next
      }
      head = head.next
    }
    
  }

  if(temp.length > 0){
    rebuildNode(temp,nodes)
    temp = []
  } 

  return tempHead
}








// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
var test_case_number = 1;

function printLinkedList(head) {
  var out = '[';
  while (head != null) {
    out += head.data;
    head = head.next;
    if (head != null) {
      out += ' ';
    }
  }
  out += ']';
  return out;
}

function check(expectedHead, outputHead) {
  var result = true;
  var tempExpectedHead = expectedHead;
  var tempOutputHead = outputHead;
  while (expectedHead != null && outputHead != null) {
    result &= (expectedHead.data == outputHead.data);
    expectedHead = expectedHead.next;
    outputHead = outputHead.next;
  }
  if (!(expectedHead == null && outputHead == null)) result = false;

  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  } else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printLinkedList(tempExpectedHead);
    out += ' Your output: ';
    out += printLinkedList(tempOutputHead);
    console.log(out);
  }
  test_case_number++;
}

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new Node(v);
      tempHead = head;
    } else {
      head.next = new Node(v);
      head = head.next;
    }
  }
  return tempHead;
}

var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
var output_1 = reverse(head_1);
check(expected_1, output_1);

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
var output_2 = reverse(head_2);
check(expected_2, output_2);

// Add your own test cases here