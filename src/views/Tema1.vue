<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Cocina de Norte América

      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/1.svg", alt="alt")
            .col-lg
              p(data-aos="fade-up").mb-0 La cocina de Norte América es rica en sabores y tradiciones que reflejan la diversidad cultural de la región. A continuación, se presentan algunas preparaciones icónicas de Estados Unidos y Canadá.
          
          Separador

          #t_1_1
          .titulo-segundo.color-acento-contenido(data-aos="flip-up")
            h2 1.1 #[em Clam Chowder]

          .row.justify-content-center.align-items-center
            .col-lg-7
              p(data-aos="fade-up").mb-4 Esta rica sopa, consumida principalmente en invierno en Estados Unidos, debe elaborarse con una crema blanca a base de un salteado de tocineta, apio, papa en <em>médium dice</em> (corte en cuadros medianos de 1,2 cm), crema de leche, perejil fresco, cebolla cabezona, harina de trigo, laurel y, por supuesto, almejas.

              .tarjeta.p-4.bg-color-4
                p(data-aos="fade-up").mb-0 Existen diferentes tipos de <em>chowder</em>. El mencionado anteriormente se conoce como el <em>chowder</em> propio de Nueva Inglaterra (Estados Unidos). Se caracteriza por ser de bastante contenido calórico, ideal para los días fríos. La clave de esta preparación está en la frescura de las almejas, cuya calidad debe predominar.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/2.png", alt="alt").mt-4.mt-lg-0

          Separador

          #t_1_2
          .titulo-segundo.color-acento-contenido(data-aos="flip-up")
            h2 1.2 #[em Barbacoa]

          p(data-aos="fade-up").mb-0 Virginia (Estados Unidos) es el lugar donde, según la historia, se originó esta fantástica preparación de costillas de cerdo hechas a la parrilla de carbón en una cocción lenta, incluso tapadas para generar una cámara caliente que permite que la costilla obtenga una cocción profunda hasta el hueso. Cabe recordar que el cerdo en sus diferentes cortes debe consumirse bien asado.

      TabsA.color-acento-botones
        .tarjeta(titulo="Ingredientes")

          .row.justify-content-center.align-items-stretch
            .col-lg-8
              .tarjeta(style="background-color: #F3F0EA").p-4.h-100
                h4 Ingredientes

                ul.lista-ul--color
                  li.d-flex.mb-0
                    i.fas.fa-check-circle
                    | 1 litro de agua.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle
                    | 50 gramos de sal.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle
                    | Un corte ancho de 2.000 gramos de costilla de cerdo entera.
            .col-lg-4.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/3.png", alt="alt")

        .tarjeta(titulo="Proceso")
          
          .row.justify-content-center.align-items-stretch
            .col-lg-8
              .tarjeta(style="background-color: #F3F0EA").p-4.h-100
                h4 Proceso

                p Dejar la costilla en la mezcla disuelta en agua y sal por 45 minutos. Recuerde que al llevarla a la parrilla, el carbón no debe presentar llama, sino un color rojo intenso, teniendo en cuenta las precauciones de seguridad. En la parrilla, estas costillas tomarán un mínimo de 30 minutos. En la parte final se les añadirá una salsa elaborada a partir de salsa de tomate, pimienta de cayena, una pequeña cantidad de vinagre blanco, azúcar morena, cebolla, puré de tomates frescos y ajo. Al fuego y previamente salteados los vegetales, se reducirá hasta obtener una salsa espesa y brillante.
            
            .col-lg-4.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/3.png", alt="alt")

      Separador

      #t_1_3
      .titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 #[em Tourtiere]

      p(data-aos="fade-up").mb-4 Es una tarta salada de origen canadiense, típica de la ciudad de Quebec, que tiene una alta influencia de la cocina francesa.

      .row.justify-content-center.align-items-stretch.mt-5
        .col-lg-6
          figure
            img(src="@/assets/curso/tema1/4.png", alt="alt").mb-4.mb-lg-0

        .col-lg-6
          .tarjeta.bg-color-5.p-4.h-100
            p(data-aos="fade-up").my-4 El proceso de preparación es: 

            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                | Hacer una masa con harina de trigo y mantequilla.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                | Engrasar un molde o refractaria, en cuyo fondo se estirará esta masa cruda similar a una galleta de sal.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                | Finalizar con una capa de masa sobre el relleno, abrillantar esta superficie con huevo y llevar al horno a 200 °C por 20 minutos.
              li.d-flex.mb-1
                i.fas.fa-check-circle
                | Retirar del horno y dejar enfriar antes de desmoldar, para evitar que el producto se rompa.

      Separador

      #t_1_4
      .titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 #[em Jambalaya]

      p(data-aos="fade-up").mb-4 Esta preparación a base de arroz proviene de la ciudad de Louisiana en Estados Unidos. Presenta sabores predominantes de tomate, diversas pimientas, apio, cebolla y ajo, pollo, y una salchicha muy popular para este plato conocida como <em>andouille</em> o alguna salchicha picante.


      .row.justify-content-center.align-items-stretch.my-5
        .col-lg-6
          .tarjeta.bg-color-2.p-4.h-100
            figure.mb-3.mt-lg-5
              img(src="@/assets/curso/tema1/5.svg", alt="alt", style="max-width: 76px")
            p(data-aos="fade-up").mb-0 En sus orígenes, y haciendo uso de los pantanos de la zona, este arroz se preparaba con cocodrilo, cangrejos, siervos, camarones, otros mariscos y pescados.

        .col-lg-6
          figure
            img(src="@/assets/curso/tema1/4.png", alt="alt").mt-4.mt-lg-0

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
