---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
path: "/rancher-ui-traning.html"
date: "2020-06-16T22:12:03.284Z"
title: "Ranhcer-UI培训"
tags: ["hello", "world"]
---

<!-- ![bg left:40% 80%](https://raw.githubusercontent.com/marp-team/marp/master/marp.png) -->

# **数据流**

![Data flow (1)](https://user-images.githubusercontent.com/18737885/84357983-0d813780-abf9-11ea-887c-240dc15a20eb.png)

---

# Collection

- filters
- sort
- pagination
- data

---

# Resource
- id
- type: 资源类型
- links: 定义资源的CRUD和相关GET的链接，e.g. update, remove
- actions: 定义资源的POST链接, e.g. start, stop

---

# Model
- 原始资源定义在api-store, 提供了一些默认的方法: save, doAction, delelte.
- 资源的扩展: computed
- aciton-menu的定义

---

# API Store

- 基于axios发请求，可修改axios配置
- find(type[, id, opt])
- rawRequest(opt)

---

# 目录结构

---

# Console

![Shell](https://user-images.githubusercontent.com/18737885/84458897-a6b35b00-ac98-11ea-8ce4-c34b1d67528e.png)

---

- xterm
- 建立连接
```js
const scheme = window.location.protocol === 'https:' ? 'wss://' : 'ws://';

let url = `${scheme}${window.location.host}/clusters/${clusterId}/api/v1/namespaces/${namespaceId}/pods/${podName}/exec`;
url += `?container=${encodeURIComponent(containerName)}&stdout=1&stdin=1&stderr=1&tty=1`;

const command = ['/bin/sh', '-c', 'TERM=xterm-256color; export TERM; [ -x /bin/bash ] && ([ -x /usr/bin/script ] && /usr/bin/script -q -c "/bin/bash" /dev/null || exec /bin/bash) || exec /bin/sh'];
command.forEach(c => {
  url += `&command=${encodeURIComponent(c)}`;
});

new WebSocket(url, 'base64.channel.k8s.io');
```
- 输入命令
```js
term.onData(data => {
  socket.send(`0${AWS.util.base64.encode(data)}`);
});
```

---

- 回显解码
```js
socket.onmessage = message => {
  const data = message.data.slice(1);
  let text;
  switch (message.data[0]) {
    case '1':
    case '2':
    case '3':
      text = AWS.util.base64.decode(data).toString();
      if (text.trim() === 'exit') {
        this.handleClose();
        return;
      }
      term.write(text);
      break;
    default:
      break;
  }
};
```

---

# Log

![Log](https://user-images.githubusercontent.com/18737885/84460247-0e1eda00-ac9c-11ea-9441-36d52ba6d7a3.png)

---

- 建立连接
```js
const scheme = window.location.protocol === 'https:' ? 'wss://' : 'ws://';

let url = `${scheme}${window.location.host}/k8s/clusters/${clusterId}/api/v1/namespaces/${namespaceId}/pods/${podName}/log`;
url += `?container=${encodeURIComponent(containerName)}&tailLines=500&follow=true&timestamps=true&previous=true`;

new WebSocket(url, 'base64.channel.k8s.io');
```

--- 
- 日志解码
```js
socket.onmessage = message => {
  const data = AWS.util.base64.decode(message.data).toString();

  data.trim().split(/\n/).filter(line => line).forEach(line => {
    const match = line.match(/^\[?([^ \]]+)\]?\s?/);
    let dateStr = '';
    let msg = '';
    if (match) {
      msg = line.substr(match[0].length);
      const date = new Date(match[1]);
      dateStr = `<span class="log-date">${this.escapeHtml(date.toLocaleDateString())} ${this.escapeHtml(date.toLocaleTimeString())}</span>`;
    } else {
      msg = line;
      dateStr = '<span class="log-date">Unknown Date</span>';
    }

    this.logRef.current.insertAdjacentHTML('beforeend',
      `<div class="log-msg log-combined"><span class="log-date">${
      dateStr
      }</span>${AnsiUp.ansi_to_html(this.escapeHtml(msg))
      }</div>`,
    );
  });

  if (this.state.isFollow) {
    this.handleJumpBottom();
  }
};
```
---

- 自动换行
```scss
.wrap-lines {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```

---
- 自动下拉
```js
const body = $('.log-body');
let lastScrollTop = 0;

body.scroll(() => {
  const scrollTop = body[0].scrollTop;

  if ( lastScrollTop >  scrollTop ) {
    set(this, 'isFollow', false);
  }
  lastScrollTop = scrollTop;
});
```
