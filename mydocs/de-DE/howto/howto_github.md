---
name: Beschleunigen github
---

# github clone beschleunigen

​Wenn ein Entwickler die Codebasis auf Clone GitHub über gitclone.com übersetzt, spiegeln gitclone.com den Cache der Codebasis, und wenn es in Zukunft einen Entwicklerklon gibt, werden die Daten direkt aus dem Spiegelcache abgerufen und der Spiegel wird jede Nacht vom github.com synchronisiert.

**！！！Insbesondere ist zu beachten, dass der timeout-Parameter von git zuerst gesetzt werden muss, um zu verhindern, dass git 504 (Timeout) meldet, wenn das Projekt groß ist und die serverseitige Spiegelungszeit zu lang ist.**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999 
```

## Methode 1: Ändern der URL

Betten Sie die gitclone.com in die ursprüngliche URL ein, z. B.:
```shell
git clone https://**gitclone.com/**github.com/gogs/gogs
```

Wenn Sie aktualisieren müssen, können Sie `git pull` verwenden (müssen auf das Spiegelupdate am gitclone.com warten). Wenn Sie Code festschreiben müssen, weil gitclone.com Commit nicht unterstützt, können Sie das Projekt `remote "origin"` in .git / config in die ursprüngliche github.com-URL ändern.

## Methode 2: Ändern der Git-Konfiguration
```shell
​git config --global url."https://gitclone.com/".insteadOf https://
```

​Dann genügt das normale Klonen

Dieser Befehl ändert **c:\users\username\\.gitconfig**, die Linux-Konfigurationsdatei befindet sich in ~/.gitconfig, wenn Sie den Code festschreiben müssen, stellen Sie die URL-Konfiguration in dieser Datei wieder her.

## Methode 3: Spiegeln

Die Verwendung von [https://gitclone.com/gogs/](https://gitclone.com/gogs/) bietet Codebasisspiegelung.

# Kunde
Das Programm wird unter[https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases) veröffentlicht, und die heruntergeladene cgit.exe wird in einem Ordner abgelegt, der von der Befehlszeile erkannt wird. Der Befehl lautet wie folgt:

```shell
cgit clone https://github.com/git-cloner/gitcache
cgit pull
```

Ändern Sie zum Commit das Projekt `remote "origin"`in .git/config in die ursprüngliche github.com URL.