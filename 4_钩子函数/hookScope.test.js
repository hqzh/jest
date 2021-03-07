import Hook from './hook'

describe('测试钩子', () => {
    let hook = null
    beforeEach(() => {
        console.log('每个测试走之前走');
        hook = new Hook()
    })
    beforeAll(() => {
        console.log('外层');
    })
    test('测试Hook minusOne 方法', () => {
        console.log('minus');
        hook.minusOne()
        expect(hook.number).toBe(-1)
    })
    describe('测试加法相关', () => {
        // 可以发现，这个钩子只钟对当前describe作用域的示例钩子
        beforeAll(() => {
            console.log('内层');
        })
        test('测试Hook addOne 方法', () => {
            console.log('add one');
            hook.addOne()
            expect(hook.number).toBe(1)
        })
        // 加上only只走目前这个，方便排查调试
        // test.only('测试Hook addTwo 方法', () => {
        test('测试Hook addTwo 方法', () => {
            console.log('add two');
            hook.addTwo()
            expect(hook.number).toBe(10)
        })
    })
})
