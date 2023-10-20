import { useEffect } from 'react'
import useClimaProvider from '../hooks/useClimaProvider'
import FondoBlanco from './FondoBlanco'

import { consultaAPI } from '../services/consultaAPI'
import { guardarInformacion } from '../services/guardarInformacion'
import { ajustarAltura } from '../helpers/ajustarAltura'

import { paises, generarAutocompletado } from '../data'
import { NADA } from '../constant/constantes'

const Formulario = () => {
    const {
        inputCiudadInvalido,
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
        noCabeContenido,
        setNoCabeContenido
    } = useClimaProvider()

    useEffect(generarAutocompletado, [])
    useEffect(() => setHayInfo(false), [datos.ciudad])
    useEffect(() => ajustarAltura(setNoCabeContenido), [clima.contenido])

    const handleChange = e => {
        const valor = e.target.value.trim()
        const codigo = paises.filter(pais => (pais.ciudades).includes(valor))[0]?.codigo

        if (codigo) {
            setDatos({
                ...datos,
                [e.target.id]: valor,
                pais: codigo
            })
        } else {
            setDatos({
                ...datos,
                pais: '',
                [e.target.id]: valor
            })
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const noHayInfoEnStateDeDatos = Object.values(datos)[0].trim() === NADA

        if (noHayInfoEnStateDeDatos) {
            setInputCiudadInvalido(true)
            setTimeout(() => setInputCiudadInvalido(false), 2500)
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

    const clasesToolTip =
        inputCiudadInvalido
            ? 'after:block after:opacity-100 before:block before:opacity-100'
            : 'hover:after:block hover:after:opacity-100 hover:before:block hover:before:opacity-100'

    return (
        <>
            <h1
                className={
                    !noCabeContenido
                        ? 'titulo text-white font-bold text-3xl text-center'
                        : 'titulo text-white font-bold text-3xl text-center mt-10'}
            >CONSULTA EL CLIMA DE TU CIUDAD</h1>

            <form onSubmit={e => handleSubmit(e)}>
                <FondoBlanco className={'sm:flex justify-center p-5'}>
                    <div className="sm:flex items-center">
                        <label
                            htmlFor="ciudad"
                            className="font-bold sm:pr-3.5 block mb-1 sm:mb-0 sm:inline-block relative"
                        >
                            Escribe una ciudad
                            <span
                                data-tooltip="Campo obligatorio"
                                data-flow="top"
                                className={"absolute -top-0.5 ml-0.5 font-bold text-red-500 cursor-default after:content-['Campo_obligatorio'] " + clasesToolTip}
                            >*</span>
                        </label>

                        <div className='relative'>
                            <input
                                id="ciudad"
                                value={datos.ciudad}
                                type="text"
                                list="opciones"
                                onChange={e => handleChange(e)}
                                className="border border-gray-300 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg p-2 pr-4 w-full sinFlecha"/>
                            {loading && <div className='absolute top-[13px] right-2.5 loading'></div>}
                        </div>
                    </div>

                    <select
                        id="pais"
                        value={datos.pais}
                        title="Paises"
                        onChange={e => handleChange(e)}
                        className="border border-gray-300 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg p-2 w-full sm:w-fit">
                        <option value=""></option>
                        {paises.map(pais => (
                            <option key={pais.codigo} value={pais.codigo}>{pais.nombre}</option>
                        ))}
                    </select>

                </FondoBlanco>

                <div className="flex justify-center mt-4">
                    <input
                        type="submit"
                        value="Buscar clima"
                        className="bg-blue-500 hover:cursor-pointer transition-all text-white font-bold border-blue-800 rounded-md px-2 py-1 border-b-[5px] border-opacity-60 active:border-b-transparent active:translate-y-[2px] select-none"/>
                </div>
            </form>
        </>
    )
}

export default Formulario
