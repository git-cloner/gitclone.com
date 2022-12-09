---
nombre: FAQ
---

# FAQ

##### Q: El primer clon es lento

A： Por primera vez clon, debido a que la caché no está establecida, la solicitud de clonación se redirigirá a github.com, lo que equivale a la velocidad de clonación directamente desde github.com. En este proceso, el espejo se establece sincrónicamente. Si el proyecto es demasiado grande y tarda demasiado, puede interrumpir el proceso de clonación y eliminar la carpeta clonada local. Debido a que el espejo está construido con profundidad = 1, puede proporcionar servicios en poco tiempo, así que inténtelo de nuevo más tarde.


##### Q: Cuando el repositorio es grande, el proceso de clonación se interrumpe y, a continuación, se informa de un error al clonar

A： Después de interrumpir el cliente, gitclone.com no se interrumpe y el espejo continúa. Por lo tanto, cuando vuelva a clonar, debido a que no puede devolver datos al cliente en el proceso de réplica, se le pedirá: remoto: git cache se está actualizando ... ., espere, inténtelo de nuevo más tarde.

##### Q: Cuando git push, informe fatal: Error de autenticación para ...

A： gitclone.com no soporta push. Por favor, restaure la configuración de url para c: \ users \ username \. Gitconfig (archivo ~ /.gitconfig en linux)

##### Q: git clone --depth = 1 también puede acelerarse, ?qué escena es adecuada para gitclone.com

A: gitclone.com establece un espejo permanente, que es adecuado para el escenario en el que el proyecto es clonado por varias personas muchas veces, como go get y team clone en el mismo proyecto, para lograr el efecto de clonar una vez y acelerar permanentemente.

##### Q: El primer clon está bien, el segundo clon reportado fatal: error de protocolo: esperado Sha / ref, se puso 'superficial ... ...

A: git versión del cliente es inferior A 2.0, si no hay espejo antes, la primera vez que clone será redirigido A github.com no afecta, pero después de que hay un espejo (git2.x establecido), y luego con git1.x desde el espejo clone se?alará un error de protocolo, actualizar git cliente puede ser.

##### Q: El repositorio privado no se puede clonar a través de gitclone.com

A: El clon de un repositorio privado debe ser autenticado. Con el fin de garantizar la seguridad de los datos de los usuarios, gitclone.com no proporciona esta función. Si un repositorio público que se almacenaba previamente en caché se cambia a un repositorio privado, gitclone.com eliminará este repositorio de la memoria caché durante la sincronización diaria.