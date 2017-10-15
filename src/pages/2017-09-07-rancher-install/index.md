---
path: "/rancher-install.html"
date: "2017-09-07T22:12:03.284Z"
title: "rancher install"
tags: ["hello", "world"]
---
# 1 Rancher
## 1.1 基础部件
- 一个VM实例
- 基础服务
  - 网络
  - 存储
  - 负载均衡
  - DNS
  - 安全

## 1.2 容器部件和调度
- Cattle
- Swarm
- Kuberetes
- Mesos

## 1.3 应用目录
## 1.4 企业级的控制

-------------
## 1.1 安装Docker
1. 安装yum
```
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```
2. 添加国内源
```
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
3. 安装DockCE
```
$ sudo yum makecache fast
$ sudo yum install docker-ce
```
4. 启动Docker
```
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

## 1.2 Rancher HA 环境部署
```
CREATE DATABASE IF NOT EXISTS cattle COLLATE = 'utf8_general_ci' CHARACTER SET = 'utf8';
GRANT ALL ON cattle.* TO 'cattle'@'%' IDENTIFIED BY 'cattle';
GRANT ALL ON cattle.* TO 'cattle'@'localhost' IDENTIFIED BY 'cattle';
```
