import { LinkedList } from "./linkedList.js";

const L = new LinkedList();
console.log("L:", L.toString());
console.log("Head of empty:", L.head());
console.log("Tail of empty:", L.tail());
console.log("Size of empty:", L.size());
console.log("At index 0 of empty:", L.at(0));

L.append(5);
console.log("L append 5:", L.toString());

L.append(6);
L.append(7);
console.log("L append 6, 7:", L.toString());
console.log("L head: ", L.head());

L.prepend("100");
L.prepend("47");
console.log("L prepend 100, 47:", L.toString());

console.log("L size:", L.size());

console.log("L tail:", L.tail());

console.log("Element at idx 0", L.at(0));
console.log("Element at idx 3", L.at(3));
console.log("Element at idx 5 (tail)", L.at(5));
console.log("Element at idx 50", L.at(50));

const popped1 = L.pop();
console.log("Popped value:", popped1);
console.log("Popped 7:", L.toString());

const popped2 = L.pop();
console.log("Popped value:", popped2);
console.log("Popped 6:", L.toString());

console.log("contains 5:", L.contains(5));
console.log("contains 12:", L.contains(12));
console.log("contains null:", L.contains(null));

L.prepend(null);
console.log("Prepend null:", L.toString());
console.log("contains null:", L.contains(null));
console.log("size counts Node with null:", L.size());

L.append(5);
console.log("Insert duplicate element:", L.toString());

console.log("Find 5:", L.find(5));
console.log("Find 99 (DNE):", L.find(99));
console.log("Find null:", L.find(null));

L.insertAt("foo", 3);
console.log("Insert 'foo' at index 3:", L.toString());
L.insertAt("bar", 0);
console.log("Insert 'bar' at index 0:", L.toString());
L.insertAt("end", 7);
console.log("Insert 'end' at last index 7:", L.toString());
L.insertAt("-1", 1);
console.log("Insert -1 at last index 1:", L.toString());

L.removeAt(0);
console.log("Remove at index 0:", L.toString());

L.removeAt(1);
console.log("Remove at index 1:", L.toString());

L.removeAt(6);
console.log("Remove at last index 6:", L.toString());

L.removeAt(4);
console.log("Remove at index 4:", L.toString());

L.pop();
L.pop();
L.pop();
L.pop();
L.pop();
console.log("Popped everything:", L.toString());

L.pop();
console.log("Popped from empty");

console.log(
  "Testing operations with empty:",
  L.size(),
  L.head(),
  L.tail(),
  L.at(0),
  L.pop(),
  L.contains(5),
  L.find(4),
  L.insertAt("foo", 0), L.toString(),
  L.removeAt(0),
  L.toString(),
);

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());