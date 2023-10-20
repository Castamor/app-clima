import { climas, ciclos } from '../data'
import { NADA, VACIO } from '../constant/constantes'
import { obtenerCicloDelCielo } from './obtenerCicloDelCielo'

export const obtenerDatosClima = (idIcono = NADA, nombreClima = NADA, segundos = VACIO) => {
    const ciclo = obtenerCicloDelCielo(segundos)

    if (nombreClima === 'Clear') {
        ciclo === ciclos.noche
            ? nombreClima = 'ClearNight'
            : nombreClima = 'ClearDay'
    }

    if (nombreClima === 'Clouds') {
        ciclo === ciclos.noche
            ? nombreClima = 'CloudsNight'
            : nombreClima = 'CloudsDay'
    }

    nombreClima =
    idIcono === '50d'
        ? 'Atmosphere'
        : nombreClima

    return [ciclo, climas.filter(clima => clima.id === nombreClima)[0]]
}
