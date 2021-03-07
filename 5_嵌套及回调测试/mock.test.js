// Jest 中的三个与 Mock 函数相关的API，分别是jest.fn()、jest.spyOn()、jest.mock()。
// 使用它们创建Mock函数能够帮助我们更好的测试项目中一些逻辑较复杂的代码，例如测试函数的嵌套调用，回调函数的调用等。

// 在项目中，一个模块的方法内常常会去调用另外一个模块的方法。
// 在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，只想知道它是否被正确调用即可，甚至会指定该函数的返回值。
// 此时，使用Mock函数是十分有必要。

// Mock函数提供的以下三种特性，在我们写测试代码时十分有用：
//     捕获函数调用和返回结果以及调用顺序
//     设置函数返回值
//     改变函数的内部实现
import axios from 'axios'
import { runCallback, createCallback, fetchData } from './mock'

// 实际情况在真实的项目里，上万个请求，每一个1s的话都要等好久，所以前端只要确认异步请求发送了，至于返回什么结果，那是后端的测试任务确保的内容
jest.mock('axios')

test('测试 runCallback', () => {
    // 可以发现错误，因为runCallback的参数运行并未返回，所以是undefined
    // const fn = () => {
    //     return  'hi'
    // }
    // expect(runCallback(fn)).toBe('hi')

    // jest.fn()是创建Mock函数最简单的方式，如果没有定义函数内部的实现，jest.fn()会返回undefined作为返回值。
    const fn = jest.fn()
    // const fn = jest.fn(()=>'hqzh')  等价  jest.fn().mockImplementation(()=>{return 'hqzh'})  同样他也有once,相比于下面的mockReturnValue回调可以做其它逻辑，更强悍
    // const fn = jest.fn().mockReturnValue('hqzh')
    // const fn = jest.fn().mockReturnThis()
    // const fn = jest.fn().mockReturnValueOnce('hqzh')
    // const fn = jest.fn().mockReturnValueOnce('hq').mockReturnValueOnce('zh')
    runCallback(fn)
    runCallback(fn)
    expect(fn).toBeCalled()
    expect(fn.mock.calls.length).toBe(2)
    expect(fn.mock.calls[0]).toEqual(['hqzh'])
    // expect(fn).toBeCallWidth(['hqzh'])  // 每一次调用都是hqzh
    // results  to do
    // invocationCallOrder 调用顺序
    console.log(fn.mock);
})

test('createCallback', () => {
    const fn = jest.fn()
    createCallback(fn)
    expect(fn).toBeCalled()
    console.log(fn.mock);
})

test('fetchData', () => {
    // axios发post请求的时候，我们去模拟返回结果是什么，不会真实的去请求接口
    axios.post.mockResolvedValue({ data: 'hqzh' })
    // axios.post.mockResolvedValueOnce({ data: 'hq' })
    // axios.post.mockResolvedValueOnce({ data: 'zh' })
    fetchData().then(data => {
        expect(data).toBe('hqzh')
    })
    // await fetchData().then(data => {
    //     expect(data).toBe('hq')
    // })
    // await fetchData().then(data => {
    //     expect(data).toBe('zh')
    // })
})