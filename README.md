# Consultar el clima en la web
Esta es una página web que permite la búsqueda de una ciudad de cualquier parte del mundo, el objetivo es obtener información acerca del clima/meteorología de la ciudad e información relacionada a ello.

## Aprendizajes de este proyecto
El próposito de este proyecto es tomar experiencia con el uso de React al utilizar hooks como el de contextAPI, uso de customHooks para poder consumir este contexto y el uso de useEffects; Además de exponerme a retos como el de procesar distintos tipos de información proporcionados por la API (procesar fechas y sistemas metricos) y la optimización de los recursos utilizados como los logos y svg's.
Por último, me ayudo a aprender buenas prácticas para hacer consultas a una API de manera eficiente y efectiva.

## Funcionamiento
Funciona en base a un formulario muy sencillo que contiene un input en dónde únicamente se escribe el nombre de una ciudad, cuenta con validación para no hacer consultas vacías a la API, además de mostrar retroalimentación en caso de que lo introducido en el input no sea correcto (muestra un mensaje diciendo que no es necesario agregar el país o alguna información extra para así orientar al usuario a realizar búsquedas correctamente).

![Formulario](https://github.com/Castamor/app-clima/assets/141193208/a152ad48-0271-4943-a7e2-f73fc183bfe2)

Además mencionar que este proyecto utiliza la [API de OpenWeatherMap](https://openweathermap.org/api) haciendo fetch a dos servicios que son los de *Clima Actual* y *Climas Previstos*.

## Resultados
**La información que se muestra es la siguiente:**
- Meteorología
- Temperatura
- Temperatura mínima y máxima del día
- Hora actual, del amanecer y atardecer
- Sensación térmica
- Humedad
- Velocidad del viento
- Presion en Pascales
- Meteorología de los siguientes cinco días

### Cuadro Dinámico
Contiene un **Cuadro Dinámico** que tiene muchas variaciones y toma en cuenta dos cosas: *la hora del día y el clima*.

Hay cuatro variaciones respecto al cielo, y pueden ser:
- Amanecer
- Día
- Atardecer
- Noche

Cada una afecta el color del cielo y también en base a eso se decide si se muestra el sol o la luna.

Hay siente variaciones respecto al clima, y pueden ser:
- Despejado
- Nublado
- Nieve
- Llovizna
- Lluvia
- Tormenta
- Variado

Por ejemplo, si el cielo está despejado se mostrarán pajaros o estrellas dependiendo de la hora del día, si está nublado se mostrarán nubes claras pero si hay tormenta las nubes serán oscuras, con rayos y gotas de lluvia. Hay muchas variaciones respecto a este cuadro dinámico y tomé en consideración muchas condiciones para saber que se mostrará dependiendo del clima que haya **e invito a buscar en distintas ciudades para observar como cambia este cuadro**.

![Resultado](https://github.com/Castamor/app-clima/assets/141193208/caec7620-53f4-4045-a2c1-e67d397ab08d)

## Tecnologías
Se utilizaron tecnologías como:
- React
- TailwindCSS
- Vite
- Eslint
- PostCSS
- Netlify

###### README.md - Versión 6 (mejora en la claridad de información)
