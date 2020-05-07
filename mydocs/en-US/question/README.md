
---
name: FAQ
---

# FAQ

##### Q: The first clone is slow

A: For the first time clone, because the cache is not established, the clone request will be redirected to github.com, which is equivalent to the speed of clone directly from github.com. In this process, the mirror is established synchronously. If the project is too large and takes too long, you can interrupt the clone process and delete the local cloned folder. Because the mirror is built with depth = 1, it can provide services in a short time, so try again later.

##### Q: When the code base is large, the clone process is interrupted, and then an error is reported when clone

A: After the client is interrupted, gitclone.com is not interrupted, and the mirror continues. Therefore, when you clone again, because you cannot return data to the client in the mirror process, you will be prompted: remote: git cache is updating ... ., please wait, please try again later.

##### Q: When git push, report fatal: Authentication failed for ...

A: gitclone.com does not support push, so please restore the url configuration of c: \ users \ username \\. Gitconfig (linux in ~ / .gitconfig file)

##### Q: git clone --depth = 1 can also speed up, what scene is suitable for gitclone.com

A: gitclone.com establishes a permanent mirror, which is suitable for the scenario where the project is cloned by multiple people for many times, such as go get and team clone in the same project, to achieve the effect of clone once and permanently speed up.