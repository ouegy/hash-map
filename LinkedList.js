import Node from "./Node.js";

export default class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    append(key, value) {
        if (this.head == null) {
            this.addFirst(key, value);
            console.log("poo");
        } else {
            let node = this.traverse(this.head);
            node.next = new Node(key, value);
            console.log("foo");
        }
    }
    addFirst(key, value) {
        this["head"] = new Node(key, value);
    }
    hasNext(node) {
        if ((node.next = null)) return false;
    }
    traverse(head) {
        let tail;
        while (head.next != null) {
            head = head.next;
        }
        tail = head;
        return tail;
    }
    prepend(key, value) {
        const node = new Node(key, value);
        const next = this.head;
        node.next = next;
        this.head = node;
    }
    size() {
        let count = 0;
        let head = this.getHead();
        while (head.next != null) {
            head = head.next;
            count++;
        }
        console.log(count);
        return count;
    }
    tail() {
        let tail = this.traverse(this.head);
        console.log(tail);
        return tail;
    }
    getHead() {
        let head = this.head;
        console.log(head);
        return head;
    }
    at(index) {
        if (index == 0) return;
        if (index == 1) return this.getHead();
        let head = this.getHead();
        for (let i = 0; i < index; i++) {
            head = head.next;
        }
        console.log(head);
        return head;
    }
    pop() {
        let size = this.size();
        let secondLast = this.at(size - 1);
        secondLast.next = null;
    }
    contains(val) {
        let head = this.head;
        while (head.next != null) {
            let value = head.value;
            if (value == val) {
                console.log("value: " + value);
                return true;
            }
            head = head.next;
        }
        return false;
    }
    find(val) {
        let head = this.head;
        console.log(head);
        let index = 0;
        while (head.next != null) {
            let value = head.value;
            console.log(value);
            if (value == val) {
                console.log("value: " + value);
                return index;
            }
            index++;
            head = head.next;
        }
    }
    findNode(hashKey) {
        let head = this.head;
        if (head == null) {
            return false;
        }
        while (head.next != null) {
            let key = head.key;
            if (key == hashKey) {
                console.log("value: " + head.value);
                return head.value;
            } else {
                head = head.next;
                return head.value;
            }
        }
    }
    toString() {
        let head = this.head;
        let result = `( ${head.value} )`;
        for (let i = 1; i < this.size(); i++) {
            result += ` => ( ${head.next.value} )`;
            head = head.next;
        }
        return result;
    }
    removeByKey(key, arrayIndex) {
        // if it is the last item in the linked list pop()
        let size = this.size();
        let head = this.head;

        if (size - 1 == arrayIndex) {
            this.pop();
            return true;
        }
        // if it is the first item set head to second item
        else if (arrayIndex == 0) {
            head = this.head.next;
        } else {
            let beforeNode = this.at(index - 1);
            let afterNode = this.at(index + 1);
            beforeNode.next = afterNode;
        }
        //  if it is in the nth item, point n-1 item to n+1 item
    }
}

let list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// console.log(list.toString());

// console.log(list.find("snake"));

// console.log(list.contains("foo"));

// list.prepend("chicken");

// list.tail();
// list.pop();
// list.size();
// list.pop();
// list.size();

// console.log(list);
