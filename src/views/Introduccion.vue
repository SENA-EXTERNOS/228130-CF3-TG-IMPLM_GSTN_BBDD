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
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/intro/intro.svg', alt='Base de datos')
        .col-lg-8.order-sm-first.order-lg-last
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p Estimado aprendiz, reciba un cordial saludo y sea bienvenido a este ciclo de formación en el que podrá adquirir conocimientos relacionados con la gestión de cuentas de usuario y la automatización de tareas, ambas vitales en las organizaciones, ya que ayudan al perfecto funcionamiento y procesamiento de la información, vigilando que sea correcta y, a su vez, generando estrategias que disminuyan el tiempo, en términos de consultas y procesos recurrentes.
              p.mb-0 La gestión de cuentas de usuarios le permiten al aprendiz la creación y la asignación de permisos o roles, lo que facilita la administración de la base de datos, garantizando que los usuarios registrado que participan en ella, tengan una acción sincrónica de la información, generando la organización y disposición de la información; por otra parte, la automatización de tareas permite el aprendizaje para la creación de eventos o métodos que queden en el gestor para aplicarlos concurrentemente, esto hace que las consultas diarias y script necesarios para el mantenimiento de la información sean más rápidos.
    
    p.mb-5(data-aos="fade-right") En el siguiente enlace se encuentra el video de introducción donde se contextualizan los contenidos a tratar en este proceso formativo. Esperamos que culmine este aprendizaje, apropiando adecuadamente todos los conceptos. 
      b ¡Muchos éxitos!

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
