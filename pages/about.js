import Aboutme from "../components/About/aboutme";
import Contact from "../components/About/contact";
import Skill from "../components/About/skill";

const About = () => {
    
    return (
        <div className="px-6 sm:px-12 md:px-20 lg:px-28 pt-8 pb-28">
            <Aboutme {...about} />
            <Skill {...skill} />
            <Contact {...contact} />
        </div>
    )
}
const about = { 
    title: 'About me',
    desc: 'I am a student of information engineering at UGM batch 2021. I am interested in software engineering especially web development.'
}
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiStrapi, SiTailwindcss } from 'react-icons/si'
const skill = {
    title: 'Skill and TechStack',
    tech: [
        {title: 'React', Icon: FaReact, className: 'fill-sky-500'},
        {title: 'Html', Icon: FaHtml5, className: 'fill-orange-600'},
        {title: 'CSS', Icon: FaCss3, className: 'fill-blue-500'},
        {title: 'Javascript', Icon: FaJs, className: 'fill-yellow-500'},
        {title: 'Next', Icon: SiNextdotjs, className: 'fill-gray-900 dark:fill-white'},
        {title: 'Tailwind', Icon: SiTailwindcss, className: 'fill-sky-400'},
        {title: 'Strapi', Icon: SiStrapi, className: 'fill-violet-500'},
    ]
}
const contact = {
    title: 'Get In Touch',
    sub: 'Interested to start project with me?',
    email: 'saputragalih8@gmail.com'
}
export default About;