const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
    console.log(this.array);
    return this.array;
  }

  peek() {
    let arrayPeek = this.array.slice(-1)[0];
    console.log(arrayPeek);
    return arrayPeek;
  }

  pop() {
    let arrayPop = this.array.pop();
    console.log(this.array);
    return arrayPop;
  }
}

const stack = new Stack();
stack.push(1);
stack.pop();
stack.peek();
module.exports = {
  Stack,
};
