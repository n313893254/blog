---
path: "/K8S.html"
date: "2017-10-13T22:12:03.284Z"
title: "K8S学习笔记"
tags: ["hello", "world"]
---

# K8S 学习笔记

刚开始学习觉得 k8s 可以在线部署，觉得很方便。。。然而看了一天后，对那些概念一脸
懵逼，还得自己总结下

## 1. Overview

![](http://omph2coqc.bkt.clouddn.com/17-10-11/2078804.jpg)

物理层面的概念：

* master: 负责管理集群 `kubectl` - nodeprocess: kube-apiserver,
  kube-controller-manager, kube-scheduler
* node: 可以是物理机也可以是虚拟机，作为工作主机运行 kubelet 管理节点上运行的容
  器 `minikube` - nodeprocess: kubelet, kube-proxy - runtime: docker

---

![](http://omph2coqc.bkt.clouddn.com/17-10-11/12716569.jpg) Objects：

* Pod: 一组紧密关联的容器集合，它们共享网络和文件系统，是在 K8s 集群中运行部署应
  用或服务的最小单元。
* Namespace: 一组资源和对象的抽象集合，提供虚拟的隔离作用。
* Service: 是对一组提供相同功能的 Pods 的抽象，并为它们提供一个统一的入口，通过
  labels 为应用提供负载均衡和服务发现。

---

Controllers:

* Deployment ：负责创建和更新应用实例，表示用户对 K8s 集群的一次更新操作。长期伺
  服型（long-running ）
* StatefulSet：解决有状态服务的问题，有状态应用型（stateful application ）

## 2. 详解

### 2.1 Deployment

```
kubectl run kubernetes-bootcamp --image=docker.io/jocatalin/kubernetes-bootcamp:v1 --port=8080
```

执行这条命令，k8s 会创建一个 Pod，Pod 名
为`kubernetes-bootcamp-3661616660-472r5`, Deployment 名为`kubernetes-bootcamp`，
相同 Deployment 名无法创建可以认为 Deployment 与 Pod 一一对应，K8S 通过
Deployment 来控制对应的 Pod

### 2.2 Service

Pod 的 IP 地址会随着 Pod 的重启而变化，并不建议直接拿 Pod 的 IP 来交互。所以使用
Service 为一组 Pod（通过 labels 来选择）提供一个统一的入口，并为它们提供负载均衡
和自动服务发现。

```
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
```
