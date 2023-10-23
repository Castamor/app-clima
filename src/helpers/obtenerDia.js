import { diasSemana } from '../data'

export const obtenerDia = (fechaActual) => {
    const dia = new Date(fechaActual * 1000).getDay()
    return diasSemana[dia]
}
