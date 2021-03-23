import { fetchData, fetchPromise, fetch404 } from './fetchData'

test('回调类型异步测试', (done) => {
    fetchData(code => {
        expect(code).toEqual('200')
        // 执行完参数才运行这个测试用例,如果去改url不执行这步会发现测试也通过   npx jest ./3_异步测试/fetchData.test.js 
        done()
    })
})


test('promise测试', async () => {
    const response = await fetchPromise()
    expect(response.data.code).toEqual('200')
})

test('promise测试', () => {
    // 另外一种语法测试，包含了{ data: { data: {} } }就是正常
    return expect(fetchPromise()).resolves.toMatchObject({ data: { data: {} } })
})

test('promise测试', async () => {
    // 同步语法，不用return
    await expect(fetchPromise()).resolves.toMatchObject({ data: { data: {} } })
})

test('promise测试结果返回404', () => {
    // 期望至少执行使用一次，假如不写，一个非404不抛异常也可以通过，因为走不进下面的catch
    expect.assertions(1)
    return fetch404().catch(e => {
        expect(e.response.data.msg.indexOf('404') > -1).toBe(true)

    })
    // 或者如下,个人哪个顺手用用哪个
    // expect.assertions(1)
    // try {
    //     await fetch404()  
    // } catch (e) {
    //     expect(e.response.data.msg.indexOf('404') > -1).toBe(true)
    // }
})

test('promise测试结果返回404', () => {
    // 另外一种语法测试404
    return expect(fetch404()).rejects.toThrow()
})