---
path: "/electron.html"
date: "2017-08-17T22:12:03.284Z"
title: "electron开发总结"
tags: ["hello", "world"]
---

## 1. electron 是什么

electron 是一个工具，用来构建跨平台桌面应用。可以把 electron 看作是一个使用 V8
内核的 “ 浏览器 ”，与普通浏览器不同的是，electron 的主进程提供了获取桌面资源的
API，开发者可以像开发桌面应用一样与桌面系统进行交互。

![结构图](http://omph2coqc.bkt.clouddn.com/17-8-17/96042537.jpg)

## 2. electron 的结构

electron 是由一个主进程和多个渲染进程组成的，主进程负责处理桌面 API，渲染进程则
像网页一样专注于实现 GUI。
![](http://omph2coqc.bkt.clouddn.com/17-8-17/40041846.jpg)

为避免内存处理出现问题，导致应用的奔溃，electron 不允许渲染进程直接使用桌面资源
的 API，必须通过和主进程通信，让主进程代为处理后把数据传递回来，这在 electron 中
的文档手册中可以体现出来，与渲染进程有关的 API 其实是很少的

![](http://omph2coqc.bkt.clouddn.com/17-8-17/5953993.jpg)

## 3. 如何开始一个 electron 开发环境

看过官方教程的话，你会明白其实渲染进程就是一个网页，主进程在启动时就是加载一个网
页，这个网页可以是本地的，也可以是在线的

[官方教程](https://electron.atom.io/docs/tutorial/quick-start/)

```js
// and load the index.html of the app.
win.loadURL(
  url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  })
)
```

明白了这个原理后，我们完全可以自己使用传统的方式设计网页，网页开发好后直接交给
electron 进行加载

对于简单的页面完全可以，但是当你打算使用 Vue 或 react 框架开发时是不是就感觉脑壳
疼了

![](http://omph2coqc.bkt.clouddn.com/17-8-17/1207770.jpg)

## 4. 使用 electron-vue 脚手架

> https://github.com/SimulatedGREG/electron-vue

根据文档进行初始化

好多细节太久忘记了，以后碰到再更新把

continue...
