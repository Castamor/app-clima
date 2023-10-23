export const ajustarAltura = setNoCabeContenido => {
    const alturaPantalla = screen.height
    const alturaContenido = document.querySelector('#contenido').offsetHeight
    const contenido = document.querySelector('#root').classList

    if (alturaContenido > alturaPantalla) {
        setNoCabeContenido(true)
        contenido.remove('h-screen')
        contenido.remove('altura')
    } else {
        setNoCabeContenido(false)
        contenido.add('h-screen')
        contenido.add('altura')
    }
}
