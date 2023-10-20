import { createContext, useState } from 'react'

export const ClimaContexto = createContext()

const ClimaProvider = ({ children }) => {
    const [inputCiudadInvalido, setInputCiudadInvalido] = useState(false)
    const [infoError, setInfoError] = useState(false)
    const [hayInfo, setHayInfo] = useState(false)
    const [noCabeContenido, setNoCabeContenido] = useState(false)
    const [loading, setLoading] = useState(false)

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })

    const [clima, setClima] = useState({
        icono: '',
        ciudad: '',
        estado: '',
        temp: 0,
        sensacion: 0,
        humedad: 0,
        meteorologia: 'Despejado',
        descripcion: '',
        ciclo: '',
        contenido: false
    })

    return (
        <ClimaContexto.Provider
            value={{
                inputCiudadInvalido,
                setInputCiudadInvalido,
                infoError,
                setInfoError,
                hayInfo,
                setHayInfo,
                datos,
                setDatos,
                clima,
                setClima,
                noCabeContenido,
                setNoCabeContenido,
                loading,
                setLoading
            }}
        >
            {children}
        </ClimaContexto.Provider>
    )
}

export default ClimaProvider
