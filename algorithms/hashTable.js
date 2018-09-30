
/**
 * @description Non-auto-resizing key-value store
 */
class HashTable {
  constructor(size = 4) {
    this.data = [];
    this.size = size;
    // for (let i = 0; i < size; i += 1) {
    //   this.data[i] = [];
    // }
  }

  hashFunction(key) {
    if (typeof key !== 'string') throw new Error ('Key must be of type string');
    return key.length % this.size;
  }

  add(key, value) {
    const hash = this.hashFunction(key);
    if (this.data[hash] === undefined) this.data[hash] = [];
    this.data[hash].push([key, value]);
  }

  get(key) {
    const hash = this.hashFunction(key);
    if (this.data[hash] === undefined) return undefined;
    const foundPair = this.data[hash].find(pair => pair[0] === key);
    return foundPair ? foundPair[1] : undefined;
  }
}

const table = new HashTable();
table.add('thisKey', 'thisValue');
console.log(table.get('noKey'), 'should be undefined');
console.log(table.get('thisKey'), 'should be thisValue');
console.log(table.get('alsoKey'), 'should be undefined');
table.add('alsoKey', 'newValue');
console.log(table.get('alsoKey'), 'should be newValue');
