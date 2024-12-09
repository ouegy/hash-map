import LinkedList from "./LinkedList.js";

export default class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity).fill(null);
        this.mapLength = 0;
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
        this.mapLength++;
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
    // remove(key) {
    //     let index = Math.floor(this.hash(key) % this.capacity);
    //     let linkedList = this.buckets[index];
    //     // If the index of the array is null return false
    //     if (linkedList == null) return false;
    //     // traverse the linked list to find a node by key
    //     else {
    //         linkedList.removeByKey(key, index);
    //         return true;
    //     }
    // }
    length() {
        // loop buckets array
        // const buckets = this.buckets;
        // let length = 0;
        // buckets.forEach((ele) => {
        //     let linkedList = ele[index];
        //     let temp = linkedList.size();
        //     length += temp;
        // });
        // return length;
        // if not null use linkedList.size()
        // += to length variable
        // return length outside of the loop
        return this.mapLength;
    }
    clear() {
        // reinstantiate the buckets array ??
        this.buckets = new Array(this.capacity).fill(null);
        this.mapLength = 0;
    }
    keys() {
        // loop buckets array
        // if not null use linkedList.traverse()
        // push head.key to keys array
        // return keys array
    }
    values() {
        // loop buckets array
        // if not null use linkedList.traverse()
        // push head.value to values array
        // return values array
    }
    entries() {
        // loop buckets array
        // if not null use linkedList.traverse()
        // push key value pair to entries array
        // return entries array
    }
}
