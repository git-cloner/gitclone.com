---
name: 加速go get
---

# go get 加速

go get获取代码时，使用与git clone相同的方法，所以可以用以下方法：

git config --global url."https://gitclone.com/".insteadOf https://

然后正常go get即可

这个命令会修改**c:\users\用户名\\.gitconfig**，linux在~/.gitconfig文件中，如需提交代码，将这个文件中url配置还原