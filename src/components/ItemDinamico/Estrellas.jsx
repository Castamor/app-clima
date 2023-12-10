import { METEOROLOGIAS } from '../../data/constantes'
import ContenedorIcono from '../ContenedorIcono'
import { FondoEstrellas, FondoEstrellasLargas, FondoEstrellitas } from '../Iconos'

const Estrellas = ({ meteorologia }) => {
    const hayCieloDespejado = meteorologia === METEOROLOGIAS.despejado

    return (
        <>

            <ContenedorIcono
                width={`${hayCieloDespejado ? 'w-[2%]' : 'w-[5%]'}`}
                className={`absolute ${hayCieloDespejado ? 'top-[50.5%] left-[40%]' : 'top-[30%] left-[25%] sm:top-[27.5%] sm:left-[25%]'} opacity-40 brilloEstrellasv3`}
            >
                <FondoEstrellas />
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-[6%]'}
                className={`absolute ${hayCieloDespejado ? 'bottom-[5%] right-[30%]' : 'top-[52.5%] right-[17.5%] sm:top-[42.5%] sm:right-[22.5%]'} opacity-40 brilloEstrellasv1`}
            >
                <FondoEstrellitas />
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-[9%]'}
                className={`absolute ${hayCieloDespejado ? '-bottom-[2.5%] left-[15%]' : 'bottom-[12.5%] left-[27.5%] sm:left-[25%]'} opacity-40 brilloEstrellasv2`}
            >
                <FondoEstrellasLargas />
            </ContenedorIcono>

            {hayCieloDespejado &&
                <>
                    <ContenedorIcono width={'w-[1.5%]'} className={'absolute bottom-[22.5%] left-[2.5%] opacity-40 brilloEstrellasv1'}>
                        <FondoEstrellas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[1.75%]'} className={'absolute top-[1%] left-[32.5%] opacity-40 brilloEstrellasv2'}>
                        <FondoEstrellas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[1.5%]'} className={'absolute top-[50%] right-[1%] opacity-40 brilloEstrellasv3'}>
                        <FondoEstrellas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[9%]'} className={'absolute top-[42.5%] right-[25%] opacity-40 brilloEstrellasv2'}>
                        <FondoEstrellasLargas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[9%]'} className={'absolute -top-[2.5%] -left-[1%] opacity-40 brilloEstrellasv3'}>
                        <FondoEstrellasLargas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[5%]'} className={'absolute top-[37.5%] left-[15%] opacity-40 brilloEstrellasv1'}>
                        <FondoEstrellitas />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[5%]'} className={'absolute top-[2.5%] right-[25%] opacity-40 brilloEstrellasv2'}>
                        <FondoEstrellitas />
                    </ContenedorIcono>

                </>
            }

        </>
    )
}

export default Estrellas
