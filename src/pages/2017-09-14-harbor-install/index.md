---
path: "/rancher-install.html"
date: "2017-09-14T22:12:03.284Z"
title: "harbor install"
tags: ["hello", "world"]
---

# 1 Preinstall
- docker https://docs.docker.com/engine/installation/
- docker-compose https://docs.docker.com/compose/install/

# 2 Install
## 2.1 下载安装包
```
curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```
## 2.2 解压安装包

```
tar xvf harbor-online-installer-v1.2.0-rc3.tgz
```
## 2.3 配置文件

```
cd harbor
vim harbor.cfg
```

```
hostname = 39.108.232.148 //server IP
```
## 2.4 执行安装脚本

```
sudo -E env "PATH=$PATH" ./install.sh
```
