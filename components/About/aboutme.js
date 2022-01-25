const Aboutme = ({title, desc}) => {
    return (
        <div className="max-w-2xl">
            <h1 className="text-gray-900 dark:text-white text-2xl mb-1.5">{title}</h1>
            <p className="text-gray-700 dark:text-gray-200">{desc}</p>
        </div>
    )
}

export default Aboutme;