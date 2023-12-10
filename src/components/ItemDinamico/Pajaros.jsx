import ContenedorIcono from '../ContenedorIcono'
import { PajaroDosIcono, PajaroTresIcono, PajaroUnoIcono } from '../Iconos'

const Pajaros = () => {
    return (
        <>
            <ContenedorIcono width={'w-[20%] sm:w-[17%]'} className={'absolute bottom-[15%] left-[22.5%] pajaros'}>
                <PajaroUnoIcono />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[17.5%] sm:w-[10%]'} className={'absolute top-[20%] left-[18%] sm:left-[22.5%] pajarosv2'}>
                <PajaroDosIcono />
            </ContenedorIcono>

            <ContenedorIcono width={'w-[12%] sm:w-[8%]'} className={'absolute bottom-[35%] right-[15%] sm:bottom-[45%] sm:right-[22.5%] pajarosv3'}>
                <PajaroTresIcono />
            </ContenedorIcono>
        </>
    )
}

export default Pajaros
