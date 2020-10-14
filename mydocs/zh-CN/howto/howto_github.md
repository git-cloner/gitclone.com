---
name: 加速github
---

# github clone 加速

​当开发者经 gitclone.com 中转clone github上的代码库时，gitclone.com 会对代码库进行mirror缓存，以后有开发者clone时，将直接从mirror缓存中获取数据，mirror将在每天夜间从 github.com 同步。

**！！！特别需要注意的是，首先要设置git的超时参数，防止项目较大时，服务器端mirror时间过长导致git报504（超时）**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999 
```

## 方法1：修改URL

在原URL中嵌入 gitclone.com，如：
```shell
git clone https://**gitclone.com/**github.com/gogs/gogs
```

​如果需要更新，可以用`git pull`（需要等 gitclone.com 上的mirror更新）。需要提交代码时，因为 gitclone.com 暂不支持提交，可将.git/config中的`remote "origin"`项目改成原始的 github.com URL即可

## 方法2：修改git配置
```shell
​git config --global url."https://gitclone.com/".insteadOf https://
```

​然后正常clone即可

​这个命令会修改**c:\users\用户名\\.gitconfig**，linux的配置文件在~/.gitconfig内，如需提交代码，将这个文件中url配置还原

## 方法3：镜像

​使用 [https://gitclone.com/gogs/](https://gitclone.com/gogs/) 提供了代码库镜像功能。


# 客户端
程序发布在：[https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases)， 将下载的 cgit.exe 放到命令行可识别的文件夹下。命令如下：

```shell
cgit clone https://github.com/git-cloner/gitcache
cgit pull
```

如需提交，请将.git/config中的`remote "origin"`项目改成原始的 github.com URL即可