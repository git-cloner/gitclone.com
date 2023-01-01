---
name: Häufig gestellte Fragen
---

# FAQ

##### Q: Der erste Klon ist langsamer

A：Da beim ersten Klon kein Cache eingerichtet ist, werden Klonanfragen an die github.com umgeleitet, vergleichbar mit der Geschwindigkeit des direkt github.com Klons, bei dem der Spiegel synchron aufgebaut wird. Wenn das Projekt groß ist und zu lange dauert, können Sie den Klonvorgang unterbrechen und den lokalen Klonordner löschen. Da der Spiegel in der Art von Tiefe=1 gebaut ist, kann er in kurzer Zeit bereitgestellt werden, also versuchen Sie es später erneut.

##### Q:Wenn die Codebasis groß ist, wird der Klonvorgang unterbrochen und ein Fehler gemeldet, wenn der Klon wiederholt wird

A：Nachdem der Client unterbrochen wurde, wird gitclone.com nicht unterbrochen und fährt mit der Spiegelung fort, so dass beim Klonen, da der Client im Spiegelungsprozess keine Daten zurückgeben kann, Folgendes angezeigt wird: `remote: git cache is updating... ..,please wait`, bitte versuchen Sie es später erneut.

##### Q:Wenn Gitpush, melden Sie sich bei Fatar: Otentika Shenfeldfo...

A：gitclone.com Push nicht unterstützt, stellen Sie daher die URL-Konfiguration von c:\users\username\.gitconfig (Linux in der ~/.gitconfig-Datei) wieder her.

##### Q:git clone --depth=1 kann auch beschleunigen, gitclone.com für welches Szenario geeignet

A: gitclone.com Erstellen Sie einen permanenten Spiegel, der für Szenarien geeignet ist, in denen das Projekt von mehreren Personen geklont wird, z. B. Go Get, Team-Klon im selben Projekt, um den Effekt des einmaligen Klonens zu erzielen und dauerhaft zu beschleunigen.

##### Q：Der erste Klon ist normal, der zweite Klon meldet fatal: protocol error: expected sha/ref, got 'shallow...

A:Die Version des Git-Clients ist niedriger als 2.0, wenn es vorher kein Image gibt, wird der erste Klon zu github.com hat keinen Einfluss darauf, aber nachdem es ein Image gibt (git2.X ist eingerichtet), dann wird die Verwendung von git1.x vom Image-Klon einen Protokollfehler melden, aktualisieren Sie den Git-Client.

##### Q：Private Bibliotheken können nicht über gitclone.com geklont werden

A:Das Klonen einer privaten Datenbank erfordert eine Authentifizierung, gitclone.com diese Funktion nicht bereitgestellt wird, um die Sicherheit der Benutzerdaten zu gewährleisten. Wenn eine zuvor zwischengespeicherte öffentliche Bibliothek in eine private Bibliothek geändert wird, entfernt gitclone.com die Bibliothek während der täglichen Synchronisierung aus dem Cache.