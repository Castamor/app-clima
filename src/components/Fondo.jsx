import useClimaProvider from '../hooks/useClimaProvider'
import NocheDia from './NocheDia'
import Nubes from './Nubes'
import Lluvia from './Lluvia'

const Fondo = () => {
    const { clima } = useClimaProvider()

    const condicionesLluvia = ['Tormenta', 'LLuvia', 'Llovizna']
    const hayLLuvia = condicionesLluvia.includes(clima.meteorologia)

    return (
        <>
            {clima.ciclo && <NocheDia />}
            {(clima.meteorologia !== 'Despejado') && <Nubes />}
            {hayLLuvia && <Lluvia />}
        </>
    )
}

export default Fondo
