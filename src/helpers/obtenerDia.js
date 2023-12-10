import { SEMANA } from '../data/constantes'

export const obtenerDia = (fechaActual) => {
    const dia = new Date(fechaActual * 1000).getDay()
    return SEMANA[dia]
}
