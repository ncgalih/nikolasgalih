import ProjectPage from "../components/Project";
import project1 from '../assets/project1.png'
import Meta from "../components/meta";

const Project = () => {
    return (
        <>
            <Meta meta={meta} />
            <ProjectPage projects={projects} github={github} />
        </>
    )
}
const meta = {
    title: 'Nikolas Galih - Projects',
    desc: 'I am Nikolas Galih Saputro. I am an Information Engineering student at Universitas Gadjah Mada'
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