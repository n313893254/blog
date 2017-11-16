---
path: "/atom-plugin.html"
date: "2017-10-15T22:12:03.284Z"
title: "有趣的ATOM插件"
tags: ["hello", "world"]
---

# 有趣的 Atom 插件

最近在写 react，发现要在 jsx 文件中写大量的 HTML，没有 emmet 的帮助，感觉累死了
，所幸发现了一个很 cool 的方法，还是记录下来，顺便做成一个合集

## 1. emmet

HTML 的补全，功能强大，前端必备

## 2. language-babel

高亮 js 文件中的 jsx 语法

## 3. jsx 代码补全

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
