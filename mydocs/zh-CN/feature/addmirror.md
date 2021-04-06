---
name: 添加镜像
---

# 嵌入镜像入口
快速在`Gitclone`中添加项目镜像有两种方法：

+ 第一种就是使用`git clone`命令
+ 第二种就是在`gitclone.com`首页的输入框中输入项目在`github`的地址（例如：`https://github.com/flutter/flutter`），然后点击添加镜像按钮，即可完成操作。

第二种方法需要用户提前做两步简单的工作；

## 添加代码
第一步：在项目的`README.md`当中添加下面代码
```shell
## 快速克隆

<a href='https://gitclone.com'><img src='https://gitclone.com/img/title.ico' style='width:300px;'/></a>
```

## 提交线上
第二步：将修改后的`README.md`提交到线上。

`Gitclone`会自动检测项目在`github`线上的`README.md`文件内容是否包含我们要求的代码，检测成功，即可使用上述第二种方法实现快速在`Gitclone`中添加自己项目的镜像。