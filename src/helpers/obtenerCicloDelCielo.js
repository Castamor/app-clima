import { ciclos } from '../data'

export const obtenerCicloDelCielo = segundos => {
    let horaLocal = 0

    if (!segundos) {
        horaLocal = new Date().getHours()
    } else {
        const horaRelativa = segundos / 3600
        const horaUTC = Number(new Date().toISOString().split('T')[1].substring(0, 2))

        horaRelativa < 0
            ? horaLocal = 24 + horaUTC - (-horaRelativa)
            : horaLocal = horaUTC + horaRelativa

        horaLocal =
            horaLocal > 24
                ? horaLocal - 24
                : horaLocal
    }

    let ciclo = ciclos.noche
    if (horaLocal >= 5 & horaLocal <= 8) {
        ciclo = ciclos.amanecer
    }

    if (horaLocal >= 9 & horaLocal <= 17) {
        ciclo = ciclos.dia
    }

    if (horaLocal >= 18 & horaLocal < 19) {
        ciclo = ciclos.atardecer
    }

    return ciclo
}
