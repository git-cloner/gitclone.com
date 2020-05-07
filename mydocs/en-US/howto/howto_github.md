---
name: Speed ​​up github
---

# github clone acceleration

When the developer transfers the code base on clone github via gitclone.com, gitclone.com will mirror the code base. In the future, if there is a developer clone, the data will be directly obtained from the mirror cache. github.com synchronization.

**! ! ! It is particularly important to note that the git timeout parameter must be set first to prevent git from reporting a 504 (timeout) on the server side when the mirror on the server side is too long**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```



## Method 1: Modify the URL

Embed gitclone.com in the original URL, such as:

Git clone https: //**gitclone.com/**github.com/gogs/gogs

If you need to update, you can use git pull (you need to wait for the mirror update on gitclone.com). When you need to submit the code, because gitclone.com does not support submission at this time, you can change the remote "origin" project in .git / config to the original github.com URL.

## Method 2: Modify git configuration

Git config --global url. "Https://gitclone.com/" .insteadOf https: //

Then normal clone is enough

This command will modify **c: \ users \ user name \\. Gitconfig**, the configuration file of linux is in ~ / .gitconfig.

## Method 3: Mirroring

Use https://gitclone.com/gogs/ to provide the code base mirroring function.