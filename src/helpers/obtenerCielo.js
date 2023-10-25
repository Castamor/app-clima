import { ciclos } from '../data'

export const obtenerCielo = (hora, amanecer, atardecer, zonaHoraria) => {
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

    const horaAmanecerMala = new Date(amanecer * 1000).getHours() + 1
    const horaAmanecer = (utcHora + margenHoras + horaAmanecerMala) % 25
    const minutosAmanecer = new Date(amanecer * 1000).getMinutes()
    const txtAmanecer = textoHora(horaAmanecer, minutosAmanecer)

    const horaAtardecerMala = new Date(atardecer * 1000).getHours()
    const horaAtardecer = (utcHora + margenHoras + horaAtardecerMala) % 25
    const minutosAtardecer = new Date(atardecer * 1000).getMinutes()
    const txtAtardecer = textoHora(horaAtardecer, minutosAtardecer)

    const margen = 0.5 // 1 hora de margen
    let cielo

    if (
        (horaActual >= horaAmanecer - margen) && (horaActual <= horaAmanecer + margen)
    ) cielo = ciclos.amanecer

    if (
        (horaActual >= horaAmanecer + margen) && (horaActual <= horaAtardecer - margen)
    ) cielo = ciclos.dia

    if (
        (horaActual >= horaAtardecer - margen) && (horaActual <= horaAtardecer + margen)
    ) cielo = ciclos.atardecer

    if (
        (horaActual >= horaAtardecer + margen) || (horaActual <= horaAmanecer - margen)
    ) cielo = ciclos.noche

    return { cielo, txtHora, txtAmanecer, txtAtardecer }
}
