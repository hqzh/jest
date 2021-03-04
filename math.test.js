const math = require('./math.js')

const { add } = math

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10)
})
