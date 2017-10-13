---
path: "/K8S.html"
date: "2017-10-13T22:12:03.284Z"
title: "K8S学习笔记"
tags: ["hello", "world"]
---

# K8S学习笔记

刚开始学习觉得k8s可以在线部署，觉得很方便。。。然而看了一天后，对那些概念一脸懵逼，还得自己总结下

## 1. Overview

![](http://omph2coqc.bkt.clouddn.com/17-10-11/2078804.jpg)

物理层面的概念：
- master: 负责管理集群 `kubectl`
	- nodeprocess: kube-apiserver, kube-controller-manager, kube-scheduler
- node: 可以是物理机也可以是虚拟机，作为工作主机运行kubelet管理节点上运行的容器 `minikube`
	- nodeprocess: kubelet, kube-proxy
	- runtime: docker

----------------------
![](http://omph2coqc.bkt.clouddn.com/17-10-11/12716569.jpg)
Objects：
- Pod: 一组紧密关联的容器集合，它们共享网络和文件系统，是在K8s集群中运行部署应用或服务的最小单元。
- Namespace: 一组资源和对象的抽象集合，提供虚拟的隔离作用。
- Service: 是对一组提供相同功能的Pods的抽象，并为它们提供一个统一的入口，通过labels为应用提供负载均衡和服务发现。

----------------

Controllers:
- Deployment：负责创建和更新应用实例，表示用户对K8s集群的一次更新操作。长期伺服型（long-running）
- StatefulSet：解决有状态服务的问题，有状态应用型（stateful application）


## 2. 详解
### 2.1 Deployment
```
kubectl run kubernetes-bootcamp --image=docker.io/jocatalin/kubernetes-bootcamp:v1 --port=8080
```
执行这条命令，k8s会创建一个Pod，Pod名为`kubernetes-bootcamp-3661616660-472r5`, Deployment名为`kubernetes-bootcamp`，相同Deployment名无法创建
可以认为Deployment与Pod一一对应，K8S通过Deployment来控制对应的Pod

### 2.2 Service
Pod的IP地址会随着Pod的重启而变化，并不建议直接拿Pod的IP来交互。所以使用Service为一组Pod（通过labels来选择）提供一个统一的入口，并为它们提供负载均衡和自动服务发现。
```
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
```
