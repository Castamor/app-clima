import { useEffect } from 'react'
import useClimaProvider from '../hooks/useClimaProvider'

import { consultaAPI } from '../services/consultaAPI'
import { guardarInformacion } from '../services/guardarInformacion'
import { ajustarAltura } from '../helpers/ajustarAltura'

import { paises, generarAutocompletado } from '../data'
import { NADA } from '../constant/constantes'

import { CgSearch } from 'react-icons/cg'

const Formulario = () => {
    const {
        setInputCiudadInvalido,
        setInfoError,
        datos,
        setDatos,
        hayInfo,
        setHayInfo,
        clima,
        setClima,
        loading,
        setLoading,
        setNoCabeContenido
    } = useClimaProvider()

    useEffect(generarAutocompletado, [])
    useEffect(() => setHayInfo(false), [datos.ciudad])
    useEffect(() => ajustarAltura(setNoCabeContenido), [clima.contenido])

    const handleChange = e => {
        const valor = e.target.value.trim()
        const codigo = paises.filter(pais => (pais.ciudades).includes(valor))[0]?.codigo

        setDatos({
            ...datos,
            pais: codigo || '',
            [e.target.id]: valor
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const noHayInfoEnStateDeDatos = Object.values(datos)[0].trim() === NADA

        if (noHayInfoEnStateDeDatos) {
            const input = document.querySelector('#ciudad')
            const boton = document.querySelector('#botonFormulario')

            input.classList.toggle('shake-horizontal')
            boton.classList.toggle('shake-horizontal')
            setInputCiudadInvalido(true)

            setTimeout(() => {
                input.classList.toggle('shake-horizontal')
                boton.classList.toggle('shake-horizontal')
                setInputCiudadInvalido(false)
            }, 2500)
            return
        }

        setInputCiudadInvalido(false)
        const respuesta = !hayInfo && await consultaAPI(datos, setLoading)

        if (respuesta === false) return
        if (respuesta === NADA) {
            setInfoError(true)
            setDatos({
                ...datos,
                ciudad: ''
            })
            setClima({
                ...clima,
                icono: '',
                ciudad: '',
                estado: '',
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                descripcion: '',
                contenido: false
            })
            return
        }

        setHayInfo(true)
        setInfoError('')
        guardarInformacion({ respuesta, setClima })
        ajustarAltura(setNoCabeContenido)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="label" htmlFor="ciudad" className="ml-1 font-semibold text-white mb-1 block" > Escribe una ciudad</label>

            <div className='relative'>
                <input
                    id="ciudad"
                    value={datos.ciudad}
                    type="text"
                    list="opciones"
                    placeholder='Consultar el clima en...'
                    onChange={handleChange}
                    className="rounded-xl p-3 w-full bg-white/10 text-white focus-visible:outline-none placeholder:text-sm font-semibold"
                />

                {loading && <div className='absolute top-[14px] bottom-0 right-10 loading'></div>}

                <button id="botonFormulario" type="submit" title='Buscar clima' className='absolute right-0 top-0 bottom-0 text-white text-lg pl-2.5 pr-2.5 rounded-tr-xl rounded-br-xl focus-visible:outline-none'> <CgSearch/> </button>
            </div>
        </form>
    )
}

export default Formulario
