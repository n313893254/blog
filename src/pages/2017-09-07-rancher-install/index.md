---
path: "/rancher-install.html"
date: "2017-09-07T22:12:03.284Z"
title: "rancher install"
tags: ["hello", "world"]
---

# 1 Rancher

## 1.1 基础部件

* 一个 VM 实例
* 基础服务
  * 网络
  * 存储
  * 负载均衡
  * DNS
  * 安全

## 1.2 容器部件和调度

* Cattle
* Swarm
* Kuberetes
* Mesos

## 1.3 应用目录

## 1.4 企业级的控制

---

## 1.1 安装 Docker

1. 安装 yum

```
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. 添加国内源

```
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

3. 安装 DockCE

```
$ sudo yum makecache fast
$ sudo yum install docker-ce
```

4. 启动 Docker

```
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

<<<<<<< HEAD

## 1.2 Rancher HA 环境部署

```
CREATE DATABASE IF NOT EXISTS cattle COLLATE = 'utf8_general_ci' CHARACTER SET = 'utf8';
GRANT ALL ON cattle.* TO 'cattle'@'%' IDENTIFIED BY 'cattle';
GRANT ALL ON cattle.* TO 'cattle'@'localhost' IDENTIFIED BY 'cattle';
=======
## 1.2 Rancher 部署
```

sudo docker run -d --restart=unless-stopped -p 8080:8080
registry.cn-hangzhou.aliyuncs.com/ranchers/server:v1.6.5

```
## 1.3 Rancher HA 环境部署

### 1.3.1 安装数据库
```

yum install -y mariadb yum install -y mariadb-server chkconfig mariadb on
service mariadb start mysql_secure_installation mysql -u root -p

````
### 1.3.1 创建数据库

```sql
> CREATE DATABASE IF NOT EXISTS cattle COLLATE = 'utf8_general_ci' CHARACTER SET = 'utf8';
> GRANT ALL ON cattle.* TO 'cattle'@'%' IDENTIFIED BY 'cattle';
> GRANT ALL ON cattle.* TO 'cattle'@'localhost' IDENTIFIED BY 'cattle';
````

### 1.3.2 部署 rancher server

在另外两台 host 上部署

```
docker run -d --restart=unless-stopped -p 8080:8080 -p 9345:9345 rancher/server \
     --db-host myhost.example.com --db-port 3306 --db-user username --db-pass password --db-name cattle \
     --advertise-address <IP_of_the_Node>
>>>>>>> 4407f4aebc4603d1426835203903a3e44184bd31
```
