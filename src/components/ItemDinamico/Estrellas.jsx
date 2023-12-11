import { METEOROLOGIAS } from '../../data/constantes'
import ContenedorIcono from '../ContenedorIcono'
import { FondoEstrellas, FondoEstrellasLargas, FondoEstrellitas } from '../Iconos'

const Estrellas = ({ meteorologia }) => {
    const hayCieloDespejado = meteorologia === METEOROLOGIAS.despejado

    const classNameEstrellitas = !hayCieloDespejado
        ? 'top-[52.5%] right-[15%] sm:top-[42.5%] sm:right-[22.5%]'
        : 'top-[22.5%] left-[27.5%] sm:top-[20%] sm:left-[30%]'

    const classNameEstrellas = !hayCieloDespejado
        ? 'top-[32.5%] left-[27.5%] sm:top-[27.5%] sm:left-[25%]'
        : 'bottom-[35%] right-[15%] sm:right-[20%]'

    const classNameEstrellasLargas = !hayCieloDespejado
        ? 'bottom-[15%] left-[35%] sm:left-[25%]'
        : 'bottom-[15%] left-[20%]'

    return (
        <>
            <ContenedorIcono
                width={'w-[9%] sm:w-[7%]'}
                className={`absolute opacity-50 brilloEstrellasv1 ${classNameEstrellitas}`}
            >
                <FondoEstrellitas />
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-[8%] sm:w-[6%]'}
                className={`absolute opacity-40 brilloEstrellasv3 ${classNameEstrellas}`}
            >
                <FondoEstrellas />
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-[12%] sm:w-[9%]'}
                className={`absolute opacity-50 brilloEstrellasv2 ${classNameEstrellasLargas}`}
            >
                <FondoEstrellasLargas />
            </ContenedorIcono>
        </>
    )
}

export default Estrellas
