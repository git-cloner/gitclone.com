---
name: 常见问题
---

# FAQ

##### Q: 首次clone比较慢

A：首次clone，因为未建立起缓存，所以clone请求会被重定向到github.com，与直接从github.com clone的速度相当，在这个过程中，mirror被同步建立。如果项目较大耗时太长，可中断clone过程，删除本地已clone的文件夹。因为mirror是按depth=1的方式建立的，在短时间即可提供服务，所以过一会再试。

##### Q:当代码库较大时，clone过程中断，再clone时报错

A：客户端中断后，gitclone.com未中断，还在继续mirror，所以再clone时，由于在mirror进程中，不能给客户端返回数据，会提示：remote: git cache is updating... ...,please wait，请过一会再试。

##### Q:当git push时，报fatal: Authentication failed for ...

A：gitclone.com不支持push，所以请将c:\users\用户名\\.gitconfig（linux在~/.gitconfig文件中）的url配置还原

##### Q:git clone --depth=1同样可以提速，gitclone.com适合什么场景

A: gitclone.com建立永久mirror，适合项目被多次多人clone的场景，比如go get、团队clone同一项目，达到一次clone，永久提速的效果。

##### Q：首次clone正常，第二次clone报fatal: protocol error: expected sha/ref, got 'shallow... ...

A:git客户端版本低于2.0，如果之前无镜像，首次clone会重定向到github.com不影响，但有镜像后（git2.X建立），再用git1.x从镜像clone会报协议错，升级git客户端即可。