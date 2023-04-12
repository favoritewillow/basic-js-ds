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

class ListNode {
  constructor(l) {
    this.value = l;
    this.next = null;
  }
}

function removeKFromList() {
  function filter(array, checkFn) {
    let returnNewArray = [];

    for (let i = 0; i < array.length; i++) {
      if (checkFn(array[i])) {
        returnNewArray.push(array[i]);
      }
    }
    return returnNewArray;
  }

  let l = [3, 1, 2, 3, 4, 5];
  let k = filter(l, (item) => item !== 3);
  console.log(k);
}

const list = new ListNode();
removeKFromList();
module.exports = {
  removeKFromList,
};
