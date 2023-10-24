import useClimaProvider from './hooks/useClimaProvider'

import Formulario from './components/Formulario'
import Resultados from './components/Resultados'
import NoDatos from './components/NoDatos'

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
