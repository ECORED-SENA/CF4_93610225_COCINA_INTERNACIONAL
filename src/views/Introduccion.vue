<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro/1.svg", alt="alt")
      .col-lg
        p(data-aos="fade-up").mb-0 La gastronomía de América es un reflejo de su rica diversidad cultural, histórica y geográfica. Cada región del continente ha desarrollado platos únicos que combinan ingredientes autóctonos con influencias internacionales, creando una cocina llena de sabores y técnicas distintivas. Desde el norte hasta el sur, la comida representa no solo tradiciones culinarias, sino también la identidad de sus pueblos.

    .row.mb-4
      .col-lg-9
        .bg-color-3(data-aos="fade-up").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/intro/2.png', alt='')
            .col-lg
              .p-4.pe-lg-5
                p.mb-0(data-aos="fade-up") En Norteamérica, destacan preparaciones como el clam chowder de Nueva Inglaterra y la barbacoa de Virginia, que muestran el ingenio en el uso de ingredientes locales y técnicas de cocción como la parrilla y la cocción lenta. Por su parte, Centroamérica cautiva con sabores intensos y el protagonismo del maíz en platos como los tacos y las pupusas, íconos de la cocina mexicana y salvadoreña respectivamente.

        p(data-aos="fade-up").mb-0 Suramérica ofrece una explosión de sabores a través de preparaciones emblemáticas como el ceviche peruano, la feijoada brasileña y el choripán argentino. Estas delicias, junto a otras como el horneado de chancho ecuatoriano y el matambre argentino, demuestran la versatilidad de sus ingredientes y el valor de las técnicas tradicionales transmitidas de generación en generación.

      .col-lg-3
        figure
          img(src='@/assets/curso/intro/3.png', alt='')
              
              

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
