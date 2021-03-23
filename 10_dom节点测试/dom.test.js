import addDivToBody from './dom'
import $ from 'jquery'
// jest 在node环境下自己模拟了一套dom的api .
test('测试dom操作', () => {
    addDivToBody()
    console.log($('body').find('div').length);
    expect($('body').find('div').length).toBe(1)
})