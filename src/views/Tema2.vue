<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cocina de Centro América


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-5

        .row.align-items-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema2/1.svg", alt="alt")
          .col-lg
            p(data-aos="fade-up").mb-0 La cocina de Centro América se distingue por su uso de ingredientes autóctonos como el maíz, el plátano y las especias, que se combinan para crear platos llenos de sabor y tradición.

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Tacos

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/2.png", alt="alt").mb-4.mb-lg-0
          .col-lg-7
            p(data-aos="fade-up").mb-4 Tortilla de maíz rellena de carne u otras materias primas cárnicas, vegetales como el pimentón, cebollas y los infaltables cilantro y tomate, productos legendarios en la cocina mexicana.

            .p-4.bg-color-4
              .row.align-items-center.mb-4
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema2/3.svg", alt="alt")
                .col-lg
                  p(data-aos="fade-up").mb-0 La comida popular mexicana tiene gran aceptación a nivel mundial y parte del principio indígena del uso del maíz, como se puede constatar en la preparación de los tacos.

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Mofongo

        p(data-aos="fade-up").mb-4 Hablar de mofongo es casi como hablar de la música salsa de Puerto Rico.


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-5
            .tarjeta.bg-color-5.p-4.h-100
              p(data-aos="fade-up").mb-3 #[strong Ingredientes para 4 personas]

              ul.lista-ul--color
                li.mb-1
                  i.fas.fa-check-circle
                  | 1 plátano pintón.
                li.mb-1
                  i.fas.fa-check-circle
                  | 3 dientes de ajo.
                li.mb-1
                  i.fas.fa-check-circle
                  | 200 g de tocino de cerdo o 40 g de tocineta.
                li.mb-1
                  i.fas.fa-check-circle
                  | 1 g de pimienta.
                li.mb-1
                  i.fas.fa-check-circle
                  | 40 g de mantequilla.
                li.mb-1
                  i.fas.fa-check-circle
                  | 3 g de sal.
                li.mb-0
                  i.fas.fa-check-circle
                  | 100 ml de aceite de girasol.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/4.png", alt="alt").mt-4.mt-lg-0

        p(data-aos="fade-up").mb-4 El proceso de preparación es:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/5.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Pelar el plátano y cortarlo en troncos de 2 cm, freír en aceite caliente y reservar.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/6.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Pelar el ajo, cortarlo en <em>brunoise fino</em> (cuadros de 0,5 cm) y saltearlo junto con el tocino de cerdo previamente cortado en <em>small dice</em> (cuadros de 0,6 cm) y la mantequilla. Retirar y reservar.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/7.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Llevar todo a un mortero y hacer un puré con los ingredientes restantes.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/8.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Moldear en cilindros y consumir caliente, con pollo precocido, cerdo o camarones sobre él.


        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Arroz #[em Congrí]


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6
            .tarjeta.bg-color-2.p-4.h-100
              figure.mb-3.mt-lg-4
                img(src="@/assets/curso/tema2/9.svg", alt="alt", style="max-width: 76px")
              p(data-aos="fade-up").mb-0 Es un arroz mixto que combina costilla de cerdo, frijoles negros, pimentones, ajo, grasa de cerdo, comino, laurel, pimienta, cebolla y orégano. La importancia de este plato radica en la fusión de sabores lograda en el salteado a partir de grasa de cerdo, así como en el color y aroma que aportan los frijoles.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema2/10.png", alt="alt").mt-4.mt-lg-0

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
