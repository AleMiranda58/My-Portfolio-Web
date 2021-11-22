import React, {useState} from 'react'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/data'
import Intro from '../components/Intro/Intro'
import Navbar from '../components/navbar'
import Projects from '../components/Projects/Projects'
import Contact from '../components/contact/Contact'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <Intro />
        <Projects />
        <Contact />
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
