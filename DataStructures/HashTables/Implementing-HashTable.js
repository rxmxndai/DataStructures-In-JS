class HashTable {
    constructor (size) {
        this.data = new Array(size)
    }

    _hash (key) {
        let hash = 0;
        for (let i=0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get (key) {
        let address = this._hash(key);
        const currentValue = this.data[address]
        if (currentValue) {
            for (let i=0; i<currentValue.length; i++) {
                if (currentValue[i][0] === key) {
                    return currentValue[i][1]
                }
            }
        }
        return undefined;
    }

    set (key, value) {
        let address = this._hash(key);
        
        if (!this.data[address]) {
            this.data[address] = []
        }

        this.data[address].push([key, value])
    }

    keys () {
        const keysArray = []

        for (let i=0; i< this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }

        return keysArray;
    }
}

const hashTable = new HashTable(20)

hashTable.set("banana", 10);
hashTable.set("apples", 100);
hashTable.set("grapes", 1000);


console.log(hashTable.data);

console.log("Grapes: ", hashTable.get("grapes"));

// Generally O(1) time for all
// O(n) when collision of memory exist



/* Keys() -> allows to iterate through all keys of our hashTables */
console.log(hashTable.keys());