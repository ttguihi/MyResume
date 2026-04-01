const treeToArray = (tree, pid = null) => {
    const res = []
    const dfs = (treeNodes, parentId) => {
        for (const treeNode of treeNodes) {
            const { children, ...rest } = treeNode

            res.push({ ...rest, parentId: parentId })

            if (children?.length) {
                dfs(children, treeNode.id)
            }
        }

    }
    dfs(tree, pid)
    return res
}

const tree = [
    {
        id: 1, name: '部门A', children: [
            {
                id: 2, name: '部门B', children: [
                    { id: 4, name: '部门D' },
                    { id: 5, name: '部门E' }
                ]
            },
            {
                id: 3, name: '部门C', children: [
                    { id: 6, name: '部门F' }
                ]
            }
        ]
    },
    {
        id: 7, name: "我的部门"
    }
]
console.log(treeToArray(tree));
