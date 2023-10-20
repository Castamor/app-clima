import { useContext } from 'react'
import { ClimaContexto } from '../context/ClimaProvider'

const useClimaProvider = () => {
    return useContext(ClimaContexto)
}
export default useClimaProvider
