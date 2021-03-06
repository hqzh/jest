import { add } from './math'

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10)
})



// 源代码原理
// const expect = (result) => {
//     return {
//         toBe(actual) {
//             if (result === actual) {
//                 throw new Error('预期值和实际值不想等')
//             }
//         }
//     }
// }

// const test = (desc, fn) => {
//     try {
//         fn()
//         console.log(`${desc} 通过测试`);
//     } catch (error) {
//         console.log(`${desc} 未通过测试`);
//     }
// }
