/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Fungsi buat hitung GCD
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Fungsi utama untuk insert GCD antara adjacent nodes
var insertGreatestCommonDivisors = function(head) {
    let current = head;
    
    while (current !== null && current.next !== null) {
        // Hitung GCD antara current node dan next node
        let gcdValue = gcd(current.val, current.next.val);
        
        // Buat node baru dengan nilai GCD
        let gcdNode = new ListNode(gcdValue);
        
        // Sisipkan node GCD di antara current dan next node
        gcdNode.next = current.next;
        current.next = gcdNode;
        
        // Pindah ke next node yang aslinya
        current = gcdNode.next;
    }
    
    return head;
};

// Testing
const test1 = new ListNode(18, new ListNode(6, new ListNode(10, new ListNode(3))));
const test2 = new ListNode(7);

console.log(insertGreatestCommonDivisors(test1)); // Expected [18,6,6,2,10,1,3]
console.log(insertGreatestCommonDivisors(test2)); // Expected [7]
