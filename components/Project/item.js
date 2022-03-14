import Image from "next/image";
import { FaLink } from 'react-icons/fa'

const ProCard = ({title, img, desc, link}) => {
    return (
        <div className="w-full rounded flex flex-col bg-gray-100 dark:bg-gray-800 space-y-3 pb-3">
            <a href={link}
                className="rounded-t overflow-hidden">
            <Image
                className="hover:scale-105 cursor-pointer rounded-t transition-all duration-500" 
                src={img}
                alt={title}
                width={1920}
                height={1080}
                layout='responsive'
                 />    
            </a>
            
            <div className="mx-4">
                <h2 className="text-gray-800 dark:text-white font-medium leading-relaxed">{title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                <FaLink className="fill-gray-600 dark:fill-gray-400 inline-block mr-2" />
                <a href={link} className="leading-relaxed text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500">
                    visit website
                </a>
            </div>
        </div>
    )
}

export default ProCard;