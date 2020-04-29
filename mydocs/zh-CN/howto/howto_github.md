---
name: 加速github
---

# github clone 加速

​	当开发者经gitclone.com中转clone github上的代码库时，gitclone.com会对代码库进行mirror缓存，以后有开发者clone时，将直接从mirror缓存中获取数据，mirror将在每天夜间从github.com同步。

## 方法1：修改URL

​	在原URL中嵌入gitclone.com，如：

​	git clone https://**gitclone.com/**github.com/gogs/gogs

​	如果需要更新，可以用git pull（需要等gitclone.com上的mirror更新）。需要提交代码时，因为gitclone.com暂不支持提交，可将.git/config中的remote "origin"项目改成原始的github.com URL即可

## 方法2：修改git配置

​	git config --global url."https://gitclone.com/".insteadOf https://

​	然后正常clone即可

​	这个命令会修改**c:\users\用户名\.gitconfig**，如需提交代码，将这个文件中url配置还原

## 方法3：镜像

​	使用https://gitclone.com/gogs/ 提供了代码库镜像功能。