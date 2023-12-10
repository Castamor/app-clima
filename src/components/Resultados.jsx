import { useEffect, useState } from 'react'
import useClimaProvider from '../hooks/useClimaProvider'

import ContenedorIcono from './ContenedorIcono'
import Item from './Item'
import FondoBlur from './FondoBlur'
import { Humedad, Presion, SalidaSol, Sensacion, Viento } from './Iconos'

import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import ItemDinamico from './ItemDinamico/ItemDinamico'

const Resultados = () => {
    const { infoClima } = useClimaProvider()

    const { climaActual, climaPrevisto } = infoClima
    const { ciudad, estado, horas, temperaturas, condiciones } = climaActual

    const { cielo, actual, amanecer, atardecer } = horas
    const { temp, temp_min, temp_max } = temperaturas
    const { icono: Icono, meteorologia, descripcion, sensacion, humedad, presion, velocidadViento } = condiciones

    const formatearTexto = txt => txt.charAt(0).toUpperCase() + txt.slice(1)
    const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)

    const [pantallaPeque, setPantallaPeque] = useState(false)

    useEffect(obtenterAnchoPantalla, [])
    window.addEventListener('resize', obtenterAnchoPantalla)

    function obtenterAnchoPantalla () {
        const anchoPantalla = window.innerWidth < 640
        setPantallaPeque(anchoPantalla)
    }

    return (
        <>
            <h2 className='mt-2 mb-1 font-medium'>Clima actual</h2>
            <div className={'flex sm:grid sm:grid-cols-2 gap-2 animacion'}>
                <FondoBlur className={'text-center w-[60%] sm:w-auto'}>
                    <p className='font-bold text-xl mb-2 uppercase'>{meteorologia}</p>
                    <ContenedorIcono width={'w-[60%] sm:w-3/5'}>
                        <Icono />
                    </ContenedorIcono>

                    <p className='font-medium text-sm mt-1.5 text-slate-300'>{formatearTexto(descripcion)}</p>
                    <div className='my-2.5'>
                        <h3 className='font-bold text-5xl sm:text-6xl'>{temp}°C</h3>
                        <div className='text-xs flex justify-center gap-2 m-1'>
                            <div className='flex items-center justify-center'>
                                <span className='text-blue-500'> <FaLongArrowAltDown/> </span> {temp_min}°C
                            </div>
                            <div className='flex items-center justify-center'>
                                <span className='text-red-500'> <FaLongArrowAltUp/> </span> {temp_max}°C
                            </div>
                        </div>
                    </div>
                    <p className='flex justify-center items-center gap-0.5 text-sm font-semibold text-slate-300'>
                        <span className='text-center'><HiOutlineLocationMarker /></span>
                        {ciudad}, {estado}
                    </p>
                </FondoBlur>

                <div className='w-[40%] sm:w-auto grid grid-rows-2 gap-2'>
                    <ItemDinamico cielo={cielo} meteorologia={meteorologia} />

                    <Item
                        Icono={SalidaSol}
                        width={'w-1/2'}
                        titulo={'Amanecer / Atardecer'}
                        descripcion={`${amanecer} - ${atardecer}`}
                        estilos={`leading-tight ${pantallaPeque && 'cabecera'}`}
                        cabecera={`${actual}`}
                    />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-2 my-2 leading-none animacion'>
                <Item
                    Icono={Sensacion}
                    width={'w-5 sm:w-6'}
                    titulo={'Sensación'}
                    descripcion={`${sensacion}°C`}
                />

                <Item
                    Icono={Humedad}
                    width={'w-5 sm:w-6'}
                    titulo={'Humedad'}
                    descripcion={`${humedad}%`}
                />

                <Item
                    Icono={Viento}
                    width={'w-6 sm:w-8'}
                    titulo={'Viento'}
                    descripcion={`${velocidadViento} m/s`}
                />

                <Item
                    Icono={Presion}
                    width={'w-6 sm:w-8'}
                    titulo={'Presión'}
                    descripcion={`${presion} Pa`}
                />

            </div>

            <h2 className='mt-2 mb-1 font-medium'>Clima Previstos</h2>
            <div className='grid grid-cols-6 sm:grid-cols-5 gap-1.5 mb-10 animacion'>
                {climaPrevisto.map(clima => (
                    <Item
                        key={generarId()}
                        Icono={clima.icono}
                        width={'w-1/2'}
                        titulo={`${clima.temp}°C`}
                        descripcion={`${clima.meteorologia}`}
                        cabecera={`${clima.dia}`}
                        estilos={`${pantallaPeque && 'climasPrevistos'}`}
                    />
                ))}

            </div>
        </>
    )
}

export default Resultados
