import ProjectPage from "../components/Project";
import rentcar from '../assets/rentcar.png';
import saveduid from '../assets/saveduid.png'
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
        title: 'SaveDuid',
        img: saveduid,
        desc: 'Aplikasi kelola keuangan pribadi',
        link: 'https://saveduid.vercel.app'
    },
    {
        title: 'Web Sewa Mobil',
        img: rentcar,
        desc: 'Company profile web with Next.js and Strapi',
        link: 'https://clever-ritchie-51bea2.netlify.app'
    }
]

export default Project;