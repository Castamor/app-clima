import FondoBlur from './FondoBlur'

const NoDatos = () => {
    return (
        <FondoBlur className={'p-5 mt-5 font-bold text-center'}>
            <h2 >NO SE ENCONTRARON DATOS.</h2>
            <p className='text-slate-400 text-xs contenedor mt-0.5'>
                ( Verifica el nombre de la ciudad y que no es necesario agregar
                el estado o país, únicamente con la ciudad basta para poder realizar la búsqueda )
            </p>
        </FondoBlur>
    )
}

export default NoDatos
