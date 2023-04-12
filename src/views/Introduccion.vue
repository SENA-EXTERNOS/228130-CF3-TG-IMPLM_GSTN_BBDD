<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.bloque-texto-i.p-4.p-md-5.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last
          figure
            img(src='@/assets/curso/temas/intro/intro.svg', alt='Base de datos')
        .col-lg-8.order-sm-first.order-lg-last
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá adquirir conocimientos relacionados con la gestión de cuentas de usuario y la automatización de tareas; ambas son vitales en las organizaciones, porque ayudan al perfecto funcionamiento y procesamiento de la información, vigilando que sea correcta y, a su vez, generando estrategias que disminuyan el tiempo, en términos de consultas y procesos recurrentes.
              p.mb-0 La gestión de cuentas de usuarios le permiten, al aprendiz, la creación y la asignación de permisos o roles, lo que facilita la administración de la base de datos, garantizando que los usuarios registrados que participan en ella, tengan una acción sincrónica de la información, generando la organización y disposición de la información; por otra parte, la automatización de tareas permite el aprendizaje para la creación de eventos o métodos que queden en el gestor, para aplicarlos concurrentemente; esto hace que las consultas diarias y <i>scripts</i> necesarios para el mantenimiento de la información, sean más rápidos.
    
    p.mb-5(data-aos="fade-right") En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UkomokZiOUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
