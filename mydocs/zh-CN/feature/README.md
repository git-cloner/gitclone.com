---
name: 功能特性
---

# Gitclone.com 为开发者服务

​从github上clone代码库是一件耗时的事，对于稍微大一点的代码库，clone速度平均只有20k ~ 40k/s，有时甚至会下降到个位数，clone时会反复超时，虽然网上有一些介绍改hosts之类的提速方法，但当试过以后会发现收效甚微，要想提高clone速度，可行的方法主要还是缓存机制。

**加速git clone极其简单**

​https://gitclone.com 的建立，正是解决上述问题的一个途径，通过开发者的clone动作，建立起github的分布式缓存，并提供对github的镜像功能，为程序员服务。不需要繁琐的fork或导入工作，只需要将clone命令改几个字（`gitclone.com/`是增加的），就可以达到1.27M/s的clone速度：

```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

​对比 `git clone https://github.com/gogs/gogs.git` 的20k/s速度，几乎差两个数量级。

**使用者越多，clone越快**

​gitclone.com 已对 github.com 上star >10000的代码库进行了缓存，并已开始对star > 3000代码库的缓存，对于未缓存过的代码库，开发者只要通过 gitclone.com 进行clone，就会建立起永久的缓存，以后其他开发者clone时，就会利用上缓存。开发者使用越多，缓存命中率越大，越clone越快。

**多种方式支持加速**

​	除了修改url提速外，还有以下利用 gitclone.com 缓存的方法：

1、修改git配置

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

​然后正常执行clone命令即可，如`git clone https://github.com/gogs/gogs.git` 。优点是设置一次，以后正常clone，缺点是全局参数，影响到所有git命令，如要`git push`时要把参数还原。

2、使用cgit客户端

```shell
cgit clone https://github.com/gogs/gogs
```

​将git命令换成cgit，多一个字母，使用最简单。

**托管代码库，支持从github镜像**

​使用 gitclone.com 的托管代码库镜像，gitclone.com 部署了一套gogs开源代码托管系统，开发者注册登录后就可使用 https://gitclone.com/gogs/ 从github镜像代码库，优点是可以像在github上一样在线浏览代码（但速度更快）。

**提速常用开发者网站**

gitclone.com 还收集了一些 stackoverflow.com 和go get的提速方法，更好地为开发者服务。

**分布式广泛参与的机制**

​github代码库缓存需要大量的存储资源，依靠单个计算节点难以满足存储的需求，所以 gitclone.com 已建立起4个初始验证节点的分布式系统，也提供了开发者将自己的机器加入缓存资源的机制。随着gitclone开源生态的逐步完善，期待您建立 gitclone.com 的第五个缓存节点！

**请您加star**

​gitclone.com 的开发者已将分布式缓存所用到的[gitcache](https://github.com/git-cloner/gitcache)和[codechain](https://github.com/little51/codechain)开源，期待您给这两个开源项目加star。