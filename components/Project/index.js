import ProCard from "./item";
import { SiGithub } from 'react-icons/si'

const ProjectPage = ({github, projects}) => {
    return (
        <div className="max-w-4xl px-6 sm:px-20 mx-auto pt-8 pb-28">
            <h1 className="text-gray-900 dark:text-white text-2xl mb-8">Project</h1>
            {projects.map(({...project}, key) => <ProCard {...project} key={key} /> )}
            <a  href={github}
                className="mt-6 md:mt-12 mb-4 flex justify-center text-gray-800 dark:text-gray-100">
                <button className="pt-1 pb-2 px-6 rounded-full bg-gray-300 dark:bg-gray-700 dark:hover:bg-red-500">
                    <SiGithub className="inline-block mr-2" /> 
                    See more on Github 
                </button>
            </a>
        </div>
    )
}

export default ProjectPage;

