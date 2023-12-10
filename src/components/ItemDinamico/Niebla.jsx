import ContenedorIcono from '../ContenedorIcono'
import { FondoInterrogracion, FondoNieblaGrande, FondoNieblaPequeña } from '../Iconos'

const Niebla = () => {
    return (
        <>
            <ContenedorIcono
                width={'w-36 sm:w-52'}
                className={'absolute -top-1 -left-14 niebla'}>
                <FondoNieblaPequeña/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-36 sm:w-52'}
                className={'absolute -top-2 -right-5 nieblav2'}>
                <FondoNieblaPequeña/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-36 sm:w-56'}
                className={'absolute top-14 left-12 niebla'}>
                <FondoNieblaPequeña/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-36 sm:w-56'}
                className={'absolute -bottom-1 -right-4 nieblav3'}>
                <FondoNieblaPequeña/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-36 sm:w-56'}
                className={'absolute top-8 -right-10 nieblav2'}>
                <FondoNieblaGrande/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-36 sm:w-56'}
                className={'absolute bottom-10 -left-16 niebla'}>
                <FondoNieblaGrande/>
            </ContenedorIcono>

            <ContenedorIcono
                width={'w-32 sm:w-52'}
                className={'absolute -bottom-5 -left-8 niebla'}>
                <FondoNieblaGrande/>
            </ContenedorIcono>

            <ContenedorIcono width={'w-8 sm:w-10'} className={'absolute top-0 left-0 right-0 bottom-0 m-auto'}>
                <FondoInterrogracion/>
            </ContenedorIcono>
        </>
    )
}

export default Niebla
