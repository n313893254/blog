---
path: "/HTTP.html"
date: "2017-08-18T22:12:03.284Z"
title: "图解HTTP读书笔记"
tags: ["hello", "world"]
---
# 为什么读这本书
今天面试美的电商，面试过程对http、性能、安全和后台交互这方面的知识不足，故先把http这部分给补回来先，我看书优先选择动物书和图灵的，故最后选择了《图解HTTP》

# 书籍介绍
> [豆瓣详细介绍](https://book.douban.com/subject/25863515/)

![](http://omph2coqc.bkt.clouddn.com/17-8-22/47314422.jpg)

# 笔记部分
## 1. TCP/IP协议族
- HTTP是TCP／IP的子集
### 1.1 分层
  - 应用层：提供应用服务时通信的活动，比如HTTP、FTP和DNS
  - 传输层：提供处于网络连接中的两台计算机之间的数据传输，TCP和UDP
  - 网络层：处理在网络上流动的数据包, IP
  - 链路层：处理网络连接的硬件部分

![](http://omph2coqc.bkt.clouddn.com/17-8-22/47227791.jpg)

### 1.2 负责传输的IP(Internet Protocol)
- IP地址：节点地址
- MAC地址：网卡地址
- 使用ARP(Address Resolution Protocol)协议凭借MAC地址进行通信,可根据IP地址反查出MAC地址
- 中转过程中的状况只能粗略地了解

### 1.3 确保可靠性的TCP
- 三次握手
