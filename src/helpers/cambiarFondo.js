import { obtenerCicloDelCielo } from './obtenerCicloDelCielo'
import { ciclos } from '../data'
import { NADA } from '../constant/constantes'

export const cambiarFondo = (ciclo = NADA, clima, setClima) => {
    const body = document.querySelector('body').classList
    const nubes = document.querySelectorAll('.nube')

    if (ciclo === NADA) {
        ciclo = obtenerCicloDelCielo()
        // body.add(ciclo)
        setClima({
            ...clima,
            ciclo
        })
        return
    }

    body.forEach(elem => {
        if (Object.values(ciclos).includes(elem)) {
            body.remove(elem)
        }
    })

    if (clima.meteorologia === 'LLuvia') {
        nubes.forEach(nube => {
            nube.classList.add('brillo')
        })
    } else {
        nubes.forEach(nube => {
            nube.classList.remove('brillo')
        })
    }

    // body.add(ciclo)
    body.add('transicion')
}
