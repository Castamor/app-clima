import { fetchAPI } from './fetch'
import { NADA, VACIO } from '../constant/constantes'

export const consultaAPI = async (datos, setLoading) => {
    try {
        setLoading(true)
        const urlDatosGenerales = `https://api.openweathermap.org/geo/1.0/direct?q=${datos.ciudad},${datos.pais || ''}&limit=1&appid=${import.meta.env.VITE_API_KEY}`

        const datosGenerales = await fetchAPI(urlDatosGenerales)
        if (datosGenerales.length === VACIO) {
            setLoading(false)
            return NADA
        }

        const { lat, lon, state } = datosGenerales[0]

        const urlClimaActual = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&lang=es&units=metric`
        const urlClimaPrevisto = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&lang=es&units=metric`

        const [climaActual, climaPrevisto] = await Promise.all([
            fetchAPI(urlClimaActual),
            fetchAPI(urlClimaPrevisto)
        ])

        setLoading(false)
        return { estado: state, climaActual, climaPrevisto }
    } catch (error) {
        setLoading(false)
        return NADA
    }
}
