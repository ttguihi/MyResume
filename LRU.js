class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRU_Cache {
    constructor(capacity) {
        this.capacity = capacity
        this.dummyNode = new Node()
        this.keyToNode = new Map()
        this.dummyNode.next = this.dummyNode
        this.dummyNode.prev = this.dummyNode
    }

    #getNode(key) {
        if (!this.keyToNode.has(key)) return null
        const node = this.keyToNode.get(key)
        this.#removeNode(node)
        this.#pushFront(node)
        return node
    }

    #removeNode(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }


    #pushFront(node) {
        node.prev = this.dummyNode
        node.next = this.dummyNode.next
        node.prev.next = node
        node.next.prev = node
    }

    get(key) {
        const node = this.#getNode(key)
        return node ? node.value : -1
    }

    put(key, value) {
        let node = this.#getNode(key)
        if (node) {
            node.value = value
            return
        }
        node = new Node(key, value)
        this.keyToNode.set(key, node);
        this.#pushFront(node)
        if (this.keyToNode.size > this.capacity) {
            const backNode = this.dummyNode.prev
            this.keyToNode.delete(backNode.key)
            this.#removeNode(backNode)

        }
    }
}

// 创建容量为2的LRU缓存
const cache = new LRU_Cache(2);

// 存入数据
cache.put(1, "苹果");
cache.put(2, "香蕉");

// 获取数据
console.log(cache.get(1));    // 输出: "苹果"
console.log(cache.get(2));    // 输出: "香蕉"
console.log(cache.get(3));    // 输出: -1 (key不存在)

// 当容量超过时，淘汰最久未使用的
cache.put(3, "橙子");  // 加入第三个元素，淘汰key=1
console.log(cache.get(1));    // 输出: -1 (已被淘汰)
console.log(cache.get(2));    // 输出: "香蕉" (还在缓存中)
console.log(cache.get(3));    // 输出: "橙子"

// 再次获取key=2，使其变为最近使用
console.log(cache.get(2));    // 输出: "香蕉" (变为最近使用的)

cache.put(4, "葡萄");  // 加入第四个元素，淘汰key=3
console.log(cache.get(3));    // 输出: -1 (已被淘汰)
console.log(cache.get(2));    // 输出: "香蕉" (还在缓存中)
console.log(cache.get(4));    // 输出: "葡萄"