import { useEffect, useState } from 'react'
import { CICLOS, METEOROLOGIAS } from '../../data/constantes'
import Estrellas from './Estrellas'
import Nublado from './Nublado'
import Pajaros from './Pajaros'
import Satelite from './Satelite'
import Niebla from './Niebla'

const colores = {
    sol: 'text-[#ffc95e]',
    luna: 'text-[#8b8cb0]'
}

const estructura = {
    cielos: {
        [CICLOS.amanecer]: {
            satelite: {
                color: colores.luna,
                posicion: '-bottom-[1.75rem] -right-[1rem]'
            },
            colorCielo: 'bg-[#21678f]',
            haySol: false
        },
        [CICLOS.dia]: {
            satelite: {
                color: colores.sol,
                posicion: '-top-[1.25rem] -right-[1.25rem]'
            },
            colorCielo: 'bg-[#7dd3fc]',
            haySol: true
        },
        [CICLOS.atardecer]: {
            satelite: {
                color: colores.sol,
                posicion: '-bottom-[1.75rem] -left-[1rem]'
            },
            colorCielo: 'bg-[#a42b2b]',
            haySol: true
        },
        [CICLOS.noche]: {
            satelite: {
                color: colores.luna,
                posicion: '-top-[1.25rem] -right-[1.25rem]'
            },
            colorCielo: 'bg-[#132f70]',
            haySol: false
        }
    },
    nubes: {
        [METEOROLOGIAS.nublado]: {
            primarias: 'text-slate-300',
            secundarias: 'text-slate-400'
        },
        [METEOROLOGIAS.llovizna]: {
            primarias: 'text-slate-400',
            secundarias: 'text-slate-500'
        },
        [METEOROLOGIAS.lluvia]: {
            primarias: 'text-slate-500',
            secundarias: 'text-slate-600'
        },
        [METEOROLOGIAS.tormenta]: {
            primarias: 'text-slate-600',
            secundarias: 'text-slate-700'
        },
        [METEOROLOGIAS.nieve]: {
            primarias: 'text-[#77b4ff]',
            secundarias: 'text-[#4b9cff]'
        }
    }
}

const ItemDinamico = ({ cielo, meteorologia }) => {
    const [haySol, setHaySol] = useState(true)
    const [hayNubes, setHayNubes] = useState(false)
    const [colorCielo, setColorCielo] = useState('')
    const [colorSatelite, setColorSatelite] = useState('')
    const [posicionSatelite, setPosicionSatelite] = useState('')
    const [colorNubesPrimarias, setColorNubesPrimarias] = useState('')
    const [colorNubesSecundarias, setColorNubesSecundarias] = useState('')

    const hayClimaDesconocido = meteorologia === METEOROLOGIAS.variado

    useEffect(() => {
        setColorSatelite(estructura.cielos[cielo].satelite.color)
        setPosicionSatelite(estructura.cielos[cielo].satelite.posicion)

        if (estructura.cielos[cielo]) {
            setColorCielo(estructura.cielos[cielo].colorCielo)
            setHaySol(estructura.cielos[cielo].haySol)
        } else {
            setColorCielo(estructura.cielos[CICLOS.dia].colorCielo)
        }
    }, [cielo])

    useEffect(() => {
        const nubes = estructura.nubes[meteorologia]

        if (nubes) {
            setColorNubesPrimarias(nubes.primarias)
            setColorNubesSecundarias(nubes.secundarias)
            setHayNubes(true)
        } else {
            setHayNubes(false)
        }
    }, [meteorologia])

    return (
        <section className={`${colorCielo} rounded-xl p-3 relative overflow-hidden fadeIn`}>
            {hayClimaDesconocido
                ? <Niebla />
                : <>
                    <Satelite color={colorSatelite} posicion={posicionSatelite} />

                    {haySol
                        ? <Pajaros />
                        : <Estrellas meteorologia={meteorologia}/>
                    }

                    {hayNubes &&
                    <Nublado
                        ciclo={cielo}
                        meteorologia={meteorologia}
                        nubesPrimarias={colorNubesPrimarias}
                        nubesSecundarias={colorNubesSecundarias}
                    />
                    }
                </>
            }
        </section>
    )
}

export default ItemDinamico
