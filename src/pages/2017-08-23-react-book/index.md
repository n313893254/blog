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
## 1.1 数据
- prop用于定义外部接口，state用于记录内部状态
- prop的赋值在外部世界使用组件时，state的赋值在组件内部
- 组件不应该改变prop的值，而state存在的目的就是让组件来改变的

## 1.2 生命周期
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
