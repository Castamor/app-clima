const ContenedorIcono = ({ children, width, className }) => {
    return (
        <span className={`${width} mx-auto grid items-center flex-1 ${className}`}>
            {children}
        </span>
    )
}

export default ContenedorIcono
