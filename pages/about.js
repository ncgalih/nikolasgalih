import Aboutme from "../components/About/aboutme";
import Contact from "../components/About/contact";
import Skill from "../components/About/skill";
import Meta from "../components/meta";

const About = () => {
    
    return (
        <>
            <Meta meta={meta} />
            <div className="px-6 sm:px-12 md:px-20 lg:px-28 pt-8 pb-28">
                <Aboutme {...about} />
                <Skill {...skill} />
                <Contact {...contact} />
            </div>
        </>
    )
}
const meta = {
    title: 'Nikolas Galih - about',
    desc: 'I am Nikolas Galih Saputro. I am an Information Engineering student at Universitas Gadjah Mada'
}
const about = { 
    title: 'About me',
    desc: `I am a student of information engineering at UGM batch 2021. I am interested in software engineering especially web development.
            Keen to collaborate in web development project`
}
import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiStrapi, SiTailwindcss } from 'react-icons/si'
const skill = {
    title: 'Skill and TechStack',
    tech: [
        {title: 'React', Icon: FaReact, className: 'react'},
        {title: 'Html', Icon: FaHtml5, className: 'html'},
        {title: 'CSS', Icon: FaCss3, className: 'css'},
        {title: 'Javascript', Icon: FaJs, className: 'js'},
        {title: 'Next', Icon: SiNextdotjs, className: 'next'},
        {title: 'Tailwind', Icon: SiTailwindcss, className: 'tailwind'},
        {title: 'Strapi', Icon: SiStrapi, className: 'strapi'},
    ]
}
const contact = {
    title: 'Get In Touch',
    sub: 'Interested to start project with me?',
    email: 'saputragalih8@gmail.com'
}
export default About;