---
path: "/GTMD-GFW.html"
date: "2015-05-02T22:12:03.284Z"
title: "跨过长城，走向世界"
tags: ["hello", "world"]
---

## 淘宝镜像

作为个前端开发者，经常要下载各种包，不喜欢自己设置的可以用 cnpm，本人还是喜欢自
己设置 😊

1. 打开[淘宝镜像网站](https://npm.taobao.org/mirrors)，选择你需要的镜像，拷贝镜
   像地址
   如`SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass`到`~/.bashrc`
2. 拷贝后的例子

```
export PHANTOMJS_CDNURL="http://npm.taobao.org/mirrors/phantomjs"
export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
export ELECTRON_MIRROR="http://npm.taobao.org/mirrors/electron"
```

3. `source ~/.bashrc`
4. 开始你的旅行吧

## Shell

GitHub 发布的二进制包，例如 WinCodeSign，使用的亚马逊的服务器。

![你懂的](http://omph2coqc.bkt.clouddn.com/17-7-24/29668969.jpg)

由于是在代码里面访问 http，所以只有全局代理能拯救我们了

```
// 设置代理
export ALL_PROXY=socks5://127.0.0.1:1080
// 清除代理
unset ALL_PROXY
// 查看ip测试是否生效
curl -i http://ip.cn
```
