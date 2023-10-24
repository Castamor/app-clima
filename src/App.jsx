import useClimaProvider from './hooks/useClimaProvider'

import Formulario from './components/Formulario'
import Resultados from './components/Resultados'
import NoDatos from './components/NoDatos'
import FondoBlur from './components/FondoBlur'
import { Humedad, LLuvia, LluviaLigera, Luna, LunaNubes, Nieve, Otros, Presion, Rayos, Sensacion, Sol, SolNubes, Viento } from './components/Iconos'

function App () {
    const { infoError, infoClima } = useClimaProvider()

    return (
        <>
            <main id='contenido' className="z-10">
                <Formulario />
                {infoError && <NoDatos />}
                {infoClima.contenido && <Resultados />}
            </main>
        </>
    )
}

export default App
