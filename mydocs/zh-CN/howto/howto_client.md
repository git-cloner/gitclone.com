---
name: cgit 客户端
---

# cgit 客户端加速clone

下载cgit-release.zip客户端

```shell
https://github.com/git-cloner/gitcache/releases 
```

​	将下载 的cgit.exe放到命令行可识别的文件夹下。就可以直接用cgit加速了，如：

​	

```shell
cgit clone https://github.com/gogs/gogs

cgit pull
```

​	如需提交，请将.git/config中的remote "origin"项目改成原始的github.com URL即可