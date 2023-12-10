import { obtenerCielo } from '../helpers/obtenerCielo'
import { obtenerDia } from '../helpers/obtenerDia'
import { obtenerMeteorologia } from '../helpers/obtenerMeteorologia.js'

export const guardarInformacion = ({ respuesta, setInfoClima }) => {
    const { estado, infoClimaActual, infoClimaPrevisto } = respuesta

    // Extraer información
    const { name: ciudad, timezone: zonaHoraria } = infoClimaActual
    const { sunrise: amanecer, sunset: atardecer } = infoClimaActual.sys
    const { temp, temp_max, temp_min, feels_like: sensacion, humidity: humedad, pressure: presion } = infoClimaActual.main
    const { description: descripcion, main: nombreClima, icon: idIcono } = infoClimaActual.weather[0]
    const { speed: velocidadViento } = infoClimaActual.wind

    const { cielo, txtHora, txtAmanecer, txtAtardecer } = obtenerCielo(amanecer, atardecer, zonaHoraria)
    const { icono, meteorologia } = obtenerMeteorologia(idIcono, nombreClima, cielo)

    const climaActual = {
        ciudad,
        estado,
        horas: {
            cielo,
            actual: txtHora,
            amanecer: txtAmanecer,
            atardecer: txtAtardecer
        },
        temperaturas: {
            temp: Math.round(temp),
            temp_min: Math.round(temp_min),
            temp_max: Math.round(temp_max)
        },
        condiciones: {
            icono,
            meteorologia,
            descripcion,
            sensacion: Math.round(sensacion),
            humedad,
            presion,
            velocidadViento
        }
    }

    const climaPrevisto = infoClimaPrevisto.list.filter((_, index) => (index + 1) % 8 === 0).map(datos => {
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
        climaActual,
        climaPrevisto,
        contenido: true
    })
}
