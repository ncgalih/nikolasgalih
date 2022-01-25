const Home = ({name, desc, greet}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full mx-6 sm:mx-12 md:mx-20 gap-10">
            <div className="md:order-2">
                test
            </div>
            <div className="pt-36 md:order-1">
                <h4 className="text-xl mb-1 text-gray-700 dark:text-gray-300">{greet}</h4>
                <h1 className="text-4xl mb-5 text-gray-900 dark:text-white">{name}</h1>
                <p className="text-gray-800 dark:text-gray-200">{desc}</p>
            </div>
        </div>
    )
}

export default Home;