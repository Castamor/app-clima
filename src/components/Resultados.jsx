import useClimaProvider from '../hooks/useClimaProvider'
import FondoBlur from './FondoBlur'
import { HumedadIcono, TemperaturaIcono, UbicacionIcono } from './Iconos'

const Resultados = () => {
    const { clima, noCabeContenido } = useClimaProvider()
    const { icono, ciudad, estado, temp, sensacion, humedad, meteorologia, descripcion, ciclo } = clima
    const Icono = icono

    return (

        <FondoBlur
            className={
                !noCabeContenido
                    ? 'sm:block p-0 pt-5'
                    : 'sm:block p-0 pt-5 mb-10'}>
            <h3 className='text-center font-bold mb-2 uppercase text-2xl'>{meteorologia}</h3>
            <div className='w-1/3 sm:w-1/3 mx-auto'><Icono /></div>
            <p className='text-center text-sm font-medium mt-1.5'>{descripcion.slice(0, 1).toUpperCase() + descripcion.slice(1)}</p>

            <p className='text-center text-6xl sm:text-8xl font-bold'>{temp}°C</p>
            <div className='flex justify-center items-center gap-1 mt-2 text-sm font-semibold '>
                <div className='w-3'><UbicacionIcono/></div>
                <p>{ciudad}, {estado}</p>
            </div>
            <p className='text-center text-xs font-semibold text-gray-400'>( {ciclo} )</p>

            <div className='flex justify-around mt-2.5 border-t-2 border-gray-200 py-3'>
                <div className='flex justify-center items-end gap-1'>
                    <div className='w-7 sm:w-10'><TemperaturaIcono/></div>
                    <p className='flex flex-col leading-none'>
                        <span className='block font-bold sm:text-xl'>{sensacion}°C {' '}</span>
                            Sensación
                    </p>
                </div>

                <div className='flex justify-center items-center gap-1'>
                    <div className='flex justify-center items-end gap-1'>
                        <div className='w-7 sm:w-10'><HumedadIcono/></div>
                        <p className='flex flex-col leading-none'>
                            <span className='block font-bold sm:text-xl'>{humedad}% {' '}</span>
                            Humedad
                        </p>
                    </div>
                </div>
            </div>
        </FondoBlur>
    )
}

export default Resultados
