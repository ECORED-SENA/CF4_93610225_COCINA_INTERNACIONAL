<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Cocina de Norte América


      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-5
          .row.align-items-center.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/1.svg", alt="alt")
            .col-lg
              p(data-aos="fade-up").mb-0 La cocina de Norte América es rica en sabores y tradiciones que reflejan la diversidad cultural de la región. A continuación, se presentan algunas preparaciones icónicas de Estados Unidos y Canadá.

          .titulo-tres.mb-4(data-aos="flip-up").mb-4
            h4 #[em Clam Chowder]

          .row.justify-content-center.align-items-center.my-5
            .col-lg-7
              p(data-aos="fade-up").mb-4 Esta rica sopa, consumida principalmente en invierno en Estados Unidos, debe elaborarse con una crema blanca a base de un salteado de tocineta, apio, papa en médium dice (corte en cuadros medianos de 1,2 cm), crema de leche, perejil fresco, cebolla cabezona, harina de trigo, laurel y, por supuesto, almejas.

              .p-4.bg-color-4
                p(data-aos="fade-up").mb-0 Existen diferentes tipos de chowder. El mencionado anteriormente se conoce como el chowder propio de Nueva Inglaterra (Estados Unidos). Se caracteriza por ser de bastante contenido calórico, ideal para los días fríos. La clave de esta preparación está en la frescura de las almejas, cuya calidad debe predominar.

            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/2.png", alt="alt")


      .titulo-tres.mb-4(data-aos="flip-up").mb-4
        h4 #[em Barbacoa]

      p(data-aos="fade-up").mb-4 Virginia (Estados Unidos) es el lugar donde, según la historia, se originó esta fantástica preparación de costillas de cerdo hechas a la parrilla de carbón en una cocción lenta, incluso tapadas para generar una cámara caliente que permite que la costilla obtenga una cocción profunda hasta el hueso. Cabe recordar que el cerdo en sus diferentes cortes debe consumirse bien asado.

      TabsA.color-acento-botones
        .tarjeta(titulo="Ingredientes")
          div(style="background-color: #F3F0EA").p-4.h-100.rounded-top.rounded-bottom
            h4 Ingredientes

            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle
                | 1 litro de agua.
              li.mb-0
                i.fas.fa-check-circle
                | 50 gramos de sal.
              li.mb-0
                i.fas.fa-check-circle
                | Un corte ancho de 2.000 gramos de costilla de cerdo entera.

        .tarjeta(titulo="Proceso")
          
          .row.justify-content-center.align-items-stretch
            .col-lg-7
              div(style="background-color: #F3F0EA").p-4.h-100
                h4 Proceso

                p Dejar la costilla en la mezcla disuelta en agua y sal por 45 minutos. Recuerde que al llevarla a la parrilla, el carbón no debe presentar llama, sino un color rojo intenso, teniendo en cuenta las precauciones de seguridad. En la parrilla, estas costillas tomarán un mínimo de 30 minutos. En la parte final se les añadirá una salsa elaborada a partir de salsa de tomate, pimienta de cayena, una pequeña cantidad de vinagre blanco, azúcar morena, cebolla, puré de tomates frescos y ajo. Al fuego y previamente salteados los vegetales, se reducirá hasta obtener una salsa espesa y brillante.
            
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/3.png", alt="alt")


      .titulo-tres.mb-4(data-aos="flip-up").mb-4
        h4 #[em Tourtiere]

      p(data-aos="fade-up").mb-4 Es una tarta salada de origen canadiense, típica de la ciudad de Quebec, que tiene una alta influencia de la cocina francesa.

      .row.justify-content-center.align-items-stretch.my-5
        .col-lg-6
          figure
            img(src="@/assets/curso/tema1/4.png", alt="alt")

        .col-lg-6
          .tarjeta.bg-color-5.p-4.h-100
            p(data-aos="fade-up").my-4 El proceso de preparación es: 

            ul.lista-ul--color
              li.mb-1
                i.fas.fa-check-circle
                | Hacer una masa con harina de trigo y mantequilla.
              li.mb-1
                i.fas.fa-check-circle
                | Engrasar un molde o refractaria, en cuyo fondo se estirará esta masa cruda similar a una galleta de sal.
              li.mb-1
                i.fas.fa-check-circle
                | Finalizar con una capa de masa sobre el relleno, abrillantar esta superficie con huevo y llevar al horno a 200 °C por 20 minutos.
              li.mb-1
                i.fas.fa-check-circle
                | Retirar del horno y dejar enfriar antes de desmoldar, para evitar que el producto se rompa.



























      


      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-5

          .carousel-bg
            .row.justify-content-center.align-items-center.my-5
              .col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/1.png', style="max-width: 300px", alt='').m-auto
              .col-lg-8
                
                SlyderF.mb-5(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in-up")
                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/2.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Lavado de manos
                    p.text-center Lávese las manos con agua y jabón, asegurándose de secarlas completamente.


                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/3.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Uso de accesorios
                    p.text-center No utilice anillos, relojes ni pulseras en la cocina o durante el proceso de preparación.

                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/4.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Cuidado de las uñas
                    p.text-center Mantenga las uñas limpias y cortas.

                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/5.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Cabello recogido
                    p.text-center Asegúrese de que el cabello esté completamente recogido.


                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/6.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Ropa ajustada
                    p.text-center Evite usar ropa suelta, especialmente cerca del fuego.

                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/7.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Pruebas de alimentos
                    p.text-center Use una cuchara para probar los alimentos, lavándola inmediatamente después de usarla.

                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/8.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Almacenamiento de utensilios
                    p.text-center Guarde los utensilios de manera ordenada en un lugar específico.

                  .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema1/9.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    div(style="background-color: #E8F5D5").d-inline-block.px-2.py-1.mb-3
                      h5.text-center.mb-0.text-color-black Higiene al estornudar
                    p.text-center No estornude sobre los alimentos; lávese las manos después y evite tocarse la nariz.                                        


      .titulo-tres.mb-4(data-aos="flip-up").mb-4
        h4 Normas de seguridad

      p(data-aos="fade-up").mb-4 Cumplir con las normas de seguridad en la cocina es fundamental para prevenir accidentes y garantizar un entorno adecuado para trabajar. Entre las principales recomendaciones se encuentran:

      .row.justify-content-center.align-items-center.my-5
        .col-lg-9(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-2")
            div(titulo="Uso de equipos eléctricos y a gas")
              p Asegúrese de que sus manos estén secas antes de usar aparatos eléctricos. Ventile los dispositivos que funcionen con gas antes de usarlos. Realice mantenimientos periódicos a los aparatos eléctricos para prevenir accidentes.
            
            div(titulo="Ubicación y orden")
              p No deje utensilios fuera del borde de la mesa de trabajo. Mantenga las toallas alejadas del fuego. Mantenga el piso y los pasillos limpios y sin objetos que puedan causar accidentes.

            div(titulo="Herramientas y utensilios de corte")
              p Mantenga los cuchillos en un lugar seguro y en perfecto orden. Mantenga las herramientas afiladas, con protecciones en los extremos y mangos antideslizantes.
            
            div(titulo="Prevención de accidentes")
              p No corra dentro ni fuera de la cocina ni en escaleras o pasillos. Use guantes, mandiles y chaquetillas para evitar quemaduras. No fume ni utilice líquidos inflamables dentro de la cocina.

            div(titulo="Medidas de emergencia")
              p Asegúrese de que la cocina tenga señalización adecuada, elementos para extinguir incendios y un plan de emergencias. Disponga de un botiquín visible con elementos vigentes y en buen estado.
        .col-lg-3
          figure
            img(src='@/assets/curso/tema1/10.png', style="max-width: 300px", alt='', data-aos="zoom-in").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
