<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/arrastrar.svg", alt="Dedo arrastrando en pantalla")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-botones
          h2 Gestión y control de bases de datos
        p Las bases de datos han sido muy importantes para las organizaciones, a través de ellas se desarrollan estrategias de 
          em marketing 
          |por la cantidad de información que contienen; por tal motivo, es importante contar con personal idóneo y profesional para que opere de la mejor manera la organización de la información, utilizando las herramientas y aplicando las diferentes alternativas que buscan sacarle el mayor provecho a toda la información guardada.
        p.mb-4 A continuación, se encuentra una actividad para que evalúe su nivel de comprensión respecto a los contenidos de este componente formativo. Consiste en colocar el enunciado en el concepto correcto. 
          b ¡Mucha suerte!
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
