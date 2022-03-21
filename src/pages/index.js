import React, {useState} from 'react'
import Hero from '../components/Hero'
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
        <About />
        <Projects />
        <Contact />
        </>
    )
}

export default Home
