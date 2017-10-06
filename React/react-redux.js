/**
 * react-redux的两个主要功能
 * connect: 连接容器组件和傻瓜组件
 * Provider: 提供包含store的context。
 * 
 * 为了定义业务逻辑，需要给出下面两方面的信息。
 * 1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
 * 2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。
 * 
 * connect(mapStateToProps, mapDispatchToProps)
 * connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
 * 它们定义了 UI 组件的业务逻辑。
 * 前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
 * 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
 */