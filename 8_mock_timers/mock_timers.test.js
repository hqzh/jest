import { timer, wrapTimer } from './mock_timers'
// 模拟定时器
jest.useFakeTimers()

// test('timer test', (done) => {

//     timer(() => {
//     // 这样也可以通过，因为测试不等它运行完就走完了,所以下面要加个done
//     expect(2).toBe(1)
//     // 但是假如定时器写了30分钟，那我们就要等30分钟，不合理
//     expect(1).toBe(1)
//     done()
//     })
// })

test('timer test', () => {
    // 模拟函数
    const fn = jest.fn()
    timer(fn)
    // 立即执行所有定时器，和上面的jest.useFakeTimers()成对配合使用，不立即执行的话下面是无法保证执行一次的
    jest.runAllTimers()
    // 模拟函数至少被调用一次
    expect(fn).toHaveBeenCalledTimes(1)
})

test('wrapTimer test', () => {
    // 模拟函数
    const fn = jest.fn()
    wrapTimer(fn)
    // 立即执行所有定时器，和上面的jest.useFakeTimers()成对配合使用，不立即执行的话下面是无法保证执行一次的
    jest.runAllTimers()
    // 模拟函数至少被调用1次，如果只写一次的话报错，因为实际上fn被调用了两次。
    // expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledTimes(2)
})

test('wrapTimer 只运行当前正在创建的timer', () => {
    // 模拟函数
    const fn = jest.fn()
    wrapTimer(fn)
    // 只运行当前队列中正在创建的timer
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(1)
})

// 更好用更高级的用法
test('wrapTimer 专业', () => {
    // 模拟函数
    const fn = jest.fn()
    wrapTimer(fn)
    // 快进3s执行
    jest.advanceTimersByTime(3000)
    expect(fn).toHaveBeenCalledTimes(1)
    // 再快进3s,那么就运行了2次，无法理解单独运行下面注释的
    jest.advanceTimersByTime(3000)
    expect(fn).toHaveBeenCalledTimes(2)
    // jest.advanceTimersByTime(9000)
    // expect(fn).toHaveBeenCalledTimes(2)

    // 结合前面的知识，可以发现，这些timer可能会相互影响，那么也可以应用前面的生命周期钩子函数解决
    // 把头部的jest.useFakeTimers()换成这个
    // beforeEach(()=>{
    //     jest.useFakeTimers()
    // })
})