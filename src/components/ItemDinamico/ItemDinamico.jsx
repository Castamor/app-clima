import { useEffect, useState } from 'react'
import { CICLOS, METEOROLOGIAS } from '../../data/constantes'
import Estrellas from './Estrellas'
import Nublado from './Nublado'
import Pajaros from './Pajaros'
import Satelite from './Satelite'
import Niebla from './Niebla'

const estructura = {
    cielos: {
        [CICLOS.amanecer]: {
            satelite: {
                posicion: '-bottom-[15%] -right-[12.5%] sm:-bottom-[17.5%] sm:-right-[10%]'
            },
            colorCielo: 'bg-[#21678f]',
            haySol: false
        },
        [CICLOS.dia]: {
            satelite: {
                posicion: '-top-[12.5%] -right-[12.5%]'
            },
            colorCielo: 'bg-[#7dd3fc]',
            haySol: true
        },
        [CICLOS.atardecer]: {
            satelite: {
                posicion: '-bottom-[17.5%] -left-[10%]'
            },
            colorCielo: 'bg-[#a42b2b]',
            haySol: true
        },
        [CICLOS.noche]: {
            satelite: {
                posicion: '-top-[12.5%] -right-[12.5%]'
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
    const hayClimaDesconocido = meteorologia === METEOROLOGIAS.variado

    const [haySol, setHaySol] = useState(true)
    const [hayNubes, setHayNubes] = useState(false)
    const [colorCielo, setColorCielo] = useState('')
    const [posicionSatelite, setPosicionSatelite] = useState('')
    const [colorNubesPrimarias, setColorNubesPrimarias] = useState('')
    const [colorNubesSecundarias, setColorNubesSecundarias] = useState('')

    useEffect(() => {
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
        <section className={`${colorCielo} rounded-xl p-3 relative overflow-hidden fadeIn border-b-2 border-r-2 border-white/5`}>
            {hayClimaDesconocido
                ? <Niebla />
                : <>
                    <Satelite haySol={haySol} posicion={posicionSatelite} />

                    {haySol
                        ? <Pajaros/>
                        : <Estrellas meteorologia={meteorologia}/>
                    }

                    {hayNubes &&
                        <Nublado
                            ciclo={cielo}
                            meteorologia={meteorologia}
                            colorPrimarias={colorNubesPrimarias}
                            colorSecundarias={colorNubesSecundarias}
                        />
                    }
                </>
            }
        </section>
    )
}

export default ItemDinamico
