---
path: "/k8s-install.html"
date: "2017-10-13T22:12:03.284Z"
title: "k8s本地开发环境设置"
tags: ["hello", "world"]
---

# k8s本地开发环境设置

## 1. 碎碎念
远在深圳的我都能感受到北京的气氛，幸亏有阿里云定制的minikube，要不这个周末还得跟GFW怼

![](http://omph2coqc.bkt.clouddn.com/17-10-20/10187470.jpg)

## 2. version

- kubectl: v1.5.1
- minikube: v0.22.3
- helm: v2.2.0

## 3. 安装kubectl

```
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.5.1/bin/darwin/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

## 4. 安装minikube
这里我使用了阿里云定制的，无痛安装，可确保一下系统pod都可以起来,而且可以加上阿里云的镜像参数，确保后续chart的安装也没问题

![](http://omph2coqc.bkt.clouddn.com/17-10-20/95317902.jpg)

```
curl -Lo minikube http://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/releases/v0.22.3/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
```
`minikube start`
之后用`kubectl -n kube-system get po`以确认安装是否成功

## 5. 安装helm
客户端安装：
下载`https://storage.googleapis.com/kubernetes-helm/helm-v2.2.0-darwin-amd64.tar.gz`
```
mv darwin-amd64/helm /usr/local/bin/helm
```

服务端安装(tiller):
由于阿里云镜像没有，所以要进minikube把镜像拉下来
```
minikube ssh
docker pull registry.cn-hangzhou.aliyuncs.com/doubleshhep/tiller:v2.2.0
docker tag registry.cn-hangzhou.aliyuncs.com/doubleshhep/tiller:v2.2.0 gcr.io/kubernetes-helm/tiller:v2.2.0
```
之后用`kubectl -n kube-system get po`以确认安装是否成功

## 6. 安装所需要的chart
以mongodb为例

```
helm install mongodb
```

之后根据输出信息验证即可
