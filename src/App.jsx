import useClimaProvider from './hooks/useClimaProvider'

import Formulario from './components/Formulario'
import Resultados from './components/Resultados'

import { ajustarAltura } from './helpers/ajustarAltura'
import NoDatos from './components/NoDatos'

function App () {
    const { infoError, clima, setClima, setNoCabeContenido } = useClimaProvider()

    window.addEventListener('resize', () => ajustarAltura(setNoCabeContenido))

    return (
        <>
            <main id='contenido' className="z-10">
                <Formulario />
                {infoError && <NoDatos />}
                {clima.contenido && <Resultados />}
            </main>
        </>
    )
}

export default App
