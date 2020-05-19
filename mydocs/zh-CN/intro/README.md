---
name: 简介
---

# Gitclone.com

​	gitclone.com是一个github.com缓存加速网站，通过对经常访问的github的代码库的缓存，加速从github的git clone操作。当您采用git clone https://gitclone.com/github.com/yourrepository 的方式clone代码库时，gitclone.com会建立一个mirror，以后再有开发者clone时，就能利用上mirror缓存，使得clone速度得到很大的提升，一般从github上git clone只能达到20k/s的速度，经gitclone.com加速后，可以达到1.2M/s。

​	gitclone的工作机理是：当开发者第一次经gitclone.com代理clone项目时，gitclone.com异步镜像项目，以后有开发者clone该项目时，就会利用上gitclone.com的本地镜像，而不是从github.com上clone。gitclone.com会在每天夜间与github.com同步。为了解决不断增长的镜像对硬盘资源的需求，gitclone.com采用区块链集群方式扩展，每次的镜像操作都会广播到集群中所有服务器，各服务器可选择生成镜像并登记以便以响应后续的clone请求。同时，gitclone.com还对stackoverflow.com和go get等的加速访问进行了说明，做到“为开发者服务”。