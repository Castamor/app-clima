import { CICLOS } from '../data/constantes'

export const obtenerCielo = (amanecer, atardecer, zonaHoraria) => {
    const obtenerPeriodo = (hora) => hora >= 12 ? 'p.m.' : 'a.m.'
    const formato12hrs = (hora) => {
        if (hora > 12) return hora - 12
        if (hora === 0) return 12
        return hora
    }
    const formatearMinuto = (minuto) => minuto < 10 ? ('0' + minuto) : minuto

    const textoHora = (hora, minutos) => `${formato12hrs(hora)}:${formatearMinuto(minutos)} ${obtenerPeriodo(hora)}`

    const margenHoras = Math.floor(zonaHoraria / 3600)
    const utcHora = new Date().getUTCHours()

    let horaActual = (utcHora + margenHoras) % 24
    if (horaActual < 0) {
        horaActual += 24
    }
    const minutosActual = new Date().getUTCMinutes()
    const txtHora = textoHora(horaActual, minutosActual)

    console.log('amanecer', amanecer)
    console.log('atardecer', atardecer)
    console.log('zonaHoraria', zonaHoraria)

    const horaAmanecer = 6
    const minutosAmanecer = new Date(amanecer * 1000).getMinutes()
    const txtAmanecer = textoHora(horaAmanecer, minutosAmanecer)

    const horaAtardecer = 17
    const minutosAtardecer = new Date(atardecer * 1000).getMinutes()
    const txtAtardecer = textoHora(horaAtardecer, minutosAtardecer)

    const margen = 1
    let cielo

    if (
        (horaActual >= horaAmanecer - margen) && (horaActual <= horaAmanecer + margen)
    ) cielo = CICLOS.amanecer

    if (
        (horaActual >= horaAmanecer + margen) && (horaActual <= horaAtardecer - margen)
    ) cielo = CICLOS.dia

    if (
        (horaActual >= horaAtardecer - margen) && (horaActual <= horaAtardecer + margen)
    ) cielo = CICLOS.atardecer

    if (
        (horaActual >= horaAtardecer + margen) || (horaActual <= horaAmanecer - margen)
    ) cielo = CICLOS.noche

    return { cielo, txtHora, txtAmanecer, txtAtardecer }
}
