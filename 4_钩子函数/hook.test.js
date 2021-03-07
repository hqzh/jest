import Hook from './hook'

// minus会报错，因为共用同一个实例，number经过第一个已经是1了，那么结果就会是0,由于关联，还要考虑上一个测试，不靠谱
// const hook = new Hook()
// test('测试Hook addOne 方法', () => {
//     hook.addOne()
//     expect(hook.number).toBe(1)
// })

// test('测试Hook addOne 方法', () => {
//     hook.minusOne()
//     expect(hook.number).toBe(0)
// })

let hook = null

beforeAll(() => {
    console.log('运行测试用例会先走这个');
})
// 相反，也有afterEach
beforeEach(() => {
    console.log('每个测试走之前走');
    hook = new Hook()
})
afterAll(() => {
    console.log('运行测试用例会走完走这个');
})
test('测试Hook addOne 方法', () => {
    console.log('add');
    hook.addOne()
    expect(hook.number).toBe(1)
})

test('测试Hook minusOne 方法', () => {
    console.log('minus');
    hook.minusOne()
    expect(hook.number).toBe(-1)
})

// 以上就是核心的四个钩子函数了

// 熟悉mocha的肯定知道describe，以下做个分组描述,其实测试用例外层默认有这个describe，只是默认啥都没做
describe('测试钩子', () => {
    // 可以发现，会先打印‘整个用例描述’，然后‘加法相关方法描述’，所以准备类型的代码务必放在这个describe的周期函数里面去，不要直接放在这个describe里面，避免趟坑
    console.log('整个用例描述');
    describe('测试加法相关', () => {
        console.log('加法相关方法描述');
        test('测试Hook addOne 方法', () => {
            console.log('add one');
            hook.addOne()
            expect(hook.number).toBe(1)
        })
        test('测试Hook addTwo 方法', () => {
            console.log('add two');
            hook.addTwo()
            expect(hook.number).toBe(10)
        })
    })
})
