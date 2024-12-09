import LinkedList from "./LinkedList.js";

export default class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity).fill(null);
    }
    hash(key) {
        const hashCode = murmurHash3.x86.hash32(key);
        return hashCode;
    }
    set(key, value) {
        let index = Math.floor(this.hash(key) % this.capacity);
        let currentNode = this.buckets[index];

        if (currentNode === null) {
            let list = new LinkedList();
            console.log(list.head);
            list.append(key, value);
            this.buckets[index] = list;
            currentNode = list;
        } else {
            console.log(currentNode);
            currentNode.append(key, value);
        }
        console.log(this.buckets);
    }
    get(key) {
        // take the key, hash it, get the index
        // look through the linked list at that index for the key, return the value if found, null if not
        return;
    }
}
