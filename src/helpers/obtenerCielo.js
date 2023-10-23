import { ciclos } from '../data'

export const obtenerCielo = (horaActual, amanecer, atardecer) => {
    const hora = new Date(horaActual * 1000).getHours()
    const horaAmanecer = new Date(amanecer * 1000).getHours()
    const horaAtardecer = new Date(atardecer * 1000).getHours()

    const margen = 1 // 1 hora de margen

    if (
        (hora >= horaAmanecer - margen) && (hora <= horaAmanecer + margen)
    ) return ciclos.amanecer

    if (
        (hora >= horaAmanecer + margen) && (hora <= horaAtardecer - margen)
    ) return ciclos.dia

    if (
        (hora >= horaAtardecer - margen) && (hora <= horaAtardecer + margen)
    ) return ciclos.atardecer

    if (
        (hora >= horaAtardecer + margen) || (hora <= horaAmanecer - margen)
    ) return ciclos.noche
}
