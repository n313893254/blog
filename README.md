[收藏夹]()
1. git使用
2. atom
3. VPS
4. [markdown](markdown\readme.md)

shadowshock

```
wget --no-check-certificate     https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocksR.sh
chmod +x shadowsocksR.sh
./shadowsocksR.sh 2>&1 | tee shadowsocksR.log
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
chmod +x bbr.sh
./bbr.sh
```

返回值有 tcpbbr 即bbr已启动

```
lsmod | grep bbr
```
