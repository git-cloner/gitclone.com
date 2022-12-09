---
nombre: Añadir imagen
---

# Entrada de imagen incrustada
Hay dos maneras de agregar rápidamente una imagen de proyecto a `Gitclone`：

+ El primero es usar el comando `git clone`
+ El segundo ` gitclone.com ` ingresando en el recuadro de la página principal de proyectos en ` github ` de dirección (por ejemplo: ` https://github.com/flutter/flutter `), y luego haga clic en el botón añadir una imagen, para completar la operación.

El segundo método requiere que el usuario haga un trabajo simple de dos pasos por adelantado;

## Añadir el código
Paso 1: agregue el siguiente código en `README.md` de su proyecto
```shell
## Rápido para clonar

<a href='https://gitclone.com'><img src='https://gitclone.com/img/title.ico' style='width:300px;'/></a>
```

## Presentar en línea
Paso 2: commit `README.md` modificado a la línea.

`Gitclone` detectará automáticamente si el contenido del archivo `README.md` del proyecto en la línea `github` contiene el código que necesitamos. Si la detección es exitosa, puede usar el segundo método anterior para agregar rápidamente su propio proyecto a `Gitclone` mirror.