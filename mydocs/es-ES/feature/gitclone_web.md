---
nombre: Acelerar el acceso y descarga de github
---

# Gitclone.com para desarrolladores

​Clone base de código de github es un proceso que lleva mucho tiempo. Para una base de código ligeramente más grande, la velocidad de clone es de solo 20k ~ 40k/s en promedio, y a veces incluso cae a un solo dígito. Clone se agota repetidamente. La mejor manera de aumentar la velocidad de clone es principalmente mediante mecanismos de caché.

**Acelerar git clone es extremadamente simple**

​El establecimiento de [https://gitclone.com](https://gitclone.com), es precisamente una manera de resolver el problema anterior. A través de la acción clone del desarrollador, se establece un caché distribuido de github y se proporciona una función de espejo de github para servir a los programadores. Sin el tedioso trabajo de fork o importación, basta con cambiar el comando clone por unas pocas palabras (' gitclone.com/ 'es un incremento) para lograr una velocidad de clone de 1,27 M/s:

```shell
git clone https://gitclone.com/github.com/gogs/gogs.git
```

​Contraste ` git clone https://github.com/gogs/gogs.git ` 20k/s, velocidad de casi dos órdenes de magnitud.

**Más usuarios, más rápido clone**

​Gitclone.com ha almacenado en caché las bases de código en github.com con star >10000 y ha comenzado a almacenar en caché las bases de código star > 3000. Para las bases de código que no han sido almacenadas en caché, los desarrolladores simplemente clone a través de gitclone.com, Se establecerá un caché permanente, que más tarde se aprovechará de la caché superior cuando otros desarrolladores clone. Cuanto más usan los desarrolladores, mayor es la tasa de acierto de la caché y más rápido es el clone.

**Múltiples maneras de apoyar la aceleración**

​	Además de modificar la velocidad de url, hay las siguientes formas de aprovechar la caché de gitclone.com:

1、Modificar la configuración de git

```shell
git config --global url."https://gitclone.com/".insteadOf https://
```

​Y luego ejecutar clone orden normal, como ` git clone https://github.com/gogs/gogs.git `. La ventaja es que se establece una vez y luego se clone normalmente. La desventaja es que los parámetros globales afectan a todos los comandos git, como 'git push' para restaurar los parámetros.

2、Trabajar con un cliente cgit

```shell
cgit clone https://github.com/gogs/gogs
```

​Cambie el comando git a cgit. Una letra más. El más fácil de usar.

**Base de código alojada, soportada por mirror desde github**

Usando la imagen de la base de código gestionada de gitclone.com, gitclone.com implementó un sistema de alojamiento de código abierto gogs, Los desarrolladores registrados pueden utilizarse después de inicio [https://gitclone.com/gogs/](https://gitclone.com/gogs/) código de la imagen de github, ventajas es el código puede navegar en línea como en github pero más rápido).

**Acelerar sitios web de desarrolladores comunes**

Gitclone.com también ha recopilado algunos métodos de aceleración de stackoverflow.com y go get para servir mejor a los desarrolladores.

**Mecanismos de participación amplia y distribuida**

​La caché del repositorio de código de github requiere una gran cantidad de recursos de almacenamiento y es difícil satisfacer las necesidades de almacenamiento dependiendo de un solo nodo de computación, por lo que gitclone.com ha establecido un sistema distribuido con cuatro nodos de verificación inicial y también proporciona un mecanismo para que los desarrolladores añadan sus propias máquinas a los recursos de almacenamiento en caché. Con la mejora gradual de la ecología de código abierto gitclone, esperamos que usted establezca el quinto nodo caché de gitclone.com!

**Por favor agregue star**

gitclone.com  Caché de desarrolladores se han distribuido que involucran [gitcache](https://github.com/git-cloner/gitcache) y[codechain](https://github.com/little51/codechain) de código abierto, Espero que usted añada una estrella a estos dos proyectos de código abierto.