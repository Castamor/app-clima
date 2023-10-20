import { fetchAPI } from './fetch'
import { NADA, VACIO } from '../constant/constantes'

export const consultaAPI = async (datos, setLoading) => {
    setLoading(true)
    let url =
    datos.pais
        ? `https://api.openweathermap.org/geo/1.0/direct?q=${datos.ciudad},${datos.pais}&limit=1&appid=${import.meta.env.VITE_API_KEY}`
        : `https://api.openweathermap.org/geo/1.0/direct?q=${datos.ciudad}&limit=1&appid=${import.meta.env.VITE_API_KEY}`

    const datosGenerales = await fetchAPI(url)

    if (datosGenerales.length === VACIO) {
        setLoading(false)
        return NADA
    }

    const { lat, lon, state } = datosGenerales[0]
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&lang=es&units=metric`

    const data = await fetchAPI(url)
    const { timezone, name } = data
    const { temp, feels_like, humidity } = data.main
    const { description, main, icon } = data.weather[0]

    setLoading(false)
    return { name, state, temp, feels_like, humidity, description, main, timezone, icon }
}
