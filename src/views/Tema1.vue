<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Definición y conceptos de algoritmos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-1.png', alt='Escribiendo en portátil')
      .col-lg-6(data-aos="fade-left")
        p.mb-0 El sistema de privilegios en los gestores de bases de datos permite la conexión al servidor asegurando que cada usuario legalmente conectado realice las operaciones permitidas. Como usuario, cuando se conecta a un servidor, la identidad se determina mediante el equipo desde el que se conecta por medio de la IP que la identifica y el nombre de usuario registrado. Posteriormente, cuando se efectúan peticiones o solicitudes y cuando se crea un usuario, los administradores han registrado privilegios de operación dentro de la base de datos de acuerdo con el perfil. Es decir, el servidor opera con cuentas que tienen permisos o privilegios que les permiten realizar tares especificas dentro del Gestor. Dichas cuentas y permisos se encuentran organizados en la base de datos que se está trabajando con 
          em SQL 
          |(
          em Mysql
          |) y 
          em NoSQL (MongoDB)
          |, los cuales se tratan a continuación.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos de herramientas de administración de bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.order-lg-first.order-sm-last(data-aos="fade-right")
        p.mb-5 Se ha hablado sobre la importancia de los datos en una organización; las bases de datos son un grupo de información relacionada que se encuentra almacenada, de manera ordenada. Existe un sin número de bases de datos que organizan la información que diariamente se registrada en las organizaciones.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Coronel, Morris & Rob, en su libro 
              em Bases de datos: diseño, implementación y administración 
              |(2011), señalan que las bases de datos:
              br 
              |“Son estructuras especializadas que permiten a sistemas computarizados guardar, manejar y recuperar datos con gran rapidez”.
              br            
            p.text-der.mb-0 Coronel, Morris & Rob, (2011)
            i.fas.fa-quote-right
      .col-lg-6.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1-2.svg', alt='Database Administrator')
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-3.svg', alt='Banco de datos')
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p.mb-0 Las bases de datos deben tener aliados que les permitan a los administradores hacer mejor su trabajo, es decir con más rapidez, se debe recordar que los datos se almacenan con el objetivo de ser guardados y posteriormente consultados, eliminados o modificados; además que la dinámica de una base de dato es tener actores que intervienen en ellas permitiendo la alimentación de la información, hablando de usuarios y administrando la información para la cual existen herramientas de gestión de bases de datos que facilitan el trabajo, como las que se a continuación.

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo='b')(data-aos="zoom-in")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 PgAdmin4
            p.mb-5 Es una aplicación gráfica que está conectada al gestor de 
              em BD PostgreSQL
              |, siendo una de las más completas y populares con licencia 
              em Open Source 
              |(código abierto). Su estructura o código fuente está en C++ y soporta diferentes sistemas operativos como 
              em Linux, FreeBSD, Solaris, Mac OS X 
              |y 
              em Windows
              |. Esta interfaz gráfica soporta todas las características de 
              em PostgreSQL 
              |y facilita enormemente la administración.
            .col-lg-10.mx-auto
              .tarjeta.color-primario.img1-5.p-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    .row.justify-content-center.align-items-center.mb-3
                      .col-auto.mb-3.mb-sm-0
                        p.text-small Para descargar esta aplicación, remítase al siguiente enlace:
                      .col-auto.mb-3.mb-sm-0
                        a.boton.color-acento-botones(a href="https://www.filehorse.com/es/descargar-pgadmin/" target="_blank" type="application/url")
                          span(style='color:#12263F !important') Enlace web
                          i.fas.fa-link(style='color:#12263F !important')
                    .row.justify-content-center.align-items-center
                      .col-auto.mb-3.mb-sm-0
                        p.text-small Para acceder al tutorial de instalación, haga clic en el siguiente enlace:
                      .col-auto.mb-3.mb-sm-0
                        a.boton.color-acento-botones(a href="https://youtu.be/bq9dOrwZ-KA" target="_blank" type="application/url")
                          span(style='color:#12263F !important') Enlace web
                          i.fas.fa-link(style='color:#12263F !important')
          .col-md-7(data-aos='fade-right')
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              br
              em Interfaz gráfica pgAdmin
            figure
              img(src='@/assets/curso/temas/tema1/img1-4.png', alt='pgAdmin')

        .row
          .col-md-5.mb-4.mb-md-0
            h4 PhpMyAdmin
            p.mb-5 Es una herramienta gráfica de software libre escrita en PHP, destinada a manejar la administración de 
              em MySQL 
              |en la web. 
              em PhpMyAdmin 
              |admite una amplia gama de operaciones en 
              em MySQL y MariaDB 
              |y operaciones de uso frecuente como administración de bases de datos, tablas, columnas, relaciones, índices, usuarios, permisos, etc. (Aguilar, J. (2016).
            .col-lg-10.mx-auto
              .tarjeta.color-primario.img1-4.p-4
                .row.justify-content-around.align-items-center
                  .col-auto
                    .row.justify-content-center.align-items-center.mb-3
                      .col-auto.mb-3.mb-sm-0
                        p.text-small Para descargar esta aplicación, remítase al siguiente enlace:
                      .col-auto.mb-3.mb-sm-0
                        a.boton.color-acento-botones(a href="https://www.phpmyadmin.net/" target="_blank" type="application/url")
                          span(style='color:#12263F !important') Enlace web
                          i.fas.fa-link(style='color:#12263F !important')
          .col-md-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              br
              em Interfaz gráfica PhpMyAdmin
            figure
              img(src='@/assets/curso/temas/tema1/img1-5.png', alt='PhpMyAdmin')

        .row
          .col-md-5.mb-4.mb-md-0
            h4 Heidi SQL
            p Es una interfaz gráfica de 
              em software 
              |libre y de código abierto multi gestión porque permite la conexión de bases de datos como 
              em MySQL, Microsoft SQL Server y PostgreSQL
              |. Únicamente se puede trabajar en el sistema operativo 
              em Windows
              |. A través de esta interfaz se pueden editar datos, exportar estructuras y datos, adicionalmente editar xs, vistas, procesos y tablas.
          .col-md-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              br
              em Interfaz gráfica HeidiSQL
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.png', alt='HeidiSQL')
              figcaption Nota. Reproducida de HeidiSQL para la gestión de bases de datos grandes. Aguilar, J. (s.f.).

        .row
          .col-md-5.mb-4.mb-md-0
            h4 Adminer
            p Es una herramienta gráfica de gestión de bases de datos de código abierto, gratuita y basada en PHP, fácil de utilizar en los servidores. Su uso depende de la instalación de un simple archivo 
              em .php
              |, apuntar el navegador hacia él e iniciar la sesión. 
              em Adminer 
              |soporta bases de datos como 
              em Mysql, MariaDb, PostgreSQL, SQLite, MS SQL, Oracle, SimpleDB, Elasticsearch, MongoDB y Firebird
              |; es decir, sirve para bases de datos 
              em SQL Y NoSQL.
          .col-md-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              br
              em Interfaz gráfica Adminer
            figure
              img(src='@/assets/curso/temas/tema1/img1-7.png', alt='Adminer')
              figcaption Nota. Reproducida de Explorando una base de datos. WordPress con Adminer. Kinsta. (s.f.). 

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Sistema de permisos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-8.svg', alt='Permisos')
      .col-lg-9.col-sm-10(data-aos="fade-left")
        p Cuando se habla de permisos, se enfoca en el acceso del Motor de base de datos que es administrado al nivel del servidor mediante inicios de sesión en el servidor y al nivel de base de datos mediante usuarios y contraseñas creados en la base de datos y roles que se otorga a dichos usuarios dependiendo de su función dentro de ella. El modelo de 
          em SQL Database 
          |sigue un parámetro similar o igual dentro de cada base de datos, pero los permisos de nivel de servidor no están disponibles.

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Se encarga de establecer quién puede conectar al servidor y de asegurar que cada usuario legalmente conectado ejecute solamente las operaciones que tenga permitida.            
            br
            p.text-align-right.mb-0 Hueso, L. (2016)
            i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          p
            b Tabla 1. 
            |Tabla de permisos en Mysql

        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Reproducida de Administración de sistemas gestores de bases de datos (p. 63). Hueso, L. (2016). Ediciones de la U. 
            thead
              tr
                th Nombre tabla
                th
                  em User
                th DB
                th
                  em Host
            tbody
              tr
                td Alcance Columnas
                td Host
                td Host
                td Host
              tr
                td
                td Use
                td Db
                td Db
              tr
                td
                td Password
                td Use
                td Medio
              tr
                td Columnas privilegios
                td Select_priv
                td Select_priv
                td Select_priv
              tr
                td
                td Insert_priv
                td Insert_priv
                td Insert_priv
              tr
                td
                td Update_priv
                td Update_priv
                td Update_priv
              tr
                td
                td Delecte_priv
                td Delecte_priv
                td Delecte_priv
              tr
                td
                td Index_priv
                td Index_priv
                td Index_priv
              tr
                td
                td Alter_priv
                td Alter_priv
                td Alter_priv
              tr
                td
                td Create_priv
                td Create_priv
                td Create_priv
              tr
                td
                td Drop_priv
                td Drop_priv
                td Drop_priv
              tr
                td
                td Grant_priv
                td Grant_priv
                td Grant_priv
              tr
                td
                td Create_view_priv
                td Create_view_priv
                td Create_view_priv
              tr
                td
                td Show_view_priv
                td Show_view_priv
                td Show_view_priv
              tr
                td
                td Create_route_priv
                td Create_route_priv
                td
              tr
                td
                td Alter_routine_priv
                td Alter_routine_priv
                td
              tr
                td
                td References_priv
                td References_priv
                td References_priv
              tr
                td
                td Reload_priv
                td
                td
              tr
                td
                td Shutdown_priv
                td
                td
              tr
                td
                td Show_view_priv
                td
                td
              tr
                td
                td Process_priv
                td
                td
              tr
                td
                td File_priv
                td
                td
              tr
                td
                td Show_db_priv
                td
                td
              tr
                td
                td Super_priv
                td
                td
              tr
                td
                td Create_tmp_table_priv
                td Create_tmp_table_priv
                td Create_tmp_table_priv
              tr
                td
                td Lock_tables_priv
                td Lock_tables_priv
                td Lock_tables_priv
              tr
                td
                td Execute_priv
                td
                td
              tr
                td
                td Repl_slave_priv
                td
                td
              tr
                td
                td Repl_client_priv
                td
                td

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido
          p
            b Tabla 2. 
            |Roles de bases de datos NoSql MongoDB
        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Reproducida de Introducción a las bases de datos NoSQL usando MongoDB. Sarasa, A. (2016).
            thead
              tr
                th Rol
                th Permisos
            tbody
              tr
                td
                  b
                    em read
                td Lectura sobre todas las colecciones que no son del sistema y las colecciones del sistema 
                  em system.indexes, system.js y system. namespaces.
              tr
                td
                  b
                    em readWrite
                td Los mismos privilegios que 
                  em read
                  |, y modificación de todas las colecciones que no son del sistema y sobre la colección del sistema 
                  em system.js.
              tr
                td
                  b
                    em dbAdmin
                td Privilegios sobre las colecciones del sistema 
                  em system.indexex, system. namespaces y system.profile 
                  |y algunos privilegios sobre colecciones que no son del sistema (entre ellos no se incluye la lectura completa).
              tr
                td
                  b
                    em dbOwner
                td Combina los privilegios de los roles 
                  em readWrite, dbAdmin y userAdmin.
              tr
                td
                  b
                    em userAdmin
                td Permite crear y modificar roles de la base de datos actual. Indirectamente proporciona acceso super usuario a la base de datos o a un 
                  em clúster
                  |. Es posible otorgar cualquier privilegio a cualquier usuario.
                  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-9.png', alt='Ojos frente a pantalla')
      .col-lg-7(data-aos="fade-left")
        p Así como la base de datos 
          em SQL 
          |en 
          em MongoDB
          |, también se pueden crear usuarios con ciertos permisos, hay que recordar que estos accesos son condiciones que el usuario administrador proporciona a usuarios creados para que gestionen alguna tarea específica en la base de datos.
        p Para crear los permisos desde gestor de base de datos 
          em MongoDB
          |, se deben escribir comandos que permitan la asignación de los mismos, estos pueden ser en consola o pantalla negra como se hacía inicialmente o a través de herramientas gestoras de bases de datos como 
          em MongoDB compass 
          |o 
          em Visual Studio Code 
          |entre otros, a continuación, se pueden ver que permisos existen para el caso de 
          em MongoDB.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img1-10.svg', alt='Comandos MongoDB')
          .tarjeta.color-acento-contenido.p-3(x="17%" y="9%" numero="")
            p.text-align-center Lectura sobre todas las colecciones que no son del sistema y las colecciones del sistema 
              em system.indexes, system.js y system. namespaces.
          .tarjeta.color-acento-contenido.p-3(x="50%" y="9%" numero="")
            p Privilegios sobre las colecciones del sistema 
              em system.indexes, system. namespaces y system.profile
              |, y algunos privilegios sobre colecciones que no son del sistema (entre ellos no se incluye la lectura completa).
          .tarjeta.color-acento-contenido.p-3(x="83%" y="9%" numero="")
            p Permite crear y modificar roles de la base de datos actual. Indirectamente proporciona acceso super usuario a la base de datos o a un clúster. Es posible otorgar cualquier privilegio a cualquier usuario.
          .tarjeta.color-acento-contenido.p-3(x="33%" y="90%" numero="")
            p Los mismos privilegios que 
              em read
              |(Lectura), y modificación de todas las colecciones que no son del sistema y sobre la colección del sistema 
              em system.js.
          .tarjeta.color-acento-contenido.p-3(x="67%" y="90%" numero="")
            p Combina los privilegios de los roles lectura-escritura, 
              em dbAdmin 
              |(Administración de base de datos) y 
              em userAdmin 
              |(Administración de usuario).

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Lenguaje de control de datos DCL

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-11.svg', alt='Lenguaje DCL')
      .col-lg-8(data-aos="fade-left")
        p La administración y seguridad en las bases de datos, utiliza el Lenguaje de Control de Datos (DCL) que es el encargado de permitir el acceso de usuario a conjunto de datos, tablas y vistas en los gestores de base de datos.
        p El lenguaje de control está manipulado por el administrador de la base de datos el cual da los permisos a los usuarios con la sentencia 
          em GRAND 
          |y 
          em REVOKE
          |, los cuales permiten o no una acción de consulta dentro de los datos. La sentencia 
          em GRAND 
          |otorga funciones a los usuarios en los 
          em BigQuery 
          |(Consultas Grandes), 
          em REVOKE 
          |es el complemento del comando 
          em GRAND
          |, porque elimina o quita privilegios a los usuarios creados, es importante indicar que el único usuario que tiene permitido otorgar o no permisos a los usuarios de una base de datos es el usuario administrador.
        p A continuación, encuentra las funciones de las sentencias 
          em GRAND 
          |y 
          em REVOKE
          |:

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Sentencia de control 
      em Grand

    p.mb-5 Todos los privilegios sobre la base de datos los tiene su propietario, pero no es el único que accede a ésta. Por este motivo, el SQL ofrece sentencias para autorizar y desautorizar a otros usuarios.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-10.mb-4.mb-md-0
            p.mb-5
              b Autorizaciones: 
              |para autorizar, el SQL dispone de la siguiente sentencia con el usuario creado para este caso es Jorge al cual se le va a dar privilegios:
            .row.justify-content-center
              .col-lg-8
                .titulo-sexto.color-acento-contenido
                  h5 Figura 5.
                  br
                  em Visualización de usuario en consola Mysql
                figure
                  img(src='@/assets/curso/temas/tema1/img1-12.png', alt='Consola MySQL')
        .row
          .col-md-10.mb-4.mb-md-0
            p.mb-5 
              em mysql> select * from user\
              |G; se utiliza esta sentencia para ver los privilegios del usuario Jorge.
            .row.justify-content-center
              .col-lg-8
                .titulo-sexto.color-acento-contenido
                  h5 Figura 6.
                  br
                  em Pantallazos de privilegios usuario Jorge
                figure
                  img(src='@/assets/curso/temas/tema1/img1-13.png', alt='Privilegios de usuario')
        .row
          .col-md-10.mb-4.mb-md-0
            p.mb-5 
              em GRANT ALL PRIVILEGES ON *.* TO 
              |'jorge'@'localhost' 
              em WITH GRANT OPTION 
              |con esta sentencia se da privilegios al usuario Jorge.
            .row.justify-content-center
              .col-lg-8
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7.
                  br
                  em Sentencia para dar privilegios al usuario Jorge
                figure
                  img(src='@/assets/curso/temas/tema1/img1-14.png', alt='Sentencia para dar privilegios de usuario')   

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.bg-gradient.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img1-16.svg" alt="Página Web")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-small Para afianzar los conocimientos sobre los privilegios se sugiere visitar la siguiente página web:
                .col-sm-auto
                  a.boton.color-acento-botones(a href="https://dev.mysql.com/doc/refman/5.7/en/creating-accounts.html#creating-accounts-granting-privileges" target="_blank" type="application/url")
                    span.cst Enlace web
                    i.fas.fa-link(style='color:#12263F !important')
    
    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Sentencia de control 
      em Revoke

    p.mb-5(data-aos="fade-left") Revocar se refiere a la acción que se toma para quitar los privilegios en su totalidad o alguno en especial de una cuenta de usuario, se declara la sintaxis 
      em REVOKE
      |. Estos privilegios se pueden revocar y otorgar en diferentes niveles.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-17.svg" alt="Revocado")
      .col-lg-8(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Revocar privilegios globales")
            .col-md-8.mb-4.mb-md-0
              p.mb-4 Para esta acción se sigue la siguiente sintaxis:
              p.mb-4
                em REVOKE ALL
                br
                em ON *.*
                br
                em FROM 'jorge'@'localhost';
              p 
                em REVOKE RELOAD
                br
                em ON *.*
                br
                em FROM 'admin'@'localhost';
          .row(titulo="Revocar privilegios a nivel de base de datos")
            .col-md-8.mb-4.mb-md-0
              p
                em REVOKE CREATE,DROP
                br
                em ON expenses.*
                br
                em FROM 'jorge'@'localhost;
          .row(titulo="Revocar privilegios a nivel de tabla")
            .col-md-8.mb-4.mb-md-0
              p
                em REVOKE INSERT,UPDATE,DELETE
                br
                em ON customer.addresses
                br
                em FROM 'pedro'@' host47.example.com;
          .row(titulo="Verificar efectos de la revocación de privilegios")
            .col-md-8.mb-4.mb-md-0
              p
                em Use SHOW GRANTS
                br
                em mysql> SHOW GRANTS FOR 'jorge'@'localhost';

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Gestión de seguridad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-18.svg" alt="Seguridad")
      .col-lg-8(data-aos="fade-left")
        p La seguridad es un factor determinante para la base de datos porque a través de ella se puede regular la gestión de la información, con la acción de los usuarios, que se crean con el fin de ingresar, modificar o eliminar información, según se requiera, por tal motivo, la gestión de la seguridad de las cuentas de usuarios es imprescindible, puesto que lleva a regular los ingresos y además lleva un registro de las personas que han estado realizando operaciones dentro de ellas.
        p.mb-0 A continuación, se puede ver la seguridad que se tiene en las cuentas y cómo se crean con ciertos privilegios, según lo visto en el tema anterior; para esto, existen varios aspectos a tener en cuenta:

    .row.justify-content-center.mb-5
      .col-lg-7
         LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Usuario resumen") La creación de un usuario, 
            em CREATE USER 
            |crea una nueva fila en la 
            em mysql.usertabla 
            |del sistema. La fila de la cuenta refleja las propiedades especificadas en el extracto. Las propiedades no especificadas se establecen en sus valores predeterminados.
          p.text-small(numero="2" titulo="Autenticación") El complemento de autenticación definido por el 
            em default_authentication_plugin 
            |variable del sistema y las credenciales vacías.
          p.text-small(numero="3" titulo="<em>SSL/TLS</em>")
            em NONE
          p.text-small(numero="4" titulo="Límites de recursos") Ilimitado
          p.text-small(numero="5" titulo="Gestión de contraseñas") 
            em PASSWORD EXPIRE DEFAULT
          p.text-small(numero="6" titulo="Bloqueo de cuenta")
            em ACCOUNT UNLOCK
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4
        figure
          img(src="@/assets/curso/temas/tema1/img1-19.svg" alt="Seguridad")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-20.svg" alt="Seguridad")
      .col-lg-11.col-sm-10(data-aos="fade-left")
        p.mb-0 Se debe tener presente que cuando se crea una cuenta de usuario por primera vez, esta no tiene privilegios es labor del administrador de bases de datos asignarlos, cada usuario que sea asignado puede tener el valor 
          em auth option
          |, que significa autenticación opcional, estos valores pueden tomar valor de autenticación por ejemplo la contraseña; también se puede definir esta contraseña con expiración como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-21.svg" alt="Seguridad")
      .col-lg-8(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Ejemplo 1")
            .col-md-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                p.mb-0 
                  em CREATE USER ‘Administrador’@’localhost’
                p.mb-0
                  em IDENTIFIED WITH Administrador2022 BY ‘new_password’
                p.mb-0 PASSWORD EXPIRE INTERVAL 240 DAY
              p 
                b Nota: 
                |Si visualiza este comando, se procede a crear la cuenta de usuario Administrador, con 
                em password 
                |Administrador2022 e indica que el nuevo 
                em password 
                |debe expirar en 240 días.
          .row(titulo="Ejemplo 2")
            .col-md-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                p.mb-0 
                  em CREATE USER
                p.mb-0
                  em ‘Admin1’@’localhost’ IDENTIFIED WITH mysql_native_password
                p.mb-0
                  em BY ‘new_password1’,
                p.mb-0
                  em  ‘Admin2’@’localhost’ IDENTIFIED WITH admin2022
                p.mb-0
                  em BY ‘new_password2’
                p.mb-0
                  em REQUIRE X509 WITH MAX_QUERIES_PER_HOUR 48
                p.mb-0
                  em ACCOUNT LOCK;
              p 
                b Nota: 
                |Cuando se define el comando 
                em IDENTIFIED WITH….BY 
                |está aplicando solo a la cuenta nombrada del ejemplo, es decir 
                em Admini1
                |, se puede ver que las dos cuentas usan la contraseña posteriores para el caso; del primero va a ser un 
                em password native 
                |es decir asignado por la máquina, para el segundo es 
                em admin2022
                |, para los comandos restantes las conexiones deben estar certificados con X509, con un máximo de 48 consultas por hora, el último comando 
                em ACCOUNT LOCK
                |, define el bloqueo inicial de la cuenta por lo que debe ser desbloqueado por el administrador de base de datos.

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        .bloque-texto-izquierda
          .bloque-texto-a.bloque-texto-1.p-4(data-aos="zoom-in")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-7.order-lg-first.order-sm-last
                .contenedor-dashed.p-3
                  .bloque-texto-a__texto.p-4
                    p A continuación, se muestran las siguientes opciones de 
                      em auth_option 
                      |(opción de autenticación):
                    p.mb-0 
                      b Auth_plugin 
                      |con esta opción se identifica que el usuario está registrado en una base de datos y que el plugin de autenticación está asignado, para esta operación se debe ingresar al directorio raíz 
                      em root
                      |, se usa el siguiente comando:
                      em select user, plugin from mysql.user;
              .col-lg-5.mb-4.mb-lg-0.p-4
                figure
                  img(src='@/assets/curso/temas/tema1/img1-22.svg', alt='Código' style='width: 210px')

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          br
          em Mysql plugin de usuarios
        figure
          img(src='@/assets/curso/temas/tema1/img1-23.png', alt='Mysql plugin de usuarios')
          figcaption Nota. Contraseña como texto no cifrado.
    
    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |
      em Auth string

    p.mb-5(data-aos="fade-right") Son todas las autenticaciones que se registran sin encriptar, es texto simple y se pasa al complemento de autenticación para un posible hash. El resultado devuelto por el complemento se almacena en la tabla.

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
          p.mb-0 
            em CREATE USER 'Jorge_2021'@'localhost'
          p.mb-0
            em IDENTIFIED BY 'Jorueda11';

    p.mb-5 El siguiente apartado define los tipos de usuarios SSL/TLS, de opciones de administrador de contraseña y  de opción de bloqueo de cuenta:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-md-10.mb-4.mb-md-0
            .row.justify-content-center.mb-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img1-24.svg', alt='Mysql plugin de usuarios')
            .row
              .col-md-12
                p.mb-0
                  b Usuario SSL/TLS
                p 
                  em MySQL 
                  |puede verificar los atributos del certificado X.509 los cuales son formatos estándar para certificados de claves públicas, documentos digitalizados que contienen claves encriptadas, además de la autenticación habitual que se basa en el nombre de usuario con sus credenciales, se especifican las opciones relacionadas con 
                  em SSL/TLS 
                  |para una cuenta de 
                  em MySQL.
        .row
          h5.mb-4 Usuario SSL/TLS
          p El orden de 
            em REQUIRE 
            |es la sintaxis que identifica si requiere ssl o no, a continuación, se pueden observar ejemplos de creación de usuarios:
          .row
            .col-md-6.mb-4-mb-md-0
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                h5.mb-3 Ejemplo 1
                p.mb-0 
                  em CREATE USER 'jorge2021'@'localhost' REQUIRE NONE;
                p.mb-0 
                  b None 
                  |indican que las cuentas de usuarios no tienen o solicitan requisitos SSL o X.509, permitiendo la conexión sin cifrar.
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                h5.mb-3 Ejemplo 2
                p.mb-0 
                  em CREATE USER 'jorge2021'@'localhost' REQUIRE SSL;
                p.mb-0
                  b SSL 
                  |indica al servidor de base de datos que permite conexiones únicamente encriptadas para las cuentas asignadas con este requerimiento.
            .col-md-6
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                h5.mb-3 Ejemplo 3
                p.mb-0 
                  em CREATE USER 'jorge2021'@'localhost' REQUIRE X509;
                p.mb-0
                  b X509. 
                  |Las cuentas registradas con este requerimiento solicitan el certificado valido firmado, este uso siempre estará cifrado por lo cual el SSL es solicitada en este caso.
        .row
          h5.mb-4 Usuario SSL/TLS
          p El orden de 
            em REQUIRE 
            |es la sintaxis que identifica si requiere ssl o no, a continuación, se pueden observar ejemplos de creación de usuarios:
          .row
            .col-md-6.mb-4-mb-md-0
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                h5.mb-3 Ejemplo 4
                p.mb-0
                  em CREATE USER 'jorge2021'@'localhost'
                p.mb-0
                  em REQUIRE ISSUER '/C=SE/ST=Stockholm/L=Stockholm/
                p.mb-0
                  em O=MySQL/CN=CA/emailAddress=jorueda11@gmail.com';
                p.mb-0
                  b ISSUER 
                  |para esta condición es necesario que los clientes presenten certificado x509. Si un cliente presenta un certificado que es válido, pero tiene un emisor diferente, el servidor rechaza la conexión.
            .col-md-6
              .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                h5.mb-3 Ejemplo 5
                p.mb-0
                  em CREATE USER 'jorge2021'@'localhost'
                p.mb-0
                  em REQUIRE SUBJECT '/C=SE/ST=Stockholm/L=Stockholm/
                p.mb-0
                  em O=MySQL demo client certificate/
                p.mb-0
                  em CN=client/emailAddress=jorueda11t@hotmail.com';
              p
                b Nota: 
                |en este caso se requiere que los clientes presenten un certificado X.509 válido que contenga el asunto 
                em subject
                |. Si un cliente presenta un certificado que es válido, pero tiene un asunto diferente, el servidor rechaza la conexión.

        .row
          .col-md-10.mb-4.mb-md-0
            .row.justify-content-center.mb-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img1-25.png', alt='Escribiendo en portátil')
            .row
              .col-md-12
                h5.mb-4 Usuario de opciones de administrador de contraseña
                p.mb-0 Los usuarios por administración de contraseña son todas las cuentas que tiene en vigencia en su contraseña de manera aleatoria dadas por el administrador, para ellos existen varias estructuras:

        .row
          .col-md-10.mb-4.mb-md-0
            h5.mb-0
              em PASSWORD EXPIRE
            p.mb-3 Cuando imponemos esta condición el 
              em password 
              |está expirado esto quiere decir que el usuario que ingrese por primera vez debe asignar la contraseña automáticamente.
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 
                em CREATE USER 'jorueda11'@'localhost' PASSWORD EXPIRE;
            h5.mb-0
              em PASSWORD EXPIRE DEFAULT
            p.mb-3 Es una política de caducidad global, establece por defecto que las contraseñas del usuario expiren.
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 
                em CREATE USER 'jorueda11'@'localhost' PASSWORD EXPIRE DEFAULT;
            h5.mb-0
              em PASSWORD EXPIRE NEVER
            p.mb-3 Esta opción está dada para que las cuentas que tengan este requerimiento nunca expiren sus contraseñas.
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 
                em CREATE USER 'jorueda11'@'localhost' PASSWORD EXPIRE NEVER;
            h5.mb-0
              em PASSWORD EXPIRE INTERVAL N DAY
            p.mb-3 Es una opción o requerimiento muy utilizado pues nos muestra el número de días que damos para que a partir de cuenta de usuario se cree comience una cuenta regresiva para la expiración de su contraseña, para el ejemplo el 
              em password 
              |expirará en 240 días.
            .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
              p.mb-0 
                em CREATE USER 'jorueda11'@'localhost' PASSWORD EXPIRE INTERVAL 240 DAY;

        .row
          .col-md-10.mb-4.mb-md-0
            .row.justify-content-center.mb-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img1-26.png', alt='Candado')
            .row.mb-3
              .col-md-12
                h5.mb-4 Usuario opción de bloqueo de cuenta
                p.mb-0 El gestor de bases de datos 
                  em MySQL 
                  |admite el bloqueo y desbloqueo de cuentas de usuarios mediante las opciones 
                  em ACCOUNT LOCK 
                  |y 
                  em ACCOUNT UNLOCK
                  |, estos dos son requerimientos utilizados dependiendo de la necesidad de la cuenta cuando son cuentas de usuarios con ingresos transitorios es muy utilizado.

            .row
              .col-md-7
                .titulo-sexto.color-acento-contenido.cfc(data-aos="fade-left")
                  p.mb-0 
                    em CREATE USER ‘jorueda11’@’localhost’ IDENTIFIED BY ‘12345’;
                  p.mb-0
                    em lock_option: {ACCOUNT LOCK
                  p.mb-0
                    em |ACCOUNT UNLOCK}

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Ejecución de 
        em scripts 
        |de restauración

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.bloque-texto-1.p-4.p-md-5.mb-5(data-aos="zoom-in")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last
              figure
                img(src='@/assets/curso/temas/tema1/img1-27.svg', alt='Restauración')
            .col-lg-8.order-sm-first.order-lg-last
              .contenedor-dashed.p-4
                .bloque-texto-a__texto.p-4
                  p.mb-0 Un 
                    em script 
                    |se entiende como la creación de un archivo de órdenes que permiten facilitar las operaciones diarias dentro de la base de datos, los 
                    em scripts 
                    |se pueden crear en archivos de texto como los blocs de notas o en su defecto 
                    em Notepad 
                    |donde se crean 
                    em scripts 
                    |en ciertos lenguajes, para poder ejecutar el 
                    em script 
                    |se debe guardar con 
                    em .sql 
                    |para que al momento de hacer el llamado desde el gestor de base de datos se pueda ejecutar y realizar la acción que se le solicitó.

    .tarjeta.tarjeta--azul-2.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Se crea el archivo en el block de notas.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              br
              em Creación de scripts en bloc de notas
            figure
              img(src='@/assets/curso/temas/tema1/img1-28.png', alt='Scripts en bloc de notas')
        .row.align-items-center(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            p Se guarda como 
              em .sql
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              br
              em Archivo guardado como .sql
            figure
              img(src='@/assets/curso/temas/tema1/img1-29.png', alt='Archivo .sql')
        .row.align-items-center(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            p Realizamos la siguiente sintaxis y después mostramos la base de datos creada con la tabla.
            p 
              em mysql> \. C:\user….ruta 
              |donde está el documento.
          .col-md-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 11.
              br
              em Sintaxis para ejecutar scripts, vista de bases de datos nueva, con tabla
            figure
              img(src='@/assets/curso/temas/tema1/img1-30.png', alt='Sintaxis para ejecutar scripts')
          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
