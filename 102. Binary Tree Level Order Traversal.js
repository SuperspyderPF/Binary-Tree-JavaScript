/**
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    const queue = [root]
    const result = []
    while(queue.length){
        let len = queue.length
        result.push(queue.map(node => node.val))
        while(len--){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result 
    
};

//time O(n) space O(n)


//107. Binary Tree Level Order Traversal II

var levelOrderBottom = function(root) {
    if(!root) return []
    const queue = [root]
    const result = []
    while(queue.length){
        let len = queue.length
        result.push(queue.map(node => node.val))
        while(len--){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return result.reverse((a,b)=> a-b)
    
};


var zigzagLevelOrder = function(root) {
    if(!root) return []
    const queue = [root]
    const result = []
    while(queue.length){
        let len = queue.length
        result.push(queue.map(node => node.val))
        while(len--){
            let node = queue.shift()
            if(node.right) queue.push(node.right)
            if(node.left) queue.push(node.left)
            
        }
    }
    return result 
    
};