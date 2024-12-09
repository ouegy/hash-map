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
            list.append(key, value);
            this.buckets[index] = list;
            currentNode = list;
        } else {
            currentNode.append(key, value);
        }
    }
    get(key) {
        // take the key, hash it, get the index
        let index = Math.floor(this.hash(key) % this.capacity);
        //console.log(index);
        let linkedList = this.buckets[index];
        //console.log(linkedList);
        if (linkedList.head == null) return null;
        else {
            return linkedList.findNode(key);
        }
    }
    has(key) {
        let index = Math.floor(this.hash(key) % this.capacity);
        //console.log(index);
        let linkedList = this.buckets[index];
        //console.log(linkedList);
        if (linkedList == null) return false;
        else if (linkedList.findNode(key)) {
            return true;
        }
    }
}
