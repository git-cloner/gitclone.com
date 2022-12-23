---
名前: gitub アクセスとダウンロードを高速化します
---

# Gitclone.com 開発者にサービスを提供します

​cloneのコードベースをgithubから公開するのは時間がかかります。少し大きいコードベースではcloneの速度が平均20k ~ 40k/s、場合によっては一桁に落ちてタイムアウトを繰り返します。cloneを高速化するには、キャッシュの仕組みが有効です。

**git cloneを加速するのは極めて簡単です**

[https://gitclone.com](https://gitclone.com)の立ち上げは、その解決策の1つであり、開発者のcloneアクションによってgithubの分散キャッシュを構築し、githubをミラーリングする機能をプログラマーに提供するというものです。煩雑なforkや導入作業が不要で、cloneコマンドをいくつかの文字(`gitclone.com/`は追加されます)を変更するだけで、1.27M/sのclone速度を達成することができます:

```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

​対比`git clone https://github.com/gogs/gogs.git` k / s速度の20、ほとんど二桁の差。

**利用者が多ければcloneは速くなります**

​gitclone.comはgithub.com上のstar >10000のコードベースをキャッシュし、star > 3000のコードベースのキャッシュを開始しました。キャッシュされていないコードベースは、開発者がgitclone.comを経由してクリックすれば、永続的なキャッシュが構築され、他の開発者がcloneするときにアップキャッシュを利用します。開発者が使えば使うほどキャッシュヒット率が高くなり、cloneが速くなります。

**加速をサポートする様々な方法があります**

​	urlを変更して高速化する以外にも、gitclone.comのキャッシュを利用する方法は次の通りです：

1、gitの構成を変更します

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

​そして正常なお客様執行命令すれば、例えば`git clone https://github.com/gogs/gogs.git` 。長所は一回に設定して、後で正常cloneで、欠点はグローバルパラメータで、すべてのgit命令に影響して、もし`git push`の時パラメータを元に戻します。

2、cgitクライアントを使います

```shell
cgit clone https://github.com/gogs/gogs
```

​gitコマンドをcgitに変えて、1文字増やすのが一番簡単です。

**githubからのミラーリングをサポートするコードベースをホストします**

​gitclone.comのホストコードのミラーリングを使って、gitclone.comはgogsオープンソースのホストシステムを展開しました。开発者登録登録後から使える[https://gitclone.com/gogs/](https://gitclone.com/gogs/)  githubミラーコード庫、githubでできる長所があるように、オンライン浏览コード(が速いスピードで)。

**開発者サイトを高速化します**

gitclone.comはstackoverflow.comやgo getの高速化の方法もいくつか集めています。

**分散型参加の仕組みです**

​githubのコードベースのキャッシュには大量のストレージリソースが必要で、1つのコンピューティングノードでは対応しにくいため、gitclone.comは4つの初期検証ノードで分散システムを構築しており、開発者がキャッシュリソースに自分のマシンを組み込む仕組みも提供しています。gitcloneのオープンソースの生態の漸進的な改善に従って、あなたがgitclone.comの5番目のキャッシュのノードを確立することを期待します!

**starをお願いします**

gitclone.comの开発がddosキャッシュが使われた[gitcache](https://github.com/git-cloner/gitcache)と[codechain](https://github.com/little51/codechain)、この2つのオープンソースプロジェクトにstarを加えることを期待しています