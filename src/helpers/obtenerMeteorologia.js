import { ciclos, climas } from '../data'

export const obtenerMeteorologia = (idIcono, nombreClima, cielo) => {
    if (nombreClima === 'Clear') {
        cielo === ciclos.noche
            ? nombreClima = 'ClearNight'
            : nombreClima = 'ClearDay'
    }

    if (nombreClima === 'Clouds') {
        cielo === ciclos.noche
            ? nombreClima = 'CloudsNight'
            : nombreClima = 'CloudsDay'
    }

    nombreClima =
    idIcono === '50d'
        ? 'Atmosphere'
        : nombreClima

    const clima = climas.filter(clima => clima.id === nombreClima)[0]

    if (!clima) {
        const { icono, meteorologia } = climas.filter(clima => clima.id === 'Atmosphere')[0]
        return { icono, meteorologia }
    }

    const { icono, meteorologia } = clima

    return { icono, meteorologia }
}
