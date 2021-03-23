import Util from './util'

let util = null

beforeAll(() => {
    util = new Util()
})

// 常规操作，只执行了单元测试，下面还可以测试a,b方法
test('测试init方法', () => {
    expect(util.init(1, 2)).toBe(undefined)
})