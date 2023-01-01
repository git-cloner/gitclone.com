---
name: Kurze Einführung
---

# Gitclone.com

gitclone.com ist eine Website zur github.com Cachebeschleunigung, die Git-Klonoperationen von GitHub beschleunigt, indem die Codebasis von GitHub, auf die häufig zugegriffen wird, zwischengespeichert wird. Wenn Sie die Kloncodebasis `git clone https://gitclone.com/github.com/yourrepository` verwenden, erstellen gitclone.com einen Spiegel, und wenn es in Zukunft einen Entwicklerklon gibt, können Sie den Spiegelcache verwenden, so dass die Klongeschwindigkeit stark verbessert wird, im Allgemeinen von github auf git Clone kann nur eine Geschwindigkeit von 20k / s erreichen, und nach gitclone.com Beschleunigung kann es 1.2M / s erreichen.

Der Arbeitsmechanismus von gitclone besteht darin, dass der Entwickler, wenn er das Klonprojekt zum ersten Mal über die gitclone.com, gitclone.com asynchrones Spiegelprojekt weiterleitet, und wenn es in Zukunft ein Entwickler-Klonprojekt gibt, das lokale Image des gitclone.com anstelle des Klons aus dem github.com verwendet. gitclone.com synchronisiert sich jede Nacht mit github.com. Um den wachsenden Bedarf an Festplattenressourcen für die Spiegelung zu decken, wird gitclone.com Blockchain-Cluster-Erweiterung an alle Server im Cluster gesendet, und jeder Server kann wählen, ein Image zu generieren und es als Antwort auf nachfolgende Klonanfragen zu registrieren. Gleichzeitig erklärte gitclone.com auch den beschleunigten Zugriff von stackoverflow.com und Go Get, um "Entwicklern zu dienen".