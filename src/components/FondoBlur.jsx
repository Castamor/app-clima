const FondoBlur = ({ children, className }) => {
    return (
        <section className={`${className} bg-white/10 rounded-xl p-3 border-b-2 border-r-2 border-white/5 text-center`}>
            {children}
        </section>
    )
}

export default FondoBlur
