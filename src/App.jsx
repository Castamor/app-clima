import { useEffect } from 'react'
import useClimaProvider from './hooks/useClimaProvider'

import Formulario from './components/Formulario'
import Resultados from './components/Resultados'
import Fondo from './components/Fondo'

import { ajustarAltura } from './helpers/ajustarAltura'
import { cambiarFondo } from './helpers/cambiarFondo'
import NoDatos from './components/NoDatos'

function App () {
    const { infoError, clima, setClima, setNoCabeContenido } = useClimaProvider()

    useEffect(() => {
        cambiarFondo(clima.ciclo, clima, setClima)
    }, [clima])
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
