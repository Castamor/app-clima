import FondoBlanco from './FondoBlanco'

const NoDatos = () => {
    return (
        <FondoBlanco className={'p-5 text-center font-bold'}>
            <h2>NO SE ENCONTRARON DATOS.</h2>
            <p className='block text-xs text-slate-400'>( Verifica el nombre de la ciudad, el país no es necesario </p>
            <p className='text-xs text-slate-400'>ya que solo ayuda a mejorar la búsqueda )</p>
        </FondoBlanco>
    )
}

export default NoDatos
