const DescripcionIcono = ({ titulo, descripcion }) => {
    return (
        <div>
            <p id="titulo" className='font-medium text-sm mt-0.5'>{titulo}</p>
            <p className='text-slate-400 font-medium text-xs'>{descripcion}</p>
        </div>
    )
}

export default DescripcionIcono
