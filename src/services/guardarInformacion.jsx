import { obtenerDatosClima } from '../helpers/obtenerDatosClima'

export const guardarInformacion = ({ respuesta, setClima }) => {
    const { name, state, temp, feels_like, humidity, description, main, timezone, icon } = respuesta
    const [ciclo, { icono, meteorologia }] = obtenerDatosClima(icon, main, timezone)

    setClima({
        icono,
        ciudad: name,
        estado: state,
        temp: Math.round(temp),
        sensacion: Math.round(feels_like),
        humedad: humidity,
        meteorologia,
        descripcion: description,
        ciclo,
        contenido: true
    })
}
