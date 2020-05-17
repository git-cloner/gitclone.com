---
name: Introduction
---

# Gitclone.com

Gitclone.com is the cache site of the github.com repository. If you use the git clone https://gitclone.com/github.com/yourrepository to clone the repository, gitclone.com will create a mirror When the developer clones, he can use the mirror cache, which greatly improves the clone speed.

When miracle is first created by clone, gitclone.com uses a shallow clone method (--depth = 1), only the latest code is taken, so that for browsing code, modifying code or using go git, etc. do not need to care about history The scene is completely satisfied. The subsequent full history of gitclone.com will be updated from github.com every night, so you can also use git pull or git fetch --all to get the full history from gitclone.com the next day.

If the clone repository is used for submission, you can refer back to github.com by modifying the git configuration file.