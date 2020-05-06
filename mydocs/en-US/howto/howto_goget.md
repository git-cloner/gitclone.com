---
name: Speed ​​up go get
---

# go get speed up

When go get code, it uses the same method as git clone, so you can use the following methods:

git config --global url. "https://gitclone.com/" .insteadOf https: // <br>
export GOPROXY=https://goproxy.io

Then go get normal

This command will modify **c: \ users \ username \\. Gitconfig**, linux is in the ~ / .gitconfig file, if you need to submit the code, restore the url configuration in this file
