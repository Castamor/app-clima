import { createContext, useState } from 'react'

export const ClimaContexto = createContext()

const ClimaProvider = ({ children }) => {
    const [infoError, setInfoError] = useState(false)
    const [hayInfo, setHayInfo] = useState(false)
    const [loading, setLoading] = useState(false)

    const [infoClima, setInfoClima] = useState({
        contenido: false
    })

    return (
        <ClimaContexto.Provider
            value={{
                infoError,
                setInfoError,
                hayInfo,
                setHayInfo,
                loading,
                setLoading,
                infoClima,
                setInfoClima
            }}
        >
            {children}
        </ClimaContexto.Provider>
    )
}

export default ClimaProvider
