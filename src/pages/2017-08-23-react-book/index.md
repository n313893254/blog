---
path: "/React-book.html"
date: "2017-08-23T22:12:03.284Z"
title: "《深入浅出React和Redux》读书笔记"
tags: ["hello", "world"]
---
# 为什么读这本书
因为公司要用React技术栈

# 书籍介绍
> [豆瓣详细介绍](https://book.douban.com/subject/27033213/)

![](http://omph2coqc.bkt.clouddn.com/17-8-23/20058027.jpg)

# 笔记部分
## 1. 组件
### 1.1 数据
- prop用于定义外部接口，state用于记录内部状态
- prop的赋值在外部世界使用组件时，state的赋值在组件内部
- 组件不应该改变prop的值，而state存在的目的就是让组件来改变的

### 1.2 生命周期
- Mount(装载过程)：就是把组件第一次在DOM树中渲染的过程
  - constructor
  - componetWillMount
  - render
  - componentDidMount
- Update(更新过程)：当组件被重新渲染的过程
  - componentWillReceiveProps
  - shouldComponentUpdate
  - componentWillUpdate
  - render
  - componentDidUpdate
- Unmount(卸载过程)：组件从DOM中删除的过程
  - componentWillUnmount

## 2. Redux
### 2.1 MVC框架
- Model(模型)：负责管理数据，大部分业务逻辑也应该放在Model中
- View(视图)：负责渲染用户界面，应该避免在View中涉及业务逻辑
- Controller(控制器)：负责接受用户输入，根据用户输入调用对于的Model部分逻辑，把产生的数据结果交给View部分，让View渲染出必要的输出

![](http://omph2coqc.bkt.clouddn.com/17-8-24/14480357.jpg)

### 2.2 Flux
- Dispatcher：处理动作分发，维持Store之间的依赖关系
- Store：负责存储数据和处理数据相关逻辑
- Action：驱动Dispatcher的JavaScript对象
- View：视图部分，负责显示用户界面

![](http://omph2coqc.bkt.clouddn.com/17-8-24/25722164.jpg)
