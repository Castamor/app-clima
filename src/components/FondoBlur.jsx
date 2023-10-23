const FondoBlur = ({ children, className }) => {
    return (
        <section className={`${className} bg-white/10 rounded-xl p-3 animacion`}>
            {children}
        </section>
    )
}

export default FondoBlur