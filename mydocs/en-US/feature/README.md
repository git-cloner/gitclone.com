---
name: feature
---

# Gitclone.com For developers

​	The clone repository from github is a hard task because low internet speed. For slightly larger repository, the average clone speed is only 20k ~ 40k / s, and sometimes it even drops to single digits. The clone will time out repeatedly, although there are online Some introductions change the speed-up methods such as modify hosts file, but when you try it, you will find that the effect is very small. If you want to increase the clone speed, the feasible method is mainly the cache mechanism.

**Speeding up git clone is extremely simple**

​	The establishment of [https://gitclone.com](https://gitclone.com) is just one way to solve the above problems. Through the clone action of the developer, the distributed cache of github is established, and the mirror function of github is provided to serve programmers. No need for tedious fork or import work, just change the clone command a few words (`gitclone.com/` is added), you can reach the clone speed of 1.27M / s:

```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

​Compared with the 20k / s speed of `git clone https://github.com/gogs/gogs.git`, it is almost two orders of magnitude worse.

**The more users, the faster the clone**

gitclone.com has cached the repository with star> 10000 on github.com, and has started to cache the star> 3000 repository. For the uncached repository, developers only need to clone through gitclone.com A permanent cache will be established, and other developers will use the cache when cloning. The more developers use it, the greater the cache hit rate and the faster the clone.

**Multiple ways to support acceleration**

​	In addition to modifying the url to speed up, there are the following methods of using gitclone.com cache:

1. Modify the git configuration

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

​	Then just execute the clone command normally, such as `git clone https://github.com/gogs/gogs.git`. The advantage is to set it once, and then clone normally. The disadvantage is that the global parameters affect all git commands. If you want to `git push`, you need to restore the parameters.

2. Use the cgit client

```shell
cgit clone https://github.com/gogs/gogs
```

​	Replace the git command with cgit, one more letter, the easiest to use.

**Managed repository, support mirroring from github**

​	Use gitclone.com's managed repository image. Gitclone.com deploys a set of gogs open source code hosting system. Developers can use [https://gitclone.com/gogs/](https://gitclone.com/gogs/) to mirror the repository from github after registering and logging in. The advantage is that it can be Browse the code online as on github (but faster).

**Speed up common developer websites**

gitclone.com also collected some stackoverflow.com and go get speedup for developers.

**Distributed broad participation mechanism**

​ The github repository cache requires a lot of storage resources, and it is difficult to meet the storage needs of a single computing node, so gitclone.com has established a distributed system of 4 initial verification nodes, and also provides developers to add their own machines to cache resources.  With the gradual improvement of gitclone's open source ecosystem,We look forward to your establishment of the fifth cache node of gitclone.com!

**Please add star**

​	The developers of gitclone.com have open-sourced the [gitcache](https://github.com/git-cloner/gitcache) and [codechain](https://github.com/little51/codechain) used by the distributed cache.Please add star,thank you!