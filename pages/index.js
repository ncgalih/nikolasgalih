import Head from 'next/head'
import Homepage from '../components/home'
import Menu from '../components/menu'
import Meta from '../components/meta'

export default function Home() {
  return (
    <>
      <Meta meta={meta} />
      <Homepage greet={greet} name={name} desc={desc} />
    </>
  )
}
const meta = {
  title: 'Nikolas Galih',
  desc: 'I am Nikolas Galih Saputro. I am an Information Engineering student at Universitas Gadjah Mada'
}
const greet = 'Hi, I am'
const name = 'Nikolas Galih'
const desc = "I am a student of information engineering at UGM batch 2021. I am interested in software engineering especially web development."
 