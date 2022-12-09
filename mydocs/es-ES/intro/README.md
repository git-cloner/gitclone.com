---
nombre: Introducción
---

# Gitclone.com

​gitclone.com es un sitio web de aceleración de caché github.com que acelera la operación de clonación de git desde github almacenando en caché el repositorio de github al que se accede con frecuencia. Cuando clona el repositorio utilizando  `git clone https://gitclone.com/github.com/yourrepository`, gitclone.com creará un espejo, y cuando otro desarrollador clone en el futuro, puede usar la caché de espejo para hacer el clon. La velocidad se ha mejorado mucho. Generalmente, el clon de git de github solo puede alcanzar los 20k/s. Después de acelerado por gitclone.com, puede alcanzar 1.2M / s.

​El mecanismo de trabajo de gitclone es: cuando el desarrollador reenvía por primera vez el proyecto clonado a través de gitclone.com, gitclone.com refleja el proyecto de forma asíncrona. Cuando otro desarrollador clone el proyecto en el futuro, usará el espejo local de gitclone.com en lugar de Clone from github.com. gitclone.com sincronizará con github.com todas las noches. Para resolver la creciente demanda de recursos de disco duro de espejos, gitclone.com utiliza un clúster de blockchain para expandirse. Cada operación de réplica se transmitirá a todos los servidores del clúster. Cada servidor puede elegir generar un espejo y registrarse para responder a clones posteriores. pedir. Al mismo tiempo, gitclone.com también explicó el acceso acelerado de stackoverflow.com y go get, para "para desarrolladores".