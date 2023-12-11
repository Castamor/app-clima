import { CICLOS, METEOROLOGIAS } from '../../data/constantes'
import ContenedorIcono from '../ContenedorIcono'
import { FondoNube, FondoNubeLLovizna, FondoNubeRayo } from '../Iconos'

const Nublado = ({ ciclo, meteorologia, colorPrimarias, colorSecundarias }) => {
    const esAmanecer = ciclo === CICLOS.amanecer
    const esDia = ciclo === CICLOS.dia
    const esAtardecer = ciclo === CICLOS.atardecer
    const esNoche = ciclo === CICLOS.noche
    const hayLluvia = meteorologia === METEOROLOGIAS.lluvia || meteorologia === METEOROLOGIAS.tormenta
    const hayTormenta = meteorologia === METEOROLOGIAS.tormenta

    return (
        <>
            <ContenedorIcono width={'w-[14%] sm:w-[9%]'} className={`absolute min-w-[1.5rem] left-[7%] top-[6%] nubesMovimientov3 ${colorSecundarias}`}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[14%] sm:w-[9%]'} className={`absolute min-w-[1.5rem] left-[5%] ${hayLluvia ? 'top-[12%]' : 'top-[8%]'} nubesMovimiento ${colorPrimarias}`}>
                {hayLluvia ? <FondoNubeLLovizna /> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[18%] sm:w-[12%]'} className={`absolute min-w-[1.5rem] left-[46%] ${hayLluvia ? 'top-[50%] sm:top-[47%]' : 'top-[42.5%] sm:top-[39%]'} nubesMovimientov3 ${colorSecundarias}`}>
                {hayLluvia ? <FondoNubeLLovizna/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[18%] sm:w-[12%]'} className={`absolute min-w-[1.5rem] left-[50%] top-[45%] sm:top-[40%] nubesMovimientov2 ${colorPrimarias}`}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[10.5%]'} className={`absolute min-w-[1.5rem] left-[9%] ${hayTormenta ? 'bottom-[25%] sm:bottom-[30%]' : 'bottom-[32.5%] sm:bottom-[36.5%]'} nubesMovimiento ${colorSecundarias}`}>
                {hayTormenta ? <FondoNubeRayo/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[10.5%]'} className={`absolute min-w-[1.5rem] left-[12.5%] bottom-[30%] sm:bottom-[35%]  nubesMovimientov3 ${colorPrimarias}`}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[12.5%] sm:w-[10%]'} className={`absolute right-[42.5%] top-[15%] sm:top-[10%] nubesMovimientov2 ${colorPrimarias}`}>
                {hayTormenta ? <FondoNubeRayo/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[20%] sm:w-[15%]'} className={`absolute min-w-[1.5rem] ${esAmanecer ? 'right-[20%] sm:right-[30%]' : 'right-[18%]'} ${hayTormenta ? '-bottom-[1%]' : 'bottom-[4%]'} nubesMovimientov2 ${colorPrimarias}`}>
                {hayTormenta ? <FondoNubeRayo/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[20%] sm:w-[15%]'} className={`absolute min-w-[1.5rem] ${esAmanecer ? 'right-[15%] sm:right-[25%]' : 'right-[13%]'} bottom-[6%] nubesMovimientov3 ${colorSecundarias}`}>
                <FondoNube />
            </ContenedorIcono>

            {!esAtardecer &&
                <ContenedorIcono width={'w-[25%] sm:w-[20%]'} className={`absolute min-w-[1.5rem] -left-[5%] -bottom-[7.5%] nubesMovimiento ${colorPrimarias}`}>
                    <FondoNube />
                </ContenedorIcono>
            }

            {(!esDia && !esNoche) &&
                <ContenedorIcono width={'w-[16%]'} className={`absolute min-w-[1.5rem] right-[5%] top-[11%] sm:right-[2%] nubesMovimientov2 ${colorSecundarias}`}>
                    <FondoNube />
                </ContenedorIcono>
            }

            <ContenedorIcono width={'w-[16%]'} className={`absolute min-w-[1.5rem] right-[8%] ${hayLluvia ? 'top-[18%]' : 'top-[13%]'} sm:right-[5%] nubesMovimientov3 ${colorPrimarias}`}>
                {hayLluvia ? <FondoNubeLLovizna /> : <FondoNube />}
            </ContenedorIcono>
        </>
    )
}

export default Nublado
