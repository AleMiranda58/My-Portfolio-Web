import React, {useState} from 'react'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/data'
import { homeObjTwo } from '../components/InfoSection/data'
// import Intro from '../components/Intro/Intro'
import Navbar from '../components/navbar'
import Projects from '../components/Projects'
import Contact from '../components/contact'
import Sidebar from '../components/Sidebar'
import About from '../components/About'

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
        {/* <Intro /> */}
        <About />
        <Projects />
        <Contact />
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
