import ContenedorIcono from '../ContenedorIcono'
import { FondoSatelite } from '../Iconos'

const Satelite = ({ color, posicion }) => {
    return (
        <>
            <ContenedorIcono width='w-[4rem] sm:w-[30%]' className={`absolute ${posicion} ${color}`}>
                <FondoSatelite />
            </ContenedorIcono>
        </>
    )
}

export default Satelite
