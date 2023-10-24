import { obtenerCielo } from '../helpers/obtenerCielo'
import { obtenerDia } from '../helpers/obtenerDia'
import { obtenerMeteorologia } from '../helpers/obtenerMeteorologia.js'

export const guardarInformacion = ({ respuesta, setInfoClima }) => {
    const { estado, climaActual, climaPrevisto } = respuesta

    // Extraer información
    const { dt: horaActual, name: ciudad } = climaActual
    const { sunrise: amanecer, sunset: atardecer } = climaActual.sys
    const { temp, temp_max, temp_min, feels_like: sensacion, humidity: humedad, pressure: presion } = climaActual.main
    const { description: descripcion, main: nombreClima, icon: idIcono } = climaActual.weather[0]
    const { speed: velocidadViento } = climaActual.wind

    const cielo = obtenerCielo(horaActual, amanecer, atardecer)
    const { icono, meteorologia } = obtenerMeteorologia(idIcono, nombreClima, cielo)

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

    const infoDiasPrevistos = climaPrevisto.list.filter((_, index) => (index + 1) % 8 === 0).map(datos => {
        const { dt } = datos
        const { temp } = datos.main
        const { icon, main } = datos.weather[0]

        const dia = obtenerDia(dt)
        const { icono, meteorologia } = obtenerMeteorologia(icon, main, cielo)

        return {
            dia,
            icono,
            temp: Math.round(temp),
            meteorologia
        }
    })

    setInfoClima({
        infoClimaActual,
        infoDiasPrevistos,
        contenido: true
    })
}
