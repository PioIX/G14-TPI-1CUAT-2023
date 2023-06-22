# Proyecto_interdisciplinario

El objetivo de este trabajo es integrar lo adquirido en este cuatrimestre desarrollando una aplicación web sencilla y completa. La idea será desarrollar por grupos de proyecto un pequeño juego con login, registro, tablas de puntajes y usuario administrador incluido.

**Tiempos**

Vamos a trabajar desde el 14/06 (depende la asignatura) hasta el receso invernal; durante este tiempo las horas de clase de las asignaturas involucradas se dedican al desarrollo y -eventualmente- a explicar y reforzar procedimientos y conceptos que sean necesarios.



**Asignaturas**

Las asignaturas involucradas serán:

Proyectos de Producción  (4 Hs)
Desarrollo de Aplicaciones Informáticas (4 Hs)
Seminario (2 Hs)
Estructura y Funcionamiento de Sistemas Informáticos (4 Hs) 



**Del desarrollo**

**Presupuesto**

A modo de "presupuesto o documento de alcance" cada grupo entregará las características de su aplicación; los docentes, de ser necesario se reunirán con los grupos para re-pensar o adaptar la propuesta. Distribuirán las tareas entre los integrantes del equipo y se organizarán los plazos.

Este documento se debe presentar antes del 21/06 (algunas de las clases junio se podrán usar para elaborar este documento). El mismo debe contar con:
Bocetos de las páginas que mantengan una estética general común para el trabajo (los mismos pueden ser realizados en Canva)
Propuesta de juego y funcionalidad del mismo
Propuesta de las tablas de la base de datos y las relaciones en ella (Se debe incluir al menos una relación entre tablas)
Listado de las distintas tareas que van a tener que desarrollar para hacer el trabajo.
División de responsabilidades entre los integrantes del grupo. Aunque a la hora de preguntarles todos los integrantes tendrán que tener conocimiento sobre la totalidad del trabajo.

Ver modelo de ejemplo: 

https://docs.google.com/document/d/1hdyaVH_oVR0_JKH1Hc3TqkSOI8T_pTiJzZ-qEbU9Sjw/edit?usp=sharing 
(editar este documento con la propuesta de cada grupo) 


**Primer Pre Entregable - Login y Registro**

Los trabajos contarán con un Login y un Registro. Los mismos deben funcionar de la siguiente manera:

Registro: Guardará los usuarios en la base de datos con por lo menos un id (puede ser el dni), nombre completo, usuario y contraseña. El mismo deberá validar que el usuario no exista ya en la base de datos al momento de registrarse (no puede haber usuarios ni dnis repetidos)
Login: Podrán ingresar únicamente los usuarios registrados en la base de datos. En caso de no estar registrados, se deberá indicarle al usuario que los datos son incorrectos y ofrecerle registrarse o reingresar.
Requisito: Por lo menos una de las 2 propuestas debe tener fetch en su resolución

**Segundo Pre Entregable - Usuario administrador**

Los trabajos contarán con una base de datos para las preguntas / palabras / acertijos o lo que cada uno necesite para su propuesta.
Para lo cual podrán cargar 1 pregunta de cada categoría de prueba al crear la base de datos.
Luego los demás datos deberán ser cargados por el usuario administrador
Funcionamiento de este usuario:
Se loguea con un usuario especial por ejemplo “admin”
Al momento de ingresar, en lugar de entrar en el juego, entrará en pestañas para editar la base de datos.
El mismo debe contar con opciones para: Agregar, Editar y Eliminar Preguntas.
También puede eliminar registros de puntajes de usuarios o usuarios enteros directamente.

**Entrega Final - Juego**

Juego / (ej. preguntados, memotest, wordle): 
El desarrollo de la temática del Juego será libre.
Las preguntas, palabras o tableros utilizados deben estar guardados en una base de datos y cargar dinámicamente en la página.
En el desarrollo del juego sí o sí deben resolver algo con DOM.
Se debe registrar el puntaje del usuario que esté jugando y al finalizar mostrar una tabla con los mejores puntajes.


**Forma de trabajo**

Durante el tiempo asignado al proyecto podrán trabajar en equipo en los lugares que se disponga, en el horario de las asignaturas mencionadas.

El grupo irá actualizando un repositorio con el producto desarrollado, al menos una vez por semana. (Idealmente, cada integrante actualiza el repositorio al final de cada tarea relevante)  

Se considera entregado el trabajo que cumpla las características acordadas con el grupo según el presupuesto presentado, con el código completo y funcionando 

Cada miembro del grupo tendrá diferentes tareas, cada una con su tiempo de finalización, cuyo progreso se debe reflejar en la actividad del repositorio según lo acordado en el presupuesto.


**Evaluación**

La evaluación tendrá en cuenta el desarrollo realizado, el cumplimiento de deadlines acordados y el trabajo en clase y grupal.

En forma individual se considerarán los aportes individuales y la defensa del trabajo en un coloquio.
