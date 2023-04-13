const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKFromList( k) {
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      // move to the last node
      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  }

 /* insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;

      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  }*/

  /*get(position) {
    if (position < 0 || this.length <= position ) {
      return;
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }*/

  removeAt(position) {
    
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  remove(element) {
    this.removeAt( this.indexOf(element) );
   
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
        
      }

      current = current.next;
      index++;
      
    }

    return -1;
    
  }

  /*size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }*/

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
  
}

console.log('s01e11 - Linked List');
let list = new LinkedList ();
let payload = 3;


function addItems() {
  console.log('\n  Add Items');

  list.add( 3 );
  list.add( 1 );
  list.add( 2 );
  list.add( 3 );
  list.add( 4 );
  list.add( 5 );
  
// list.insert(3, payload);

// list.insert(0, 3);
 // list.insert(3, 6);

 list.print();
}

function getItems() {
  console.log('\n  Get Items');

//  console.log('get(3):', list.get(3));
  
  

  console.log('indexOf {3}:', list.indexOf(3));
 //console.log('indexOf payload:', list.indexOf(payload));
}

function removeItems() {
  console.log('\n  Remove Items');

  console.log('   Before:');
  list.print();

  list.remove(payload);

  console.log('   After:');
  list.print();
}




addItems();
getItems();
removeItems();
}

removeKFromList( "3");
module.exports = {
  removeKFromList,
};
