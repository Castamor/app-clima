import ContenedorIcono from './ContenedorIcono'
import DescripcionIcono from './DescripcionIcono'
import FondoBlur from './FondoBlur'

const ItemHorizonal = ({ Icono, width, titulo, descripcion, estilos = '', cabecera = '' }) => {
    return (
        <FondoBlur className={`${estilos} grid grid-cols-2 items-center p-3 text-start gap-3`}>
            <ContenedorIcono width={`${width}`}>
                <Icono />
            </ContenedorIcono>
            <div className=''>
                <p className='font-medium'>{cabecera}</p>
                <DescripcionIcono titulo={titulo} descripcion={descripcion} />
            </div>
        </FondoBlur>
    )
}

export default ItemHorizonal
