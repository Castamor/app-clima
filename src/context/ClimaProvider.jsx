import { createContext, useState } from 'react'

export const ClimaContexto = createContext()

const ClimaProvider = ({ children }) => {
    const [inputCiudadInvalido, setInputCiudadInvalido] = useState(false)
    const [infoError, setInfoError] = useState(false)
    const [hayInfo, setHayInfo] = useState(false)
    const [loading, setLoading] = useState(false)

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })

    const [infoClima, setInfoClima] = useState({
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
                loading,
                setLoading,
                datos,
                setDatos,
                infoClima,
                setInfoClima
            }}
        >
            {children}
        </ClimaContexto.Provider>
    )
}

export default ClimaProvider
