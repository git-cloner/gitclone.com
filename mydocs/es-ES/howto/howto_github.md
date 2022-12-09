---
nombre: Acelerar github
---

# github clone apurarse

​Cuando el desarrollador transfiere el repositorio en clonar github a través de gitclone.com, gitclone.com reflejará el repositorio. En el futuro, si hay un clon de desarrollador, los datos se obtendrán directamente de la caché reflejada. github.com sincronización.

**! ! ! Es particularmente importante tener en cuenta que el parámetro git timeout debe establecerse primero para evitar que git informe un 504 (tiempo de espera) en el lado del servidor cuando el reflejo en el lado del servidor es demasiado largo**

```shell
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999 
```

## Método 1: Modificar la dirección URL

Inserte gitclone.com en la URL original, como:
```shell
git clone https://**gitclone.com/**github.com/gogs/gogs
```

​Si necesita actualizar, puede usar git pull (debe esperar la actualización del espejo en gitclone.com). Cuando necesite enviar el código, porque gitclone.com no admite el envío en este momento, puede cambiar el proyecto de "origen" remoto en .git / config a la URL de github.com original.

## Método 2: Modificar la configuración de git
```shell
​git config --global url."https://gitclone.com/".insteadOf https://
```

​Entonces clone normal puede

​Este comando modifica c:\users\ username \.gitconfig. El archivo de configuración para linux está dentro de ~/.gitconfig. Si desea enviar el código, restore la configuración de url en este archivo

## Método 3: Creación de reflejo

El uso de[https://gitclone.com/gogs/](https://gitclone.com/gogs/) proporciona duplicación de base de código.



# clon de cliente
El programa se publicó en: [https://github.com/git-cloner/gitcache/releases](https://github.com/git-cloner/gitcache/releases)，Coloque el cgit.exe descargado en una carpeta reconocible en la línea de comandos. Los comandos son:

```shell
cgit clone https://github.com/git-cloner/gitcache
cgit pull
```

Para commit, cambie el proyecto `remote "origin"` en.git/config a la URL original de github.com