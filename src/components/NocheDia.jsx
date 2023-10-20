import useClimaProvider from '../hooks/useClimaProvider'
import { EstrellasIcono, EstrellasLargasIcono, EstrellitasIcono, LunaFondoIcono, PajaroDosIcono, PajaroTresIcono, PajaroUnoIcono, SolFondoIcono } from './Iconos'
import { ciclos } from '../data'

const Noche = () => {
    const { clima } = useClimaProvider()
    const { ciclo } = clima

    return (
        <>
            {ciclo === ciclos.dia && (
                <div className='absolute top-3 sm:top-12 left-0'>
                    <div className='transicion w-16 sm:w-28 satelite'><SolFondoIcono /></div>
                </div>
            )}

            {ciclo === ciclos.noche && (
                <div className='absolute top-3 sm:top-12 right-0'>
                    <div className='transicion w-16 sm:w-28 brightness-75 satelite'><LunaFondoIcono /></div>
                </div>
            )}

            {(ciclo === ciclos.dia || ciclo === ciclos.atardecer)
                ? (
                    <>
                        <div className='absolute left-0 top-[18%] sm:left-auto sm:right-0 sm:top-[8%]'>
                            <div className='transicion w-8 sm:w-10 pajaros'><PajaroUnoIcono /></div>
                        </div>
                        <div className='absolute filter bottom-[56%] -right-[4%] sm:bottom-[35%] sm:left-0'>
                            <div className='transicion w-10 sm:w-12 pajarosv2'><PajaroDosIcono /></div>
                        </div>
                        <div className='absolute bottom-[4%] left-[5%] sm:left-auto sm:bottom-[20%] sm:right-[10%]'>
                            <div className='transicion w-8 sm:w- pajarosv2'><PajaroTresIcono /></div>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className='absolute top-[3%] left-[26%] sm:left-[16%] sm:top-[10%]'>
                            <div className='transicion w-3 sm:w-4 brilloEstrellasv1'><EstrellasIcono /></div>
                        </div>
                        <div className='absolute bottom-[2%] left-[8%] sm:bottom-[10%]'>
                            <div className='transicion w-5 brilloEstrellasv2'><EstrellitasIcono /></div>
                        </div>
                        <div className='absolute bottom-[54%] left-[0%] sm:bottom-[48%]'>
                            <div className='transicion w-5 brilloEstrellasv3'><EstrellasLargasIcono /></div>
                        </div>

                        <div className='absolute top-[21%] -right-[5%] sm:top-[29%] sm:right-[28%]'>
                            <div className='transicion w-6 brilloEstrellasv3'><EstrellitasIcono /></div>
                        </div>
                        <div className='absolute bottom-[30%] -right-[4%] sm:right-[15%]'>
                            <div className='transicion w-3 brilloEstrellasv1'><EstrellasIcono /></div>
                        </div>
                        <div className='absolute bottom-[3%] right-[3%] sm:right-[0] sm:bottom-[18%]'>
                            <div className='transicion w-6 brilloEstrellasv2'><EstrellasLargasIcono /></div>
                        </div>

                        <div className='absolute bottom-[20%] -left-[4%] sm:left-[18%] sm:bottom-[20%]'>
                            <div className='transicion w-3 brilloEstrellasv2'><EstrellasIcono /></div>
                        </div>
                        <div className='absolute top-[13%] -left-[7%] sm:top-[39%] sm:left-[19%]'>
                            <div className='transicion w-4 brilloEstrellasv3'><EstrellitasIcono /></div>
                        </div>
                        <div className='absolute bottom-[53%] right-[3%] sm:right-[10%] sm:bottom-[60%]'>
                            <div className='transicion w-4 brilloEstrellasv1'><EstrellasLargasIcono /></div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Noche
