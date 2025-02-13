<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cocina internacional


    .row.justify-content-center.align-items-center.my-5
      .col-lg
        p(data-aos="fade-up").mb-4 La cocina internacional refleja una fusión de tradiciones, ingredientes y técnicas provenientes de diversas culturas alrededor del mundo. Cada país aporta su identidad única a través de sus sabores, recetas e historias, enriqueciendo el panorama culinario global. A continuación, se presenta una breve descripción de las cocinas de algunos países destacados:

      .col-lg-auto
        figure
          img(src='@/assets/curso/tema3/1.svg', style="max-width: 94px", alt='').m-auto


    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Argentina" :icono="require('@/assets/curso/tema3/2.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Argentina
            p Influenciada por las culturas indígena, árabe, española, italiana, alemana, británica y judía. Destacan los asados y el bifé de chorizo, preparados con atención al tipo de parrilla y al tiempo de cocción. La influencia italiana se refleja en el consumo de pastas y pizzas. La papa fue popularizada gracias a una campaña de Evita Perón.
        
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/6.png', alt='').m-auto

      .py-4.py-md-5(titulo="España" :icono="require('@/assets/curso/tema3/3.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 España
            p Fusiona culturas árabe, americana y mediterránea. El aceite de oliva extra virgen es un ingrediente esencial. La paella, con base de arroz y azafrán, es un plato emblemático. El vino y los quesos son acompañantes destacados. Papas y tomates llegaron con la conquista de América.
        
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/7.png', alt='').m-auto

      .py-4.py-md-5(titulo="Turquía" :icono="require('@/assets/curso/tema3/4.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Turquía
            p Con una ubicación entre Asia y Europa, es un puente entre las cocinas árabe, persa, india y del Medio Oriente. Se caracteriza por su uso de especias como el comino y la pimienta, junto con verduras y aceite de oliva. Sus platos son variados, sanos y equilibrados.
        
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/8.png', alt='').m-auto

      .py-4.py-md-5(titulo="México" :icono="require('@/assets/curso/tema3/5.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 México
            p Surge de una mezcla prehispánica y española, rica en color, textura y sabor. Se distingue por sabores fuertes y picantes, como los chiles, tortillas de maíz y totopos. El chile es el elemento picante principal, y las aguas de frutos o semillas, como el agua de Jamaica, son bebidas típicas.
        
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/9.png', alt='').m-auto


    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p(data-aos="fade-up").mb-4 En el primer capítulo de Cocina Internacional, se explora la riqueza de la gastronomía española a través de un recorrido por sus tradiciones, sabores y platos icónicos. Este episodio analiza cómo ingredientes históricos como la paella y elementos culturales presentes en las obras de Cervantes y Dalí han dado forma a la cocina española. Además, muestra cómo es posible disfrutar de estas experiencias culinarias en Bogotá. Se invita a los interesados a descubrir los secretos de esta tradición y conocer su impacto en la cultura global.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/10.png', alt='').m-auto


        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2u-KBW0SnQI?si=xI54RZd6F6aK1QyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
