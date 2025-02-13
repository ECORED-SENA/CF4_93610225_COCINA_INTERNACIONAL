<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bg-color-sintesis.p-5.rounded-top.rounded-bottom
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis representa la gastronomía de América, destacando la diversidad cultural y geográfica de tres regiones: Norteamérica, Centroamérica y Suramérica. En Norteamérica se incluyen platos como Clam Chowder, barbacoa y jambalaya. Centroamérica resalta tacos, pupusas y mofongo. Por su parte, Suramérica incluye ceviche, feijoada, matambre, hornado y choripán, mostrando la riqueza culinaria de cada región.")
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
