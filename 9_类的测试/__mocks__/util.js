const Util = jest.fn(() => {
    // 前面讲过，自定义mock
    console.log(constructor);
})
Util.prototype.a = jest.fn(() => {
    console.log('a');
})
Util.prototype.b = jest.fn(() => {
    console.log('b');
})

export default Util