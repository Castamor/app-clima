import { useEffect } from 'react'
import useClimaProvider from '../hooks/useClimaProvider'

import { consultaAPI } from '../services/consultaAPI'
import { guardarInformacion } from '../services/guardarInformacion'

import { paises, generarAutocompletado } from '../data'
import { NADA } from '../constant/constantes'

import { CgSearch } from 'react-icons/cg'

const Formulario = () => {
    const {
        setInfoError,
        loading,
        setLoading,
        setInfoClima
    } = useClimaProvider()

    useEffect(generarAutocompletado, [])

    function vibrarInput () {
        const input = document.querySelector('#ciudad')
        const boton = document.querySelector('#botonFormulario')

        input.classList.toggle('shake-horizontal')
        boton.classList.toggle('shake-horizontal')

        setTimeout(() => {
            input.classList.toggle('shake-horizontal')
            boton.classList.toggle('shake-horizontal')
        }, 2500)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const ciudad = e.target[0].value.trim()

        if (ciudad === NADA) {
            vibrarInput()
            return
        }

        const codigo = paises.filter(pais => (pais.ciudades).includes(ciudad))[0]?.codigo

        const respuesta = await consultaAPI(ciudad, codigo, setLoading)

        if (respuesta === false) return
        if (respuesta === NADA) {
            setInfoError(true)
            setInfoClima({
                contenido: false
            })
            return
        }

        setInfoError(false)
        document.querySelector('form').reset()
        guardarInformacion({ respuesta, setInfoClima })
    }

    return (
        <form onSubmit={handleSubmit} className='animacion mt-10'>
            <label id="label" htmlFor="ciudad" className="mt-2 mb-1 font-medium block" > Como está el clima en...</label>

            <div className='relative'>
                <input
                    id="ciudad"
                    type="text"
                    list="opciones"
                    placeholder='Escribe una ciudad'
                    className="w-full bg-white/10 p-3 rounded-xl focus-visible:outline-none placeholder:text-sm font-semibold border-b-2 border-r-2 border-white/5"
                />
                {loading && <div className='absolute top-4 bottom-0 right-10 loading'></div>}

                <button id="botonFormulario" type="submit" title='Buscar clima' className='absolute right-0 top-0 bottom-0 text-lg pl-2.5 pr-2.5 rounded-tr-xl rounded-br-xl focus-visible:outline-none'> <CgSearch/> </button>
            </div>
        </form>
    )
}

export default Formulario
