const FondoBlanco = ({ children, className }) => {
    return (
        <section className={`${className} bg-white border-gray-300 border-b-[5px] rounded-md mt-5`}>
            {children}
        </section>
    )
}

export default FondoBlanco
