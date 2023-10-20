import { ParaguasRojoIcono, ParaguasAzulIcono, ParaguasTriColorIcono } from './Iconos'

const Lluvia = () => {
    return (
        <>
            <div className='w-full absolute bottom-0'>
                <div className='transicion w-24 paraguasTres'><ParaguasTriColorIcono /></div>
            </div>
            <div className='w-full absolute bottom-0'>
                <div className='transicion w-24 paraguas'><ParaguasRojoIcono /></div>
            </div>
            <div className='w-full absolute bottom-0'>
                <div className='transicion w-24 paraguasDos'><ParaguasAzulIcono /></div>
            </div>
        </>
    )
}

export default Lluvia
