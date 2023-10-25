import ContenedorIcono from './ContenedorIcono'
import DescripcionIcono from './DescripcionIcono'
import FondoBlur from './FondoBlur'

const Item = ({ Icono, width, titulo, descripcion, estilos = '', cabecera = '' }) => {
    return (
        <FondoBlur className={`${estilos} flex flex-col justify-around p-3`}>
            <p className='font-medium mb-2'>{cabecera}</p>
            <ContenedorIcono width={`${width}`}>
                <Icono />
            </ContenedorIcono>
            <DescripcionIcono titulo={titulo} descripcion={descripcion} />
        </FondoBlur>
    )
}

export default Item
