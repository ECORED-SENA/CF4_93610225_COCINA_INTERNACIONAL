<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bg-color-sintesis.p-5.rounded-top.rounded-bottom
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual resume equipos, utensilios y herramientas de la cocina internacional en cuatro categorías: normas de higiene (lavado de manos, cabello recogido, ropa ajustada), normas de seguridad (área limpia, cuchillos seguros, extintores y botiquín), herramientas internacionales (caquelón, esterilla, laminadora, tajín, molcajete) y cocinas del mundo (Argentina, España, Turquía, México) con sus platos e ingredientes tradicionales. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
