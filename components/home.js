import Image from "next/image";
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Home = ({name, desc, greet, img, linkedin, github}) => {
    return (
        <div className="h-[75vh] md:h-[90vh] grid grid-cols-1 md:grid-cols-2 mx-6 sm:mx-12 md:mx-20 gap-10 md:items-center">
            <div className="md:order-2 w-56 h-48 relative mt-20 md:mt-0 rounded bg-gray-200 dark:bg-gray-800 overflow-visible justify-self-center self-end md:self-center">
                <div className="w-72 h-72 right-0 bottom-0 absolute">
                <Image
                    className="bg-opacity-20 scale-110 hover:scale-125 transition-transform duration-300"
                    src={img}
                    height={700}
                    width={700}
                    alt="Nikolas Galih Saputro"
                    layout="responsive" />
                </div>
            </div>
            <div className="md:order-1">
                <h4 className="text-xl mb-1 text-gray-700 dark:text-gray-300">{greet}</h4>
                <h1 className="text-4xl mb-5 text-gray-900 dark:text-white">{name}</h1>
                <p className="text-gray-800 dark:text-gray-200">{desc}</p>
                <div className="flex flex-row mt-4 space-x-4">
                    <a href={linkedin}>
                        <SiLinkedin size={22} className="fill-gray-800 dark:fill-gray-300" />
                    </a>
                    <a href={github}>
                        <SiGithub size={22} className="fill-gray-800 dark:fill-gray-300" />
                    </a>        
                </div>
            </div>
        </div>
    )
}

export default Home;