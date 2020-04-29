---
name: 简介
---

# Gitclone.com

​	gitclone.com是github.com代码库的缓存站点，如果您采用git clone https://gitclone.com/github.com/yourrepository 的方式clone代码库时，gitclone.com会建立一个mirror，以后别的开发者clone时，就能利用上mirror缓存，使得clone速度得到很大的提升。

​	在首次clone建立mirror时，gitclone.com采用了浅度clone的方法（--depth=1）,只取最新的代码，这样对于浏览代码、修改代码或用go git等不需要关心历史记录的场景，是完全满足的，后续的全量历史gitclone.com将在每晚从github.com更新，所以第二天后，您也可以用git pull或git fetch --all从gitclone.com取到全量历史。

​	如果clone代码库用于提交，则可通过修改git的配置文件重新指回github.com即可。