import { SolIcono, SolNubes, LloviznaIcono, LLuviaIcono, LunaIcono, LunaNubes, NieveIcono, TormentaIcono, VientoIcono } from '../components/Iconos'

export const paises = [
    { id: 1, codigo: 'US', nombre: 'Estados Unidos', ciudades: ['Nueva York', 'Los Ángeles', 'Chicago', 'Houston', 'Miami'] },
    { id: 2, codigo: 'CN', nombre: 'China', ciudades: ['Pekín', 'Shanghái', 'Hong Kong', 'Chongqing', 'Tianjin'] },
    { id: 3, codigo: 'JP', nombre: 'Japón', ciudades: ['Tokio', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo'] },
    { id: 4, codigo: 'DE', nombre: 'Alemania', ciudades: ['Berlín', 'Múnich', 'Hamburgo', 'Colonia', 'Fráncfort'] },
    { id: 5, codigo: 'IN', nombre: 'India', ciudades: ['Nueva Delhi', 'Bombay', 'Bangalore', 'Hyderabad', 'Calcuta'] },
    { id: 6, codigo: 'GB', nombre: 'Reino Unido', ciudades: ['Londres', 'Birmingham', 'Mánchester', 'Glasgow', 'Edimburgo'] },
    { id: 7, codigo: 'FR', nombre: 'Francia', ciudades: ['París', 'Marsella', 'Lyon', 'Toulouse', 'Niza'] },
    { id: 8, codigo: 'IT', nombre: 'Italia', ciudades: ['Roma', 'Milán', 'Nápoles', 'Turín', 'Florencia'] },
    { id: 9, codigo: 'CA', nombre: 'Canadá', ciudades: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa'] },
    { id: 10, codigo: 'KR', nombre: 'Corea del Sur', ciudades: ['Seúl', 'Busan', 'Incheon', 'Daegu', 'Daejeon'] },
    { id: 11, codigo: 'AR', nombre: 'Argentina', ciudades: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'] },
    { id: 12, codigo: 'BR', nombre: 'Brasil', ciudades: ['Sao Paulo', 'Río de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza'] },
    { id: 13, codigo: 'CL', nombre: 'Chile', ciudades: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta'] },
    { id: 14, codigo: 'CO', nombre: 'Colombia', ciudades: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'] },
    { id: 15, codigo: 'MX', nombre: 'México', ciudades: ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Culiacán', 'Mazatlán', 'Los Mochis', 'Guasave', 'Navolato'] },
    { id: 16, codigo: 'PE', nombre: 'Perú', ciudades: ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Cusco'] },
    { id: 17, codigo: 'VE', nombre: 'Venezuela', ciudades: ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Maracay'] },
    { id: 18, codigo: 'EC', nombre: 'Ecuador', ciudades: ['Quito', 'Guayaquil', 'Cuenca', 'Machala', 'Santo Domingo'] },
    { id: 19, codigo: 'BO', nombre: 'Bolivia', ciudades: ['La Paz', 'Santa Cruz', 'Cochabamba', 'Sucre', 'Tarija'] },
    { id: 20, codigo: 'PY', nombre: 'Paraguay', ciudades: ['Asunción', 'Ciudad del Este', 'San Lorenzo', 'Luque', 'Capiatá'] },
    { id: 21, codigo: 'UY', nombre: 'Uruguay', ciudades: ['Montevideo', 'Salto', 'Ciudad de la Costa', 'Paysandú', 'Las Piedras'] },
    { id: 22, codigo: 'ES', nombre: 'España', ciudades: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao'] }
]

export function generarAutocompletado () {
    const lista = []
    paises.forEach(pais => {
        return lista.push(...pais.ciudades)
    })

    const datalist = document.createElement('datalist')
    datalist.id = 'opciones'
    lista.forEach(opcion => {
        const opcionElemento = document.createElement('option')
        opcionElemento.value = opcion
        datalist.appendChild(opcionElemento)
    })

    const input = document.querySelector('#ciudad')
    input.insertAdjacentElement('beforeend', datalist)
}

export const climas = [
    { id: 'Thunderstorm', meteorologia: 'Tormenta', icono: TormentaIcono },
    { id: 'Drizzle', meteorologia: 'Llovizna', icono: LloviznaIcono },
    { id: 'Rain', meteorologia: 'LLuvia', icono: LLuviaIcono },
    { id: 'Snow', meteorologia: 'Nieve', icono: NieveIcono },
    { id: 'Atmosphere', meteorologia: 'Variado', icono: VientoIcono },
    { id: 'ClearDay', meteorologia: 'Despejado', icono: SolIcono },
    { id: 'ClearNight', meteorologia: 'Despejado', icono: LunaIcono },
    { id: 'CloudsDay', meteorologia: 'Nublado', icono: SolNubes },
    { id: 'CloudsNight', meteorologia: 'Nublado', icono: LunaNubes }
]

export const ciclos = {
    amanecer: 'Amanecer',
    dia: 'Día',
    atardecer: 'Atardecer',
    noche: 'Noche'
}
