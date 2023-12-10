import { CICLOS, METEOROLOGIAS } from '../../data/constantes'
import ContenedorIcono from '../ContenedorIcono'
import { FondoNube, FondoNubeLLovizna, FondoNubeRayo } from '../Iconos'

const Nublado = ({ ciclo, meteorologia, nubesPrimarias, nubesSecundarias }) => {
    const esAmanecer = ciclo === CICLOS.amanecer
    const esDia = ciclo === CICLOS.dia
    const esAtardecer = ciclo === CICLOS.atardecer
    const esNoche = ciclo === CICLOS.noche
    const hayLluvia = meteorologia === METEOROLOGIAS.lluvia || meteorologia === METEOROLOGIAS.tormenta
    const hayTormenta = meteorologia === METEOROLOGIAS.tormenta

    return (
        <>
            <ContenedorIcono width={'w-[14%] sm:w-[9%]'} className={'absolute min-w-[1.5rem] left-[7%] top-[3%] nubesMovimientov3 ' + nubesSecundarias}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[14%] sm:w-[9%]'} className={'absolute min-w-[1.5rem] left-[5%] nubesMovimiento ' + nubesPrimarias}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[18%] sm:w-[12%]'} className={'absolute min-w-[1.5rem] left-[46%] top-[44%] sm:top-[39%] nubesMovimientov3 ' + nubesSecundarias}>
                {hayLluvia ? <FondoNubeLLovizna/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[18%] sm:w-[12%]'} className={'absolute min-w-[1.5rem] left-[50%] top-[45%] sm:top-[40%] nubesMovimientov2 ' + nubesPrimarias}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[10.5%] sm:w-[8%]'} className={'absolute min-w-[1.5rem] left-[10%] bottom-[32.5%] sm:bottom-[36.5%] nubesMovimiento ' + nubesSecundarias}>
                <FondoNube />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[10.5%] sm:w-[8%]'} className={'absolute min-w-[1.5rem] left-[12.5%] bottom-[30%] sm:bottom-[35%] nubesMovimientov3 ' + nubesPrimarias}>
                {hayTormenta ? <FondoNubeRayo/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[12.5%] sm:w-[10%]'} className={`absolute min-w-[1.5rem] ${hayTormenta ? 'right-[27.5%]' : 'right-[35%]'} top-[10%] nubesMovimientov2 ` + nubesPrimarias}>
                {hayLluvia ? <FondoNubeLLovizna/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[20%]'} className={`absolute min-w-[1.5rem] ${ciclo === CICLOS.amanecer ? 'right-[30%]' : 'right-[18%]'} bottom-[2%] sm:bottom-0 nubesMovimientov2 ` + nubesPrimarias}>
                {hayLluvia ? <FondoNubeLLovizna/> : <FondoNube />}
            </ContenedorIcono>

            <ContenedorIcono width={'w-[20%]'} className={`absolute min-w-[1.5rem] ${ciclo === CICLOS.amanecer ? 'right-[32.5%]' : 'right-[13%]'} bottom-0 sm:-bottom-[2%] nubesMovimientov3 ` + nubesSecundarias}>
                {hayTormenta ? <FondoNubeRayo/> : <FondoNube />}
            </ContenedorIcono>

            {!esAtardecer &&
                <ContenedorIcono width={'w-[3rem] sm:w-[25%]'} className={'absolute min-w-[1.5rem] -left-[10%] -bottom-[1.25rem] nubesMovimiento ' + nubesPrimarias}>
                    <FondoNube />
                </ContenedorIcono>
            }

            {(!esDia && !esNoche) &&
                <>
                    <ContenedorIcono width={'w-[16%]'} className={'absolute min-w-[1.5rem] right-[5%] top-[11%] sm:right-[2%] nubesMovimientov2 ' + nubesSecundarias}>
                        <FondoNube />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[16%]'} className={'absolute min-w-[1.5rem] right-[8%] top-[13%] sm:right-[5%] nubesMovimientov3 ' + nubesPrimarias}>
                        <FondoNube />
                    </ContenedorIcono>
                </>
            }

            {(hayLluvia || hayTormenta) &&
                <>
                    <ContenedorIcono width={'w-[9%]'} className={'absolute min-w-[1.5rem] -left-[2.5%] top-[27.5%] nubesMovimientov2 ' + nubesSecundarias}>
                        <FondoNubeLLovizna />
                    </ContenedorIcono>

                    <ContenedorIcono width={'w-[13%]'} className={'absolute min-w-[1.5rem] -right-[1%] top-[45%] nubesMovimientov3 ' + nubesPrimarias}>
                        <FondoNubeLLovizna />
                    </ContenedorIcono>
                </>
            }

            {hayTormenta &&
                <>
                    <ContenedorIcono width={'w-[25%]'} className={'absolute min-w-[1.5rem] left-[32.5%] -top-[7.5%] sm:-top-[15%] nubesMovimientov3 ' + nubesPrimarias}>
                        <FondoNubeRayo />
                    </ContenedorIcono>

                    {!esAmanecer &&
                    <ContenedorIcono width={'w-[25%]'} className={'absolute min-w-[1.5rem] left-[35%] -bottom-[7.5%] sm:-bottom-[20%] nubesMovimientov1 ' + nubesSecundarias}>
                        <FondoNube />
                    </ContenedorIcono>}
                </>
            }
        </>
    )
}

export default Nublado
