---
path: "/K8S.html"
date: "2017-10-15T22:12:03.284Z"
title: "有趣的ATOM插件"
tags: ["hello", "world"]
---

# 有趣的Atom插件

最近在写react，发现要在jsx文件中写大量的HTML，没有emmet的帮助，感觉累死了，所幸发现了一个很cool的方法，还是记录下来，顺便做成一个合集

## 1. emmet
HTML的补全，功能强大，前端必备

## 2. language-babel
高亮js文件中的jsx语法

## 3. jsx代码补全
这个不是插件，不过还是单独一个标题吧

> https://gist.github.com/mxstbr/361ddb22057f0a01762240be209321f0

1. Preinstall: `emmet`和`language-babel`
2. 打开`keymap.cson`(`Atom -> Keymap`)
3. 加上
```
'atom-text-editor[data-grammar~="jsx"]:not([mini])':
  'tab': 'emmet:expand-abbreviation-with-tab'
```
4. have fun

![](http://omph2coqc.bkt.clouddn.com/17-10-15/16174474.jpg)
