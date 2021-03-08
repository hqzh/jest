import { generateConfig, generateAnotherConfig, generateDynamicConfig } from './index'

test('generateConfig', () => {
    // 如果参数多一个或少一个，要修改这个测试文件，不方便
    // expect(generateConfig()).toEqual({
    //     server: 'http://localhost',
    //     port: 8080
    // })
    // 会发现报错，但是命令行按w后按U很方便更新
    expect(generateConfig()).toMatchSnapshot()
})

test('generateAnotherConfig', () => {
    // 如果多个快照，想一个个确认更新，先按w,在按i后按需求变更
    // 当然，用于组件的UI单元测试也比较好用，后面 我们再讲
    expect(generateAnotherConfig()).toMatchSnapshot()
})

test('generateDynamicConfig 动态参数测试', () => {

    expect(generateDynamicConfig()).toMatchSnapshot({
        time: expect.any(Date)  // 类似还可以写String 、 Number等
    })
})