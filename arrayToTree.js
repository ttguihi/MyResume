const makeAddressForest = function (data) {
    const map = new Map();
    const result = []
    for (const item of data) {
        map.set(item.id, { ...item, children: [] });
    }
    for (const item of data) {
        const node = map.get(item.id);

        if (item.pid === null) {
            result.push(node);
        } else {
            const parent = map.get(item.pid);
            if (parent) parent.children.push(node);
        }
    }
    return result;
}

// 测试数据：我们加一个全新的顶级节点“美国”和它的子节点“加州”
const data = [
    { id: 6, pid: 5, name: '成都市' },
    { id: 2, pid: 1, name: '广东省' },
    { id: 4, pid: 2, name: '深圳市' },
    { id: 1, pid: null, name: '中国' },
    { id: 5, pid: 1, name: '四川省' },
    { id: 8, pid: 4, name: '福田区' },
    { id: 7, pid: 4, name: '南山区' },
    { id: 3, pid: 2, name: '广州市' },
    { id: 99, pid: null, name: '美国' },     // 新增顶级节点
    { id: 100, pid: 99, name: '加利福尼亚州' } // 新增子节点
];

console.log(JSON.stringify(makeAddressForest(data), null, 2));