export type UpdateFn = () => any
export type addUpdateQueueList = UpdateFn[]
let queue:addUpdateQueueList = []
let timeout
let isUpdating = false

export function addUpdateQueue(list: addUpdateQueueList = [], key?) {
    // return list.forEach(fn => fn())

    if (isUpdating) {
        // 如果已进入更新之中，则所有因为更新加入队列之中的任务都会立即执行
        list.forEach(fn => fn())
        return
    }
    clearTimeout(timeout)
    queue.push(...list)
    // setTimeout执行时间明显比0ms要长很多，但是Performance并没有记录函数执行
    // 经排查发现是mac上chrome的页面滚动阻塞了异步事件的执行
    timeout = setTimeout(forceUpdate, 0)
}

export default function forceUpdate(afterFn = () => {}) {
    // console.log('setTimeout等待时长', Date.now() - realtime)
    isUpdating = true
    const haveExec: addUpdateQueueList = []

    queue.forEach(fn => {
        // 查看是否执行
        if (!haveExec.includes(fn)) {
            haveExec.push(fn)
            fn()
        }
    })
    isUpdating = false
    queue = []
    // console.log('执行时长', Date.now() - time)
    afterFn()
}
