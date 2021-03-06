
// 专业术语来说，一个*.test.js就是一个测试用例
test('测试10与10匹配', () => {
    // toBe 匹配器  matchers
    expect(10).toBe(10)
})

test('测试对象内容相等', () => {
    const obj = { name: 'hqzh' }
    expect(obj).toEqual({ name: 'hqzh' })
})

test('测试是否null值', () => {
    const value = null
    expect(value).toBeNull()
})

// 真假有关的匹配器还有toBeUndefined(未定义)、toBeDefined(已定义)、toBeTruthy、toBefalsy等，当然还有取反匹配器，比如

test('not matcher', () => {
    const value = '旺财'
    expect(value).not.toBeUndefined()
})

// 数字相关的匹配器

test('测试相比更大', () => {
    const count = 88
    expect(count).toBeGreaterThan(77)  //相反 toBeLessThan
    // 复杂一点，比如大于等于  toBeGreaterThanOrEqual，同样相反类推
})

// 注意的是，由于js精度问题，测试浮点运算时，就不能用toEqual了，得用toBeCloseTo
test('测试浮点数运算', () => {
    const x = 0.1
    const y = 0.2
    expect(x + y).toBeCloseTo(0.3)
})


//字符串
test('toMath', () => {
    const str = 'www.sutpc.com'
    expect(str).toMatch('sutpc')
})

// Array Set

test('toContain', () => {
    const arr = ['梅花十三','伍六七','鸡大宝']
    expect(arr).toContain('伍六七')
    // expect(new Set(arr)).toContain('伍六七')
})

// 异常
test('测试能否抛出异常', () => {
    const fn = () => {throw new Error('error')}
    expect(fn).toThrow()
    // 错误内容
    // expect(fn).toThrow('this is a error')  // 或者正则表达式 /this is a error/
    // expect(fn).not.toThrow()
})
