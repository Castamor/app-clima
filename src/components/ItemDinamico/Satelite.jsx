import ContenedorIcono from '../ContenedorIcono'
import { FondoSol, FondoLuna } from '../Iconos'

const Satelite = ({ haySol, posicion }) => {
    return (
        <ContenedorIcono width='w-[40%] sm:w-[30%]' className={`absolute ${posicion}`}>
            {haySol ? <FondoSol /> : <FondoLuna />}
        </ContenedorIcono>
    )
}

export default Satelite
