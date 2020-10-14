---
name: Speed ​​up github
---

# github clone acceleration

When the developer transfers the repository on clone github via gitclone.com, gitclone.com will mirror the repository. In the future, if there is a developer clone, the data will be directly obtained from the mirror cache. github.com synchronization.

**! ! ! It is particularly important to note that the git timeout parameter must be set first to prevent git from reporting a 504 (timeout) on the server side when the mirror on the server side is too long**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

## Method 1: Modify the URL

Embed gitclone.com in the original URL, such as:

```shell
Git clone https: //**gitclone.com/**github.com/gogs/gogs
```

If you need to update, you can use git pull (you need to wait for the mirror update on gitclone.com). When you need to submit the code, because gitclone.com does not support submission at this time, you can change the remote "origin" project in .git / config to the original github.com URL.

## Method 2: Modify git configuration
```shell
Git config --global url. "Https://gitclone.com/" .insteadOf https: //
```

Then normal clone is enough

This command will modify **c: \ users \ user name \\. Gitconfig**, the configuration file of linux is in ~ / .gitconfig.

## Method 3: Mirroring

Use https://gitclone.com/gogs/ to provide the repository mirroring function.

# client clone

[https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases)

Place the downloaded in a folder recognized by the command line. You can use cgit directly to accelerate, such as:
```shell
Cgit clone https://github.com/gogs/gogs
Cgit pull
```
If you need to submit, please change the `remote "origin"` project in .git / config to the original github.com URL

