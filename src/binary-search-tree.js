const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constuctor() {
    this.root = null;
  }

  root() {
    return this.root;
    /*if (this.root) {
      return this.root;
    } else {
      return null;
    }*/
  }

  //добавление элемента (рекурсивные ф-ии, возвращают сами себя)
  add(data) {
    this.root = addWithin(this.root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }
  //has возвращает true, если узел с данными существует в дереве, и false в противном случае (рекурсивные ф-ии, возвращают сами себя)
  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
      /*if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }*/
    }
  }

  find(data) {
    return findWithin(this.root, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node.data;
      }

      if (data < node.data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        //проверяем на лист (нет правого и левого потомка)
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        // проверяем если есть оба поддерева(ищем минимальный потмок в правом поддереве)
        let minFormRight = node.right;
        while (minFormRight.left) {
          minFormRight = minFormRight.left;
        }

        node.data = minFormRight.data;

        node.right = removeNode(node.right, minFormRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root; // переменная которая ищет в дереве
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

function addItems() {
  console.log(`add: 13, 15, 9, 20, 18, 32, 25`);

  tree.add(13);
  tree.add(15);
  tree.add(9);
  tree.add(20);
  tree.add(18);
  tree.add(32);
  tree.add(25);
  console.log(tree);
}

function getItems() {
  console.log(tree.has(5));
  console.log(tree.has(32));
  console.log(tree.find(13));

  console.log(tree.min());
  console.log(tree.max());
}

function removeItem() {
  tree.remove(15);
  console.log(tree);
}

const tree = new BinarySearchTree();

addItems();
getItems();
removeItem();

module.exports = {
  BinarySearchTree,
};
