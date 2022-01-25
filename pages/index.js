import Head from 'next/head'
import Homepage from '../components/home'
import Menu from '../components/menu'

export default function Home() {
  return (
    <>
      <Homepage greet={greet} name={name} desc={desc} />
    </>
  )
}
const greet = 'Hi, I am'
const name = 'Nikolas Galih'
const desc = "I am a student of information engineering at UGM batch 2021. I am interested in software engineering especially web development."
 