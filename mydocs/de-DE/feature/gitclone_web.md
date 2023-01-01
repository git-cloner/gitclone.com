---
name: Beschleunigen Sie den Zugriff und die Downloads von GitHub
---

# Gitclone.com Für Entwickler

​Von GitHub auf der Klon-Codebasis ist eine zeitaufwendige Sache, für eine etwas größere Codebasis ist die Klongeschwindigkeit im Durchschnitt nur 20k ~ 40k / s, manchmal sogar bis zu einstelligen Stellen, Klon wird wiederholt Timeout, obwohl es einige Online-Einführung gibt, um Hosts und andere Beschleunigungsmethoden zu ändern, aber wenn Sie es versuchen, wird es wenig Wirkung finden, um die Klongeschwindigkeit zu verbessern, ist die machbare Methode hauptsächlich der Caching-Mechanismus.

**Das Beschleunigen eines Git-Klons ist extrem einfach**

[https://gitclone.com](https://gitclone.com) Die Einrichtung von ist eine Möglichkeit, die oben genannten Probleme durch die Klonaktion des Entwicklers zu lösen, einen verteilten Cache von GitHub einzurichten und eine Spiegelfunktion von GitHub bereitzustellen, um Programmierern zu dienen. Keine mühsame Forking- oder Importarbeit erforderlich, ändern Sie einfach den Klonbefehl in ein paar Wörter (`gitclone.com/` wird hinzugefügt), um eine Klongeschwindigkeit von 1.27M / s zu erreichen:


```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

Im Vergleich zu den 20k/s Geschwindigkeit von  `git clone https://github.com/gogs/gogs.git` ist es fast zwei Größenordnungen schlechter.

**Je mehr Benutzer, desto schneller der Klon**

​gitclone.com die Star >10000-Codebasis auf der github.com zwischengespeichert hat und mit dem Zwischenspeichern der Star > 3000-Codebasis begonnen hat, müssen Entwickler für die nicht zwischengespeicherte Codebasis nur über gitclone.com klonen, richten einen permanenten Cache ein und andere Entwickler verwenden den Cache beim Klonen. Je mehr Entwickler es verwenden, desto größer ist die Cache-Trefferquote und desto schneller ist der Klon.

**Beschleunigung wird auf vielfältige Weise unterstützt**

​	Neben dem Ändern von URLs zur Beschleunigung gibt es auch die folgenden Möglichkeiten, gitclone.com Cache zu nutzen:

1、Ändern der Git-Konfiguration

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

Führen Sie dann die Klonbefehle normal aus, z. B. `git clone https://github.com/gogs/gogs.git`. Der Vorteil ist, dass es einmal gesetzt wird und in Zukunft normal geklont wird, aber der Nachteil ist, dass die globalen Parameter alle git-Befehle beeinflussen, z. B. die Wiederherstellung der Parameter, wenn Sie `git push`möchten.

2、Verwenden eines cgit-Clients

```shell
cgit clone https://github.com/gogs/gogs
```

​Ersetzen Sie den Befehl git durch cgit, einen weiteren Buchstaben, der am einfachsten zu bedienen ist.

**Gehostete Codebasis, unterstützt Bilder von GitHub**

Mit dem verwalteten Codebasis-Image von gitclone.com gitclone.com einem Gogs-Open-Source-Code-Hosting-System können Entwickler  [https://gitclone.com/gogs/](https://gitclone.com/gogs/)verwenden, um die Codebasis von GitHub nach der Registrierung und Anmeldung abzubilden, was den Vorteil hat, den Code online (aber schneller) durchsuchen zu können, als wären sie auf GitHub.

**Beschleunigen Sie beliebte Entwickler-Websites**

gitclone.com sammelt auch einige stackoverflow.com und holt sich Beschleunigungsmethoden, um Entwicklern besser zu dienen.

**Verteilter Mechanismus der breiten Beteiligung**

​GitHub-Codebasis-Caching erfordert viele Speicherressourcen, und es ist schwierig, die Speicheranforderungen zu erfüllen, indem man sich auf einen einzigen Rechenknoten verlässt, so dass gitclone.com ein verteiltes System von 4 anfänglichen Verifizierungsknoten eingerichtet hat und auch einen Mechanismus für Entwickler bietet, um ihre eigenen Maschinen hinzuzufügen, um Ressourcen zwischenzuspeichern. Mit der schrittweisen Verbesserung des gitclone Open-Source-Ökosystems freuen wir uns darauf, dass Sie den fünften Cache-Knoten der gitclone.com einrichten!

**Bitte hinzufügen star**

gitclone.com Entwickler haben [gitcache](https://github.com/git-cloner/gitcache) und [codechain](https://github.com/little51/codechain) für verteiltes Caching als Open Source bereitgestellt und freuen sich darauf, diesen beiden Open-Source-Projekten einen Stern hinzuzufügen.