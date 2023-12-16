Página web que permite la búsqueda de una ciudad de cualquier parte del mundo para obtener información acerca de su clima. Funciona en base a un formulario sencillo en dónde únicamente se escribe el nombre de una ciudad (No es necesario agregar el país o alguna información extra).

**La información que se muestra es la siguiente:**
- Meteorología (Despejado, Nublado, Llovizna, Lluvia, Tormenta, Variado)
- Temperatura
- Temperatura mínima y máxima del día
- Hora actual, del amanecer y atardecer
- Sensación térmica
- Humedad
- Velocidad del viento
- Presion en Pascales
- Meteorología de los siguientes cinco días

Tambié contiene un **Cuadro Dinámico** que se adapta al ciclo del cielo y la meteorología que haya en ese momento en la ciudad buscada; Contiene muchas variaciones y toma en cuenta dos cosas: *la hora del día y el clima*.

Hay cuatro variaciones respecto al cielo, pueden ser: *Amanecer, Día, Atardecer y Noche*. (Cada una afecta el color del cielo y también si se muestra la luna o el sol).

Respecto a las variaciones de clima estas se basan en las propias meteorologías. Por ejemplo, si el cielo está despejado se mostrarán pajaros o estrellas dependiendo de la hora del día, si está nublado se mostrarán nubes claras pero si hay tormenta las nubes serán oscuras, con rayos y gotas de lluvia. Hay muchas variaciones respecto a este cuadro dinámico y tomé en consideración muchas condiciones para saber que se mostrará dependiendo del clima que haya e invito a buscar en distintas ciudades para observar como cambia este cuadro.

Este proyecto utiliza la [API de OpenWeatherMap](https://openweathermap.org/api) haciendo fetch a dos servicios que son los de *Clima Actual* y *Climas Previstos*

Se utilizaron técnologías como: React, TailwindCSS, Vite, Eslint y PostCSS. Además usando los servicios de Netlify para desplegar el proyecto.

![Formulario Página Principal](/public/formulario-pagina-princial.png)
![Resultados](/public/resultados.png)
