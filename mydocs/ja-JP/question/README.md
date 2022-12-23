---
名前: よく寄せられる質問です
---

# FAQ

##### Q: 初めての clone は遅いです

A：初めて clone はキャッシュが確立されないため、clone 要求は github.com にリダイレクトされ、github.com clone から直接行くのと同じ速度で、その過程で mirror が同期的に確立されます。 プロジェクトに時間がかかりすぎる場合は、clone プロセスを中断して、ローカルの clone フォルダを削除します。 mirrorはdepth=1のように確立され,短時間でサービスを提供できるため,しばらくしてからもう一度試してください.

##### Q:コード ベースが大きい場合、clone プロセスは中断され、clone はエラーを報告します

A：クライアントが中断された後、gitclone.com 中断されず、まだmirrorを続行しているので、再びcloneの場合、mirrorプロセスでは、クライアントにデータを返すことができないので、プロンプト:`remote: git cache is updating... ...,please wait`、もう一度試してください.

##### Q:git pushします時,報fatal: Authentication failed for…

A：gitclone.comはpushをサポートしていませんので、c:\users\ユーザー名\\.gitconfig (linuxは~/.gitconfigファイル内)のurl設定を元に戻してください.

##### Q:gitclone——depth=1でも高速化できますgitclone.comはどんな場面に適していますか

A: gitclone.comは永久mirrorを構築して、プロジェクトが何度も復数の人にcloneされるシーンに適しています。例えばgo get、チームcloneは同じプロジェクトで、一回cloneを達成して、永久にスピードアップする効果があります.

##### Q：初回clone正常,2回目clone報fatal: protocol error: expected sha/ref, got 'shallow……

A:gitクライアントのバージョンは2.0より低くて、もし前にミラーリングしないならば、初めてcloneはgithub.comにリダイレクトして影響しないで、しかしあるミラーリング後(git2.X建立)、更にgit1. Xでミラーclone会報プロトコルから間違いて、gitクライアントをアップグレードします.

##### Q：プライベートライブラリはgitclone.com経由でcloneできません

A:プライベートライブラリのcloneはid認証が必要ですが、gitclone.comではユーザーのデータセキュリティのため、この機能は提供していません。gitclone.comは,以前キャッシュを構築していたパブリック・ライブラリからプライベート・ライブラリに変更すると,毎日の同期に合わせてキャッシュからライブラリを移します.