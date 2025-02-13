<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Normas de higiene



      p(data-aos="fade-up").mb-4 Las normas de higiene en la cocina son esenciales para garantizar la seguridad y la calidad en la preparación de alimentos. Entre las principales recomendaciones se encuentran:


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
