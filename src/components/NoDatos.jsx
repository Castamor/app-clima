import FondoBlur from './FondoBlur'

const NoDatos = () => {
    return (
        <FondoBlur className={'p-5 text-center font-bold mt-5'}>
            <h2>NO SE ENCONTRARON DATOS.</h2>
            <p className='block text-xs text-slate-400'>( Verifica el nombre de la ciudad, el país no es necesario </p>
            <p className='text-xs text-slate-400'>ya que solo ayuda a mejorar la búsqueda )</p>
        </FondoBlur>
    )
}

export default NoDatos
