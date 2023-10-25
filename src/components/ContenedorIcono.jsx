const ContenedorIcono = ({ children, width }) => {
    return (
        <span className={`${width} mx-auto grid items-center flex-1`}>
            {children}
        </span>
    )
}

export default ContenedorIcono
