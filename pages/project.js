import ProjectPage from "../components/Project";
import project1 from '../assets/project1.png'

const Project = () => {
    return (
        <>
            <ProjectPage projects={projects} github={github} />
        </>
    )
}
const github = 'https://github.com/ncgalih'
const projects = [
    {
        title: 'Web Sewa Mobil',
        img: project1,
        desc: 'Company profile web with Next.js and Strapi',
        link: 'https://clever-ritchie-51bea2.netlify.app'
    }
]

export default Project;