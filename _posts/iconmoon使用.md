title: "iconmoon使用"

之前在做自定义菜单的时候，就想使用iconmoon来管理图标，但是因为时间不足，所以是直接引用svg解决的。今天借着Redis-Paas这个机会终于学会使用了。

## 与阿里iconfont的对比

个人认为不如阿里iconfont，不管是从图标数量和网站交互上。但是有一点是阿里没有的功能，那就是`selection.json`这个描述文件允许你直接导入到iconmoon进行管理，而阿里则是放在线上管理，需要给别人权限。

所以在协作上，iconmoon适合本地引用icon的开发，iconmoon只是一个方便查看和管理的UI，开发者只需要共同维护仓库的icon即可。阿里的iconfont则适合CDN引用的开发，开发者只需要维护阿里线上的icon即可。

要我选型当然是iconfont方便，奈何老美用了iconmoon，本着简单原则，在iconmoon基础上添加图标

## 导入项目

首先选择 `selection.json` 上传，接着点击load

![](https://tva1.sinaimg.cn/large/008eGmZEgy1gnaghbwskvj31hb0sq769.jpg)


成功后会列出图标

![image-20210203170810757](https://tva1.sinaimg.cn/large/008eGmZEgy1gnagjfyn2tj31ha0sptay.jpg)

`import icon` 用来导入图标到项目中，图标来源可以去阿里的iconfont下载svg文件


## 项目中引入

选择生成字体tab并点击下载，注意下载后的文件是`.txt`格式，需要手动改后缀并解压，之后放在项目中的 `/assets/fonts/icons` 路径下

![](https://tva1.sinaimg.cn/large/008eGmZEgy1gnah098txij31hb0spwi0.jpg)

然后在scss文件的入口处引入

```js
@import "./fonts/icons"; // Nuxt的写法
```

在组件内使用

```js
<i class="icon icon-close" />
```



以上です

