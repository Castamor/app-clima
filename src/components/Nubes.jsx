import { NubeIcono } from './Iconos'

const Nubes = () => {
    return (
        <>
            <div className='absolute top-9 right-8 sm:right-16 sm:top-[90px]'>
                <div className='transicion w-12 sm:w-20 nubesMovimiento'><NubeIcono /></div>
            </div>
            <div className='absolute top-10 right-[0] sm:top-28'>
                <div className='transicion w-10 sm:w-20 nubesMovimientov2'><NubeIcono /></div>
            </div>
            <div className='absolute top-9 left-8 sm:left-16 sm:top-[90px]'>
                <div className='transicion w-12 sm:w-20 nubesMovimiento'><NubeIcono /></div>
            </div>
            <div className='absolute top-10 left-[0] sm:top-28'>
                <div className='transicion w-10 sm:w-20 nubesMovimientov2'><NubeIcono /></div>
            </div>
            <div className='absolute bottom-[24%] -left-[8%] sm:left-[5%]'>
                <div className='transicion w-16 sm:w-24 nubesMovimientov2'><NubeIcono /></div>
            </div>
            <div className='absolute bottom-[3%] -right-[3%] sm:right-[15%] sm:bottom-[5%]'>
                <div className='transicion w-16 sm:w-20 nubesMovimiento'><NubeIcono /></div>
            </div>
            <div className='absolute top-[28%] -left-[8%] sm:left-[20%] sm:top-[26%]'>
                <div className='transicion w-16 sm:w-20 nubesMovimientov2'><NubeIcono /></div>
            </div>
            <div className='absolute top-[15%] -right-[3%] sm:right-[8%] sm:top-[43%]'>
                <div className='transicion w-16 sm:w-20 nubesMovimiento'><NubeIcono /></div>
            </div>
        </>
    )
}

export default Nubes
