// 这步是拿当前目录下的__mocks__文件夹下的同名模拟请求，
// 这一步也可以不写，把jest.config.js配置文件里的automock属性改为true，它会自动去寻找
jest.mock('./mock_index')
// 取消模拟，真实请求
// jest.unmock('./mock_index')

import { fetchData } from './mock_index'
// 同一个文件有同步有异步，而下面这个不想模拟测试，要引入真实的
const { getNumber } = jest.requireActual('./mock_index')

test('fetchData __mock__', () => {
    // 所以这里不会实际发请求，而是去拿mocks里面的
    return fetchData().then(({ data }) => {
        expect(eval(data)).toEqual('123')
    })
})


test('getNumber', () => {
    expect(getNumber()).toEqual(200)
})

