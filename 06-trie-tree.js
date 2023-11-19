class TrieNode {
  constructor(val = null) {
    this.val = val;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }
      current = current.children[char];
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }

    // we should return true not the current.isWord because we check the prefix like: 'ca' in the 'cat' if we return the current.isWord then is the 'a' the current.isWord = false then the result is not expected so we should return the true only
    return true;
  }
}

let trie = new Trie();
trie.insert("cat");

console.log(trie.search("cat"));

console.log(trie.startsWith("ca"));
console.log(trie);
