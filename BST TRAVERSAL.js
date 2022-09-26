function inOrderTraverse(tree, array) {
    if(!tree) return null
    function preorder(node){
      if(!node) return null
      
      if(node.left) preorder(node.left)
      array.push(node.value)
      if(node.right) preorder(node.right)
    }
    preorder(tree)
    return array 
  }
  
  function preOrderTraverse(tree, array) {
    if(!tree) return null
    function preorder(node){
      if(!node) return null
      array.push(node.value)
      if(node.left) preorder(node.left)
      if(node.right) preorder(node.right)
    }
    preorder(tree)
    return array 
    
  }
  
  function postOrderTraverse(tree, array) {
    if(!tree) return null
    function preorder(node){
      if(!node) return null
      
      if(node.left) preorder(node.left)
      
      if(node.right) preorder(node.right)
      array.push(node.value)
    }
    preorder(tree)
    return array 
  }
  
  // Do not edit the lines below.
  exports.inOrderTraverse = inOrderTraverse;
  exports.preOrderTraverse = preOrderTraverse;
  exports.postOrderTraverse = postOrderTraverse;
  

  ///all three methods are O(n) time and space complexity where N is the number of nodes 