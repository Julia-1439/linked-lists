# linked-lists

An implementation of a singly linked list. 


<strong>Reflection</strong>

Linked Lists are a data structure offering faster runtime than Arrays for insertion and deletion, but slower runtime in accessing.

Specifically, linked lists have constant time insertion and deletion, while arrays have linear time insertion and deletion (due to needing to relabel indices). However, since linked lists are not indexed, access takes linear time, while arrays access in constant time. 

The advantages of linked lists can make them preferable over arrays for certain tasks, notably, implementing a Queue. Whereas tasks requiring frequent fetching, arrays are preferable.

In terms of memory, linked lists do not occupy contiguous memory since each element is connected via pointers/addresses. While not relevant in JS since contiguous memory is dynamically allocated, this is relevant in other languages in which this feature is not present, like C. 