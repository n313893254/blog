---
path: "/rancher-package.html"
date: "2017-10-15T22:12:03.284Z"
title: "Rancher编译和打包"
tags: ["hello", "world"]
---

## Rancher编译和打包

null

### 1. 准备

1. 可以翻墙的环境，推荐阿里硅谷和Amazon
2. Fork rancher/rancher 仓库
3. Docker环境

```bash
curl https://releases.rancher.com/install-docker/1.12.6.sh >> 1.12.6.sh
sh 1.12.6.sh
```

### 2. 选择代码版本

> <https://github.com/rancher/rancher/blob/master/package/Dockerfile#L29>
`ENV CATTLE_UI_VERSION 2.0.77`
所以需要根据history寻找对应的UI，如2.1.4的后端代码为`https://github.com/rancher/rancher/tree/39e5e205d610bce3424623453836a22b41d9ce0d`, tag为`v2.1.1-rc5`

### 3. 修改tar包地址

> <https://github.com/rancher/rancher/blob/master/package/Dockerfile#L45>

修改为`curl -sL https://qingyang-poi.oss-cn-shenzhen.aliyuncs.com/jari/tar/2.1.4-jari-v0.0.1.tar.gz | tar xvzf - --strip-components=1 && \`.

因为rancher的版本为v开头的时候取的是tar包内的UI，此时是无法通过CDN获取UI的
所以提交代码并打tag为v开头的版本号，如`v2.1.1-rc5-jari-v0.0.1`
建议建立一个新的v开头的分支, 如: `v0.0.1-jari`, 编译环境(image: rancher)会用到

为了方便编译，这里code和tag提交远程仓库

### 4. 编译

> 关爱国内局域网 ---by 鲁迅
![关爱国内局域网](http://i2.chinanews.com/simg/cmshd/2017/11/17/5a8aa26cded9409b8abde3b81ba1a785.jpg)

```bash
apt-get update
apt-get install git
git clone https://github.com/n313893254/rancher.git
cd ranher
git checkout v0.0.1-jari
make
```

### 5. 完成

`docker images` 会看到 `rancher/rancher-agent:v2.1.1-rc5-jari-v0.0.1`和`rancher/rancher:v2.1.1-rc5-jari-v0.0.1`
执行命令起rancher

```bash
docker run -d -p 80:80 -p 443:443 -e CATTLE_AGENT_IMAGE=rancher/rancher-agent:v2.1.1-rc5-jari-v0.0.1 rancher/rancher:v2.1.1-rc5-jari-v0.0.1
9d90f0df2a78ba527c5a3ad9826a3465cc3d06c0f427312109d8fe42bfd53e24
```

### 6. 修改公司名

全局 =》 设置 =》 ui-pl =》 编辑 =》 如: JARI
