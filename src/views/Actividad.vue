<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diversidad gastronómica de américa',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar las características principales de las preparaciones tradicionales de las cocinas de Norteamérica, Centroamérica y Sudamérica.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el ingrediente clave que debe predominar en el <em>Clam Chowder</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crema de leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almejas frescas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Papas en médium dice.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Perejil fresco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué ciudad es conocida como el lugar de origen de la barbacoa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nueva York.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Miami.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Virginia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los Ángeles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de masa se utiliza para preparar la <em>Tourtiere</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Masa de hojaldre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Masa hecha con harina de trigo y mantequilla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Masa de maíz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Masa de papa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué ingrediente es opcional en el puré de papa de la causa peruana?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cilantro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ají amarillo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tomate.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mayonesa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué tipo de salchicha es típica en la <em>Jambalaya</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salchicha italiana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salchicha andouille.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Salchicha alemana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Salchicha polaca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué país considera el hornado de chancho como un plato tradicional?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'México.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Argentina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ecuador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Chile.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué carne se enrolla en el <em>matambre</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carne de cerdo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carne de pollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carne de pescado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carne de ternera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué ingredientes forman la base del arroz <em>congrí</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Frijoles rojos y arroz blanco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frijoles pintos y arroz integral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Frijoles negros y arroz blanco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frijoles negros y arroz mezclado con grasa de cerdo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿El ceviche es originario exclusivamente de México?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Las pupusas son similares a las arepas y son típicas de El Salvador?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué condimento se utiliza para darle brillo a la masa superior de la <em>Tourtiere</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Huevo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantequilla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crema de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué ingrediente le aporta color al arroz <em>congrí</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cilantro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frijoles negros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pimienta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cebolla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué se utiliza para sazonar el hornado de chancho antes de hornearlo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerveza y cilantro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Chicha, limón, ajo y pimienta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Vinagre y comino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Chiles y cebolla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué tipo de pan se utiliza en el choripán argentino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pan integral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pan de molde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pan baguette.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pan ciabatta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué técnica de corte se usa para las hojas grandes en la preparación de la causa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Concasse</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Small dice</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Chiffonade</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Brunoise</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
