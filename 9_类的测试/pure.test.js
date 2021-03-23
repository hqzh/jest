//模拟当前目录下的util,当调用jest.mock去引入util的时候，jest只要见到.mock在这个文件里面,就会自动提升到第一行优先执行，干脆直接放到第一行
// 另外，jest.mock 发现util是一个类，会自动把类的构造函数和方法变成jest.fn(),具体会转化为如下：
// const Util = jest.fn()
//  Util.init = jest.fn()
//  Util.a = jest.fn()
//  Util.b = jest.fn()
jest.mock('./util')  // 也可以前面讲过的在__mocks__下额外的操作（更倾向于这种），或者如下：

// jest.mock('./util',()=>{
//     const Util = jest.fn(() => {
//         // 前面讲过，自定义mock
//         console.log(constructor);
//     })
//     Util.prototype.a = jest.fn(() => {
//         console.log('a');
//     })
//     Util.prototype.b = jest.fn(() => {
//         console.log('b');
//     })
//     return Util
// })

// 追溯，同时对pureFn引入的外部文件统一的集成测试
import Util from './util'

import pureFn from './pure'


test('测试pureFn', () => {
    // 那么此处执行的就是假的Util,就不会耗性能了
    pureFn()
    expect(Util).toHaveBeenCalled()
    // 还要测试a和b方法，前面讲过，有mock这个属性
    console.log(Util.mock);
    expect(Util.mock.instances[0].a).toHaveBeenCalled()
    expect(Util.mock.instances[0].b).toHaveBeenCalled()
})