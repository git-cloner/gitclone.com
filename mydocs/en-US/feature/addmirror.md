---
name: Add mirror
---

# Embedded mirror entry
There are two ways to quickly add project mirroring in `Gitclone`：

+ The first is to use the `git clone` command
+ The second is to enter the address of the project in `github` in the input box on the homepage of `gitclone.com` (for example: `https://github.com/flutter/flutter`), and then click the add mirror button to complete operating.

The second method requires users to do two simple steps in advance；

## Add code
First：Add the following code to the project's `README.md`
```shell
## 快速克隆

<a href='https://gitclone.com'><img src='https://gitclone.com/img/title.ico' style='width:300px;'/></a>
```

## Submit online
Second：Submit the revised `README.md` online.

`Gitclone` will automatically detect whether the content of the project's `README.md` file on the `github` line contains the code we require. If the detection is successful, you can use the second method above to quickly add your own project to `Gitclone` Mirror.