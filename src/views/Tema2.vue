<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Automatización de tareas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Según la RAE la automatización significa:
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Convertir ciertos movimientos en movimientos automáticos o indeliberados o aplicar la automática a un proceso o a un dispositivo; cuando se implementa la automatización en las bases de datos se habla de una serie de instrucciones o códigos que posibilitan la creación de tareas programadas desde el gestor sin que sea operado por el administrador de la base de datos o usuarios que participan dentro de ella. Es decir, cuando se hacen procesos que son repetitivos diariamente en una base de datos o en determinada hora en vez de realizar este proceso manualmente se puede crear una automatización con una serie de pasos para que el sistema genere dicha tarea, así el tiempo de atención en tareas será mínimo porque se tendrán los resultados arrojados por el sistema.
            br
            br
            p.text-der.mb-0 La RAE
            i.fas.fa-quote-right
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.png', alt='Automatización')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #FFF4DA")
          p.mb-0 Hoy en día todos los sistemas gestores de bases de datos, comerciales y libres cuentan con herramientas para la automatización de la información. Existen en cada sistema gestor de base de datos herramientas avanzadas como en el caso de #[em MySQL Enterprise monitor] que facilitan la automatización y control de los servidores sin necesidad de recurrir a la programación en consola. Sin embargo, es primordial conocer las herramientas y sintaxis básicas para la creación de tareas automatizadas. A continuación, se explican las acciones del sistema para realizar tareas automáticas que ayuden con la gestión de información dispuesta en la base de datos.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Herramientas para automatizar tareas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-izquierda
          .bloque-texto-a.bloque-texto-1.p-4(data-aos="zoom-in")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-7.order-lg-first.order-sm-last
                .contenedor-dashed.p-3
                  .bloque-texto-a__texto.p-4
                    p Las herramientas son componentes que permiten realizar una tarea específica en los sistemas gestores de base de datos como #[em MySQL] o #[em MongoDB], que se caracterizan por la rapidez en el procesamiento de la información, por esto son utilizadas por empresas como Facebook, Google, Wikipedia, Twitter, YouTube, entre otras. A continuación, se presentan las herramientas más utilizadas por estos gestores que cumplen con los objetivos de la información: guardar, organizar, proteger y gestionar.
              .col-lg-5.mb-4.mb-lg-0.p-4
                figure
                  img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Herramientas para automatización')

    p.mb-5 El siguiente esquema muestra las herramientas SQL y NoSQL, para la gestión de la información y sus especificaciones:
    .row.justify-content-center.mb-5
      .col-lg-12.col-sm-8(data-aos="fade-right")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Herramientas SQL')
          .tarjeta.color-acento-contenido.p-3(x="24%" y="82%" numero="")
            p.text-center Con esta herramienta podemos realizar modelado de datos, está dada para el desarrollo #[em SQL],diseño, gestión, administración y mantenimiento de bases de datos. Creada por la empresa Oracle se puede instalar en Windows, Linux y Mac OS.
          .tarjeta.color-acento-contenido.p-3(x="40%" y="82%" numero="")
            p.text-center Herramienta gráfica realizada por la empresa PremiumSoft CyberTech Ltd. Contiene una interfaz gráfica intuitiva, con esta se pueden realizar desarrollo, mantenimiento y gestión de bases de datos. Soportada para #[em MySQL]. Se puede instalar en Windows, Linux y Mac OS.
          .tarjeta.color-acento-contenido.p-3(x="57%" y="82%" numero="")
            p.text-center Herramienta de uso libre que tiene la posibilidad de conectarse al servidor MySQL, Microsoft SQL Server y PostgreSQL y soporta sistemas operativos Windows; permite ver y editar datos, puede exportar estructuras y datos, además de editar #[em triggers], vistas, procedimientos y tablas, entre otras funciones importantes para la gestión de los datos. Ansgar Becker es reconocido como su creador.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="82%" numero="")
            p.text-center Herramienta utilizada para operaciones de datos, ejecutar consultas y #[em scripts] SQL; por otra parte, hace fácil la copia de seguridad, la exportación y la importación de datos. Solo puede ser instalada en sistemas operativos Windows.
          .tarjeta.color-acento-contenido.p-3(x="88%" y="82%" numero="")
            p.text-center Considerada como unas de las más robustas herramientas para la administración de datos. Solo compatible con Windows, fue fabricada por DB Tools Software; permite la administración de bases de datos, tablas (incluyendo indexadas, #[em triggers]), dominios, entre otras funciones.

    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-8(data-aos="fade-left")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Herramientas NoSQL')
          .tarjeta.color-acento-contenido.p-3(x="29%" y="82%" numero="")
            p.text-center Herramienta escrita en código #[em php] para la administración y #[em MongoDB], útil para administrar diferentes servicios como colecciones, documentos, índice, entre otros.
          .tarjeta.color-acento-contenido.p-3(x="48%" y="82%" numero="")
            p.text-center Herramienta para #[em MongoDB], que permite la administración de conexiones en diferentes servidores, muestra el árbol jerárquico, contenido de bases de datos, colecciones e índices, adicionalmente la administración de usuarios, inclusive la edición y cambio de contraseña.
          .tarjeta.color-acento-contenido.p-3(x="67%" y="82%" numero="")
            p.text-center Herramienta gráfica creada para administrar base de datos #[em MongoDB] en código #[em php], realiza tareas como exportar colecciones completas, exportar consultas realizadas por el administrador; también registros nuevos, actualiza registros existentes, crea índices, llaves múltiples y más operaciones que hacen de esta herramienta una de las más completas que existen para bases de datos #[em NoSQL].
          .tarjeta.color-acento-contenido.p-3(x="86%" y="82%" numero="")
            p.text-center Herramientas con tareas de registro de clústeres de #[em MongoDB] mediante una consola de administración basada en web. La consola permite obtener una visión general de su entorno #[em Mongo] y un desglose para ver diversa información sobre sus bases de datos en la web, esta herramienta es portable en el sentido que se puede ingresar desde la web a la consola de base de datos #[em MongoDB].

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Procedimientos y funciones de almacenados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-5.png', alt='Persona usando tablet')
      .col-lg-8(data-aos="fade-left")
        p El proceso de almacenados y funciones son tareas que permiten realizar la creación de consultas, inserción de datos, eliminar los mismos y crear cálculos, entre otros procedimientos que se dan a partir de la versión de #[em MySQL 5.0]
        p Además, son un conjunto de comandos #[em SQL] que pueden almacenarse en el servidor. Una vez que se realiza el almacenamiento, los usuarios no necesitan repetir los comandos, simplemente se dirigen al proceso de almacenados.
        p Los procesos de almacenados son útiles cuando:
        ol.my-4
          li.mb-3
            i.fas.fa-square.cac.me-3
            span Hay muchas aplicaciones, clientes registrando en distintos lenguajes u operando en distintas plataformas y se necesita registrar la misma operación en la base de datos.
          li.mb-3
            i.fas.fa-square.cac.me-3
            span Las entidades que son susceptibles de ataques como bancos, por ejemplo, usan estos procedimientos para las operaciones regulares, generando un entorno seguro, cuando el usuario ingresa en las diferentes plataformas solo tiene derecho de acceso a las tablas de la base de datos.
        p Estos procedimientos de almacenados mejoran el rendimiento porque utilizan exactamente el recurso que necesita la operación requerida por el servidor.
        p Así mismo, crean bibliotecas o funciones en el servidor de base de datos, condición que es compartida por los lenguajes de programación actuales, con el uso de clases.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #FFF4DA")
          p.mb-0 Los procedimientos almacenados necesitan tener una tabla denominada #[b proc] en la base de datos, la cual se debe crear cuando se hace la instalación de #[em MySQL]. Si se está actualizando a MySQL 5.0 desde una versión anterior, se debe tener en cuenta que se debe actualizar las tablas de permisos para permitir que la tabla #[b proc] exista.

    p.mb-5(data-aos="fade-left") Desde la versión #[em MySQL 5.0.3] el sistema de permisos ha cambiado, para realizar los procedimientos almacenados se deben activar los siguientes permisos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-6.svg', alt='Uno')
          .tarjeta--boton.color-secundario.p-4
            .text-center.mt-5
              p.text-center #[br] #[b #[em CREATE ROUTINE]] crear procedimientos almacenados.
      .col-lg-4.mb-sm-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-7.svg', alt='Dos')
          .tarjeta--boton.color-secundario.p-4
            .text-center.mt-5
              p.text-center #[br] #[b #[em ALTER ROUTINE]] se realiza para cambiar o borrar procedimientos almacenados.
      .col-lg-4.mb-sm-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-8.svg', alt='Tres')
          .tarjeta--boton.color-secundario.p-4
            .text-center.mt-5
              p.text-center #[br] #[b #[em EXECUTE]] para ejecutar procedimientos almacenados. Este procedimiento se genera cuando creamos una rutina para el mismo caso #[b #[em SQL SECURITY y DEFINER]], permite a los usuarios con acceso a la base de datos registrar la rutina asociada.

    p.mb-5(data-aos="fade-right") A continuación, se presentan los usos de las sintaxis de procedimientos almacenados, según la opción que se vaya a realizar:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="<em>CREATE PROCEDURE Y CREATE FUNCTION</em>")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sintaxis que se realiza para crear una rutina almacenada. Es decir, el servidor conoce la rutina generada. La rutina almacenada está asociada con la base de datos que se escogió. Para asociar la rutina explícitamente con una base de datos determinada, se indica el nombre #[b db_name.sp_name] que se definió cuando se creó.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img2-9.png', alt='Precedimiento Create')
      .py-4.py-md-5(titulo="<em>ALTER PROCEDURE Y ALTER FUNCTION</em>")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sintaxis realizada para cambiar las características de un procedimiento o función, es permitida si tiene el permiso #[b #[em Alter Routine]].
          .col-md-6
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-3 ALTER {PROCEDURE | FUNCTION} sp_name [characteristic ...]
              p.mb-0 characteristic:
              p.mb-0 { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
              p.mb-0 | SQL SECURITY { DEFINER | INVOKER }
              p.mb-0 | COMMENT 'string'
      .py-4.py-md-5(titulo="<em>DROP PROCEDURE Y DROP FUNCTION</em>")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Sintaxis utilizada para borrar un procedimiento o función de almacenado.
          .col-md-6
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 DROP {PROCEDURE | FUNCTION} [IF EXISTS] sp_name
      .py-4.py-md-5(titulo="<em>SHOW CREATE PROCEDURE Y SHOW CREATE FUNCTION</em>")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Muestra el procedimiento junto con la función.
          .col-md-6
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 SHOW CREATE {PROCEDURE | FUNCTION} sp_name

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |#[i Triggers]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QFOw90c64Ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-10.svg', alt='Código')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p Los #[em triggers] o disparadores de base de datos son bloques #[em PL/SQL], programa de almacenados que se ejecutan o disparan automáticamente cuando se producen acciones como insertar, actualizar o eliminar.

        p Existen tres tipos de disparadores de bases de datos, como se muestra en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-sm-9(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          br
          em Concepto de trigger
        figure
          img(src='@/assets/curso/temas/tema2/img2-11.svg', alt='Concepto de trigger')

    .row.justify-content-center.mb-5
      .col-lg-3.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-12.svg', alt='Persona trabajando')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-primario.mb-5
          .tarjeta.color-secundario--borde.p-4(titulo="Disparadores<br> de tablas")
            p Asociados a una tabla. Se disparan cuando se registra una determinada acción o evento de manipulación que altera la tabla (inserción, borrado o modificación de filas).
          .tarjeta.color-secundario--borde.p-4(titulo="Disparadores<br> de sustitución")
            p Se disparan cuando se intenta ejecutar un comando de manipulación que afecta a la vista (inserción, borrado o modificación de filas).
          .tarjeta.color-secundario--borde.p-4(titulo="Disparadores<br> del sistema")
            p Se disparan o alertan cuando ocurre una acción del sistema o una acción de definición de datos (creación, modificación o eliminación de una tabla u otro objeto).
    p.mb-5 El siguiente esquema muestra los distintos usos que tienen los triggers:
    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-9(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          br
          em Utilización de los triggers
        figure
          img(src='@/assets/curso/temas/tema2/1.svg', alt='Uso de triggers')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Vistas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-acento-botones.p-4.p-md-5.img2-14(data-aos="flip-up")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  p Las vistas son tablas creadas de manera virtual en la base de datos que no guardan datos dentro de ellas, su función es mostrar los datos que están dentro de otras tablas; podemos decir que las vistas son como espejos que revelan lo que contiene un objeto real.
                  p.mb-0 Las ventajas de crear vistas son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-15.svg', alt='Control de acceso')
        h2.text-center Control de acceso
        p.text-center De una tabla real se puede decidir qué información compartir para un usuario específico.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-16.svg', alt='Mejorar rendimiento')
        h2.text-center Mejorar rendimiento
        p.text-center Con las consultas realizadas se pueden crear vistas, en términos de consumo del menor recurso, pues únicamente utiliza lo necesario.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-17.svg', alt='Candado')
        h2.text-center Pruebas seguras
        p.text-center Ofrecen pruebas para los desarrolladores sin que generen cambios en las tablas reales.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-18.svg', alt='Reusabilidad')
        h2.text-center Reusabilidad de consultas
        p.text-center Se pueden guardar consultas para ser utilizadas en otros momentos, si es necesario.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-19.svg', alt='Configuración')
        h2.text-center Mantenimiento de la integridad
        p.text-center Las vistas son datos extraídos de las tablas originales, si hay cambios de datos no afecta la tabla real, por ende, la integridad de los datos se mantiene.

    p.mb-5(data-aos="fade-right")  A continuación, se muestra cómo se hace para crear, ver y eliminar vistas en
      em MySQL:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2-20.svg', alt='Persona trabajando')
      .col-lg-8(data-aos="zoom-in")
         LineaTiempoD.color-secundario
          .row(numero="1" titulo="Creación o modificación de vistas con la sintaxis <em>CREATE VIEW o ALTER VIEW</em>")
            .col-lg-12
              p
                .titulo-sexto.color-acento-contenido.cfc
                  p.mb-0
                    em CREATE [OR REPLACE] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]
                  p.mb-0
                    em VIEW nombre_vista [( )]
                  p.mb-0
                    em AS sentencia_select
                  p.mb-0
                    em [WITH [CASCADED | LOCAL] CHECK OPTION]
          .row(numero="2" titulo="Eliminación de vistas con sintaxis <em>DROP VIEW</em>")
            .col-lg-12
              p
                .titulo-sexto.color-acento-contenido.cfc
                  p.mb-0
                    em DROP VIEW [IF EXISTS]
                  p.mb-0
                    em nombre_vista [, nombre_vista] ...
                  p.mb-0
                    em [RESTRICT | CASCADE]
                  p.mb-0
                    em SHOW CREATE VIEW nombre_vista
          .row(numero="3" titulo="Muestra la sentencia <em>CREATE VIEW</em> que se utilizó para crear la vista")
            .col-lg-12
              figure
                img(src='@/assets/curso/temas/tema2/img2-21.svg', alt='Código')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Eventos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-22.svg', alt='Persona trabajando')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p Los eventos son tareas que se programan en un sistema gestor de base de datos en un momento de tiempo determinado, estas permiten a los administradores programar tareas para que ejecuten acciones en ciertos periodos de tiempo, en un momento en concreto; para el caso en
          em MySQL
          |se pueden registrar a partir de la versión 5.1.
        p.mb-0 Para crear un evento se tiene primero la tabla
          em test
          |:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img2-23.svg', alt='Creación de tabla')

    p.mb-5(data-aos="fade-left")
      b Nota:
      |los eventos se ejecutan si el servidor está habilitado y se indica con la siguiente sintaxis:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img2-24.svg', alt='Servidor habilitado')

    p.mb-5(data-aos="fade-left") Para el siguiente caso se creará un evento que insertará un registro en la tabla
      em test
      |en un intervalo de 1 minuto.

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img2-25.svg', alt='Insertar registro')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Espacio de tabla
      em (tablespace)
    p.mb-5 La idea de <i>tablespace</i> se considera como un concepto lógico. Son archivos virtuales acumulados, de muchas tablas, donde se almacenan registros, sirven para trabajar sobre tablas que se necesitan para realizar una tarea específica, minimizando los recursos del servidor y permitiendo realizar tareas más rápidas por la utilización del recurso que se necesita para dicha tarea.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-sm-9(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          br
          em Concepto lógico de <i>Tablespace</i>
        figure
          img(src='@/assets/curso/temas/tema2/img2-26.svg', alt='Concepto Tablespaces')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-27.svg', alt='Persona trabajando')
      .col-lg-9(data-aos="fade-left")
        p A continuación, se muestra cómo se ejecuta la creación de un espacio de tabla:
        img.img-a.img-t(src='@/assets/curso/temas/tema2/img2-28.svg', alt='Creación de tablespace')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Tablas e índices

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-29.svg', alt='Persona trabajando')
      .col-lg-9(data-aos="fade-left")
        p Los índices son un tipo de acción que apunta a una o varias columnas almacenando información relacionada entre el contenido de la columna y el puntero de búsqueda; es decir, que el puntero se activa cuando encuentra coincidencia en la búsqueda que se da. Los índices cumplen con el objetivo de disminuir el tiempo de ejecución de una consulta en nuestra base de datos (la diferencia se nota aún más si se tienen grandes volúmenes de datos). Si no existen índices,
          em MySQL
          |busca la solicitud requerida desde la primera fila hasta la última, implicando un mayor tiempo de ejecución, mayores recursos para hacer la búsqueda de información, haciendo más demorado los tiempos de respuesta.
        p.mb-0 A continuación, podemos conocer los tipos de índices:

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 5
        br
        em Índices
      .col-lg-12.col-sm-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2-30.svg', alt='Tipos de índices')

    p.mb-5 La siguiente es la instrucción o <b>sintaxis </b>para crear índices:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-31.png', alt='Código')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Crear el índice de clave primaria al instante de crear la tabla")
            .col-lg-12
              p Para el caso se toma la opción PRIMARY KEY al terminar la definición de los campos, con la lista de los campos que serían parte del índice.
                .titulo-sexto.color-acento-contenido.cfc
                  p.mb-0
                    em CREATE TABLE nombreTabla(campo1 tipoDato,
                  p.mb-0
                    em [campo2...,] PRIMARY KEY (campo1 [,campo2...]) );
              p Se registra la palabra clave
                em NOT NULL
                |, esta es obligatoria para un campo cuando éste vaya a formar parte de una clave primaria
                em primary key
                |; como se menciona anteriormente, las claves primarias no contienen valores nulos. Si se intenta crear una clave primaria sobre un campo nulo,
                em MySQL
                |arrojará un error.
          .row(numero="2" titulo="Crear una clave primaria en una tabla existente con el uso del comando <em>ALTER TABLE</em>")
            .col-lg-12
              p
                .titulo-sexto.color-acento-contenido.cfc
                  p.mb-0
                    em ALTER TABLE nombreTabla ADD PRIMARY KEY(campo1 [,campo2...]);

    p.mb-5(data-aos="fade-right") Suponiendo que se tiene en la base de datos una tabla que fue creada sin clave primaria y con el campo id aceptando valores NULL:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.cfc
          p.mb-0
            em CREATE TABLE usuarios(id int, nombre varchar(50), apellidos varchar(70));

    p.mb-5(data-aos="fade-right") Se puede registrar una clave primaria sobre un campo id con la siguiente sentencia:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.cfc
          p.mb-0
            em ALTER TABLE usuarios MODIFY id INT NOT NULL, ADD PRIMARY KEY(id);

    p.mb-5
      b Observar el siguiente ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-32.svg', alt='Código ejemplo')

        p.mt-5(data-aos="fade-down") El campo id no tiene un valor
          em YES
          |en la columna
          em Null
          |, significa que no puede almacenar valores nulos. Registra un valor
          em PRI
          |en la columna de la llave
          em Key
          |indica que este campo es una clave primaria
          em primary key.

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
