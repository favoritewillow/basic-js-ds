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
    this.array = [1, 2, 3, 4];
  }

  push(item) {
    let array = this.array;
    array.push(item);
    console.log(array);
  }

  pop() {
    let array = this.array;
    let arrayPop = array.pop();
    for (let i = 0; i <= array.length; i++) {
      if (array.length == 1) {
        return 1;
      } else if (array.length < 0) {
        return 0;
      }
    }
    console.log(array);
  }

  peek() {
    let array = this.array;
    let arrayPeek = array.slice(-1)[0];
    console.log(arrayPeek);
  }
}

const stack = new Stack();
stack.push(7);
stack.pop();
stack.peek();

module.exports = {
  Stack,
};
