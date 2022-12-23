---
名前: 加速github
---

# github clone 加速

​開発者がgitclone.com経由でclone github上のコードベースを転送すると、gitclone.comはコードベースをmirrorキャッシュします。今後開発者cloneがいる場合は、mirrorキャッシュから直接データを取得します。mirrorはgithub.comから毎晩同期されます

**！！！特に注意が必要なのは、まずgitのタイムアウトパラメータを設定し、項目が大きい場合、サーバー側のmirror時間が長すぎてgit報504(タイムアウト)を防ぐことです。**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999 
```

## 方法1:URLを変更します

元のURLにgitclone.comを埋め込みます:
```shell
git clone https://**gitclone.com/**github.com/gogs/gogs
```

​更新が必要な場合は`git pull` (gitclone.com上のmirrorの更新を待つ必要があります)。コードを提出する場合はgitclone.comはまだ提出をサポートしていませんので。git/configの`remote "origin"`の項目を元のgithub.comのURLに変更すればokです。

## 方法2:git構成を変更することです
```shell
​git config --global url."https://gitclone.com/".insteadOf https://
```

​通常のcloneでokです

​このコマンドは修正されます**c:\users\ユーザー名\\.gitconfig**, linuxのプロファイルは~/.gitconfig内にあります。コードを提出する場合、このファイルのurlプロファイルを元に戻します

## 方法3:ミラーリングです

使用 [https://gitclone.com/gogs/](https://gitclone.com/gogs/) コード・ミラーの機能を提供した。

# クライアント端末です
プログラムは以下の通りです[https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases)、ダウンロードしたcgit.exeをコマンドラインが識別できるフォルダの下に置きます。命令は次のとおりです:

```shell
cgit clone https://github.com/git-cloner/gitcache
cgit pull
```

提出する場合は。git/configの`remote "origin"`の項目を元のgithub.comのURLに変更してください。