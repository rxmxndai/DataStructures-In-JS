class Node {
     constructor (value) {
          this.left = null;
          this.right = null;
          this.value = value
     }
}

class BinarySearchTree {
     constructor () {
          this.root = null
     }

     insert (value) {
          const newNode = new Node(value)

          // check if there is a main node (root)
          if (this.root === null) {
               this.root = newNode;
          }
          else {
               // if not! Create a new Node and check suitable place to insert
               let currentNode = this.root;
               while (true) {
                    // Check suitable side [left or right to traverse]
                    if (value < currentNode.value) {
                         // go left
                         if (!currentNode.left) {
                              currentNode.left = newNode;
                              return this;
                         }
                         currentNode = currentNode.left
                    }
                    else {
                         // go right
                         if (!currentNode.right) {
                              currentNode.right = newNode;
                              return this;
                         }
                         currentNode = currentNode.right
                    }
               }
          }
     }

     lookup (value) {

     }

     remove () {

     }
}


// Expecxted

//       9
//   4      20
// 1   6  15   170

const tree = new BinarySearchTree();

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


const tra = JSON.stringify(traverse(tree.root))
console.log(tra);



function traverse (node) {
     const tree = { value: node.value }
     tree.left = node.left === null ? null : traverse(node.left)
     tree.right = node.right == null ? null : traverse(node.right)
     return tree
}
