<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cocina de Sur América

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/1.svg", alt="alt")
      .col-lg
        p(data-aos="fade-up").mb-0 La cocina de Sur América destaca por su diversidad, influenciada tanto por las culturas indígenas como por las tradiciones europeas. Cada país aporta ingredientes únicos y técnicas ancestrales que enriquecen sus preparaciones.


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Ceviche

    .row.justify-content-center.align-items-center.mb-5

      .col-lg-7
        p(data-aos="fade-up").mb-4 Para la gastronomía mundial, el ceviche es un ícono de origen colombiano, peruano o mexicano, originalmente americano. Este plato se caracteriza por la adición de zumo de limón a unos cubos de filetes de pescado y aderezos como cebolla, ajíes, cilantro, sal, maíz y, en ocasiones, camote (para el caso peruano).

        .tarjeta.p-4.bg-color-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/2.svg", alt="alt")
            .col-lg
              p(data-aos="fade-up").mb-0 Es una perfecta combinación entre limón y sal, la frescura de un filete de pescado y los tonos propios que le aportan el ají y el aromático cilantro.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/3.png", alt="alt")


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Matambre

    p(data-aos="fade-up").mb-4 Es una preparación típica argentina que consiste en sobrebarriga arrollada con huevos duros y algunos vegetales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/4.png", alt="alt")

      .col-lg-7
        .tarjeta.p-4.bg-color-5.mb-4
          p(data-aos="fade-up").mb-0 El proceso de preparación es:

          ul.lista-ul--color.mb-0
            li.mb-0
              i.fas.fa-check-circle
              | Si se hace hervida, la capa de grasa quedará internamente.
            li.mb-0
              i.fas.fa-check-circle
              | Si se procede al horno, esta misma se dejará hacia el exterior.

        p(data-aos="fade-up").mb-4 La madurez de la carne (una pieza cárnica que haya pasado mínimo 72 horas en refrigeración después de su sacrificio) es determinante para obtener una preparación más blanda al corte y agradable al gusto.


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Hornado de Chancho

    p(data-aos="fade-up").mb-4 En Ecuador, esta preparación de cerdo o pernil de cerdo se sazona con chicha, sal, limón, pimienta y ajo, y luego se lleva al horno, tradicionalmente de leña, durante aproximadamente 2 horas. Esto permite obtener una piel de cerdo crocante y una carne con una textura muy suave.

    .row.justify-content-center.align-items-stretch.my-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema3/5.png", alt="alt")

      .col-lg-5
        .tarjeta.bg-color-7.p-4.h-100
          p(data-aos="fade-up").mb-3.mt-4 #[strong Recomendación]
          p(data-aos="fade-up").mb-0 Deje el pernil en refrigeración con todos los productos mencionados para marinar. Al dejarlo un mínimo de 24 horas, ayudará a que los sabores penetren hasta el centro del pernil.


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Feijoada

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-xl(data-aos="fade-left")
          .p-4
            p.mb-0 Consiste en varias carnes de cerdo y de res, incluidas el charque, paio y calabresa (dos salchichas típicas brasileñas). Este plato también contiene el infaltable frijol negro, arroz blanco y naranja en rodajas sin cáscara, lo que lo convierte en el símbolo nacional de Brasil.
        .col-xl-auto(data-aos="fade-right")
          img(src="@/assets/curso/tema3/6.png", style="max-width: 525px", alt="").m-auto.mt-xl-0.mt-4



    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Causa

    p(data-aos="fade-up").mb-4 Es un plato típico peruano, compuesto principalmente por papa criolla en presentación de puré, el cual, una vez frío, se adereza, moldea y rellena de diferentes productos como pechuga de pollo precocida, atún, aguacate, camarón, pulpo, entre otros.


    TabsA.color-acento-botones.mb-5
      .tarjeta(titulo="Origen")
        
        .row.justify-content-center.align-items-stretch
          .col-lg-7
            .tarjeta(style="background-color: #F3F0EA").p-4.h-100
              h4 Origen

              p Se cuenta que en tiempos del libertador José de San Martín, algunas personas en Lima vendían este plato en las esquinas de la ciudad, diciendo “apoyar la causa de la independencia”, lo que da origen al nombre de este reconocido platillo.
          
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/7.png", alt="alt")
      .tarjeta(titulo="Ingredientes")
        .row.justify-content-center.align-items-stretch
          .col-lg-7
            .tarjeta(style="background-color: #F3F0EA").p-4.h-100
              p.mb-3 Ingredientes para 5 personas

              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-check-circle
                  | Papa criolla: 300 g.
                li.mb-1
                  i.fas.fa-check-circle
                  | Aguacate: 50 g.
                li.mb-1
                  i.fas.fa-check-circle
                  | Tomate: 50 g.
                li.mb-1
                  i.fas.fa-check-circle
                  | Limón: 20 g.
                li.mb-1
                  i.fas.fa-check-circle
                  | Mayonesa: 20 g.
                li.mb-1
                  i.fas.fa-check-circle
                  | Cilantro: 3 g.
                li.mb-0
                  i.fas.fa-check-circle
                  | Sal: cantidad necesaria.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/7.png", alt="alt")


      .tarjeta(titulo="Proceso")
        
        .row.justify-content-center.align-items-stretch
          .col-lg-7
            .tarjeta(style="background-color: #F3F0EA").p-4.h-100
              p.mb-3 El proceso de preparación es:

              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-check-circle
                  | Pelar las papas y cocinar en agua hirviendo con sal hasta que ablanden (aproximadamente 12 minutos, según el tamaño de las papas).
                li.mb-1
                  i.fas.fa-check-circle
                  | Retirar del fuego, prensar las papas para hacer puré y enfriar.
                li.mb-1
                  i.fas.fa-check-circle
                  | Adicionar mayonesa, cilantro picado en chiffonade (corte en tiras finas), zumo de limón y sal.
                li.mb-1
                  i.fas.fa-check-circle
                  | Cortar en concasse el tomate y en médium dice el aguacate.
                li.mb-0
                  i.fas.fa-check-circle
                  | Moldear el puré con ayuda de un molde cilíndrico y agregar el tomate y el aguacate en la parte superior. Servir frío.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/7.png", alt="alt")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.p-4.bg-color-7
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/8.svg", alt="alt")
            .col-lg
              p(data-aos="fade-up").mb-0 #[strong Nota:] Si es posible conseguir ají amarillo o pasta de ají amarillo, se puede añadir al puré de papa en pequeñas cantidades para realzar su sabor.



    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4 Choripán Argentino

    p(data-aos="fade-up").mb-4 Es una preparación de la cocina argentina, realmente muy fácil de realizar.


    TabsA.color-acento-botones.mb-5

      .tarjeta(titulo="Ingredientes")
        .row.justify-content-center.align-items-stretch
          .col-lg-7
            .tarjeta(style="background-color: #F3F0EA").p-4.h-100
              p.mb-3 Ingredientes para 5 personas

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle
                  | 1 pan baguette por persona.
                li.mb-0
                  i.fas.fa-check-circle
                  | 5 chorizos argentinos.
                li.mb-0
                  i.fas.fa-check-circle
                  | 10 g de perejil.
                li.mb-0
                  i.fas.fa-check-circle
                  | 10 g de orégano.
                li.mb-0
                  i.fas.fa-check-circle
                  | 10 g de ajo.
                li.mb-0
                  i.fas.fa-check-circle
                  | 40 ml de aceite de girasol.
                li.mb-0
                  i.fas.fa-check-circle
                  | Sal: cantidad necesaria.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/9.png", alt="alt")


      .tarjeta(titulo="Proceso")
        
        .row.justify-content-center.align-items-stretch
          .col-lg-7
            .tarjeta(style="background-color: #F3F0EA").p-4.h-100
              p.mb-3 El proceso de preparación es:

              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-check-circle
                  | Cortar el pan a lo largo y los chorizos. Asarlos en la parrilla y reservar.
                li.mb-1
                  i.fas.fa-check-circle
                  | En una licuadora, llevar los ingredientes restantes para hacer un chimichurri.
                li.mb-0
                  i.fas.fa-check-circle
                  | Rellenar los panes con los chorizos y el chimichurri.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/9.png", alt="alt")

</template>

<script>
export default {
  name: 'Tema3',
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
