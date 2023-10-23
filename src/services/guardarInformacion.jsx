import { obtenerCielo } from '../helpers/obtenerCielo'
import { obtenerMeteorologia } from '../helpers/obtenerMeteorologia.js'
export const guardarInformacion = ({ respuesta, setClima }) => {
    const { estado, climaActual, climaPrevisto } = respuesta

    // Extraer información
    const { dt: horaActual, name: ciudad } = climaActual
    const { sunrise: amanecer, sunset: atardecer } = climaActual.sys
    const { temp, temp_max, temp_min, feels_like: sensacion, humidity: humedad, pressure: presion } = climaActual.main
    const { description: descripcion, main: nombreClima, icon: idIcono } = climaActual.weather[0]
    const { speed: velocidadViento } = climaActual.wind

    const cielo = obtenerCielo(horaActual, amanecer, atardecer)
    const { icono, meteorologia } = obtenerMeteorologia(idIcono, nombreClima, cielo)

    const diasPrevistos = climaPrevisto.list.filter((_, index) => (index + 1) % 8 === 0)

    const infoClimaActual = {
        ciudad,
        estado,
        cielo,
        temp: Math.round(temp),
        temp_min: Math.round(temp_min),
        temp_max: Math.round(temp_max),
        sensacion: Math.round(sensacion),
        humedad,
        presion,
        velocidadViento,
        icono,
        meteorologia,
        descripcion
    }

    console.log(infoClimaActual)
}
