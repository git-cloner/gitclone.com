---
name: 常见问题
---

# FAQ

##### Q: 首次clone比较慢，开始无进度显示

A：首次clone，首先从github.com  mirror ，这个过程结束后，客户端才会从mirror clone，才会有进度显示，所以有点卡顿的感觉，但以后的clone会直接出进度条

##### Q:当代码库较大时，clone过程中断，再clone时报错

A：客户端中断后，gitclone.com未中断，还在继续mirror，所以再clone时，由于在mirror进程中，不能给客户端返回数据，会提示：remote: git cache is updating... ...,please wait，请过一会再试。

##### Q:当git push时，报fatal: Authentication failed for ...

A：gitclone.com不支持push，所以请将c:\users\用户名\\.gitconfig（linux在~/.gitconfig文件中）的url配置还原