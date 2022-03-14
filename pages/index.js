import Homepage from '../components/home'
import Meta from '../components/meta'
import profil from '../assets/ncprofil.png'

export default function Home() {
  return (
    <>
      <Meta meta={meta} />
      <Homepage greet={greet} name={name} desc={desc} img={profil} github={github} linkedin={linkedin} />
    </>
  )
}
const meta = {
  title: 'Nikolas Galih',
  desc: 'I am Nikolas Galih Saputro. I am an Information Engineering student at Universitas Gadjah Mada'
}
const greet = 'Hi, I am'
const name = 'Nikolas Galih'
const desc = "Hi, I am Nikolas Galih Saputro Anugrah Utomo. I am a student of information engineering at UGM batch 2021. I am interested in software engineering especially web development."
const github = 'https://github.com/ncgalih'
const linkedin = 'https://linkedin.com/in/nikolas-galih-saputro-a-602405222'
 