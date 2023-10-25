import ContenedorIcono from './ContenedorIcono'
import FondoBlur from './FondoBlur'

const ClimaPrevistoHorizontal = ({ dia, Icono, temp, meteorologia }) => {
    return (
        <FondoBlur className={'text-center flex justify-center odd:col-start-1 odd:col-end-3 even:col-start-3 even:col-end-5 odd:last:col-start-2 odd:last:col-end-4'}>
            <ContenedorIcono width={'w-[30%]'} >
                <Icono />
            </ContenedorIcono>

            <div className='w-[45%] grid items-center'>
                <p className='font-medium'>{dia}</p>
                <p className='text-slate-300 font-medium text-xl'>{temp}°C</p>
                <p className='text-slate-400 text-sm'>{meteorologia}</p>
            </div>
        </FondoBlur>
    )
}

export default ClimaPrevistoHorizontal
