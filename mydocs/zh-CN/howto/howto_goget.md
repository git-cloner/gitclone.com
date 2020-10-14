---
name: 加速go get
---

# go get 加速

go get获取代码时，可以使用 goproxy.io 代理加速，用以下方法：
```shell
export GOPROXY=https://goproxy.io
```

然后正常go get即可

这个命令会修改**c:\users\用户名\\.gitconfig**，linux在~/.gitconfig文件中，如需提交代码，将这个文件中url配置还原
