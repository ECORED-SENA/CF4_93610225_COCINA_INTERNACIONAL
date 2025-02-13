<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-5.pb-5

        p(data-aos="fade-up").mb-4 La cocina es un espacio donde se combinan creatividad, cultura y técnicas específicas para la preparación de alimentos. Para garantizar la calidad y seguridad de las comidas, es fundamental cumplir con normas de higiene que eviten contaminaciones, y normas de seguridad que prevengan accidentes, permitiendo un ambiente ordenado y adecuado para trabajar.

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Además, las herramientas y utensilios de cocina son esenciales para facilitar procesos y explorar las tradiciones culinarias de diversas culturas. Desde el caquelón suizo hasta el tajín marroquí, cada utensilio cuenta una historia, conservando prácticas tradicionales y permitiendo innovaciones en la preparación de platillos.


        .row.align-items-center
          .col-lg-auto(data-aos="fade-right").d-none.d-lg-block
            img(src="@/assets/curso/intro/2.svg", style="max-width: 85px", alt="").m-auto.mb-4.mb-lg-0
          .col-lg(data-aos="fade-left")
            p.mb-0 Por último, la cocina internacional refleja la riqueza cultural de los países a través de sus sabores e ingredientes únicos. Argentina, España, Turquía y México son ejemplos de cómo cada región aporta su identidad, fusionando tradiciones que enriquecen el panorama global de la gastronomía.
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
