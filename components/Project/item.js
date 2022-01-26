import Image from "next/image";
import Tag from "./tag";
import { FaLink } from 'react-icons/fa'

const ProCard = ({title, img, desc, link}) => {
    return (
        <div className="w-full rounded flex flex-col bg-gray-100 dark:bg-gray-800 space-y-3 pb-3">
            <Image
                className="rounded-t" 
                src={img}
                alt={title}
                width={1886}
                height={911}
                 />
            <div className="mx-4">
                <h2 className="text-gray-800 dark:text-white font-medium leading-relaxed">{title}</h2>
                {/*<div className="flex flex-row mx-4 space-x-2">
                    {tags.map(tag => <Tag title={tag} />)}
                </div>*/}
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