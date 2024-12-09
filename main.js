import HashMap from "./HashMap.js";

const hash = new HashMap();

hash.set("apple", "red");
hash.set("banana", "yellow");
hash.set("carrot", "orange");
hash.set("dog", "brown");
hash.set("elephant", "gray");
hash.set("frog", "green");
hash.set("grape", "purple");
hash.set("hat", "black");
hash.set("ice cream", "white");
hash.set("jacket", "blue");
hash.set("kite", "pink");
hash.set("lion", "golden");

console.log(hash);

console.log(hash.get("frog"));
console.log(hash.get("hat"));
console.log(hash.has("frog"));
console.log(hash.has("hat"));
console.log(hash.has("poo"));
