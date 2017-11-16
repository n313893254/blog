---
path: "/harbor-install.html"
date: "2017-09-14T22:12:03.284Z"
title: "harbor install"
tags: ["hello", "world"]
---

# 1 Preinstall

* docker https://docs.docker.com/engine/installation/
* docker-compose https://docs.docker.com/compose/install/

# 2 Install

## 2.1 下载安装包

```
wget https://github.com/vmware/harbor/releases/download/v1.2.0/harbor-online-installer-v1.2.0.tgz
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

# 3 配置 Harbor

> https://github.com/vmware/harbor/blob/master/docs/configure_https.md#configuring-harbor-with-https-access

## 3.1 生成 CA 证书

在 server 操作，设 Harbor 的 IP 为 120.24.3.198

### 3.1.1 建立 CA 证书发行站点

```
openssl req  -newkey rsa:4096 -nodes -sha256 -keyout ca.key -x509 -days 365 -out ca.crt
```

### 3.1.2 创建 CA 证书生成请求

```
openssl req  -newkey rsa:4096 -nodes -sha256 -keyout 120.24.3.198.key -out 120.24.3.198.csr
```

### 3.1.3 生成 CA 服务端证书

```
echo subjectAltName = IP:120.24.3.198> extfile.cnf

openssl x509 -req -days 365 -in 120.24.3.198.csr -CA ca.crt -CAkey ca.key -CAcreateserial -extfile extfile.cnf -out 120.24.3.198.crt
```

### 3.1.4 拷贝证书

```
cp 120.24.3.198.crt /root/cert/
cp 120.24.3.198.key /root/cert/
```

### 3.1.5 harbor.cfg 修改

```
#配置Harbor服务的主机IP地址或主机名，注意要与CA证书的完全一致。
#hostname = reg.mydomain.com
hostname = 120.24.3.198

#配置Harbor使用https
#ui_url_protocol = http
ui_url_protocol = https

#改为上面生成的CA客户端证书，注意路径一致，可使用命令`pwd`获得。
#ssl_cert = /path/to/server.crt
ssl_cert = /home/supermap/docker/120.24.3.198.crt

#ssl_cert_key = /path/to/server.key
ssl_cert_key = /home/supermap/docker/120.24.3.198.key
```

## 4 配置客户端

### 4.1 修改配置文件

```
vim /usr/lib/systemd/system/docker.service
```

```
# 加上--insecure-registry参数
ExecStart=/usr/bin/dockerd --insecure-registry=120.24.3.198
```

### 4.2 重启

```
systemctl daemon-reload
systemctl restart docker.service
```

# 5 推送镜像

```
docker login 120.24.3.198
docker pull hello-world
```

然后为该镜像打上新的标签，标签格式为：Harbor 地址 / 项目名 / 镜像名称 : 镜像标签

```
docker tag hello-world 120.24.3.198/library/hello-world
docker push 120.24.3.198/library/hello-world
```

# 6 登录 Harbor

默认账号

```
user: admin
password: Harbor12345
```

可以看到 UI 里面已经有显示了 , 添加镜像库就可以使用了

EOF
