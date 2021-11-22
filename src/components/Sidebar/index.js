import React, {useState, useEffect} from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './sidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} scrollNav={scrollNav}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink
                to="home"
                onClick={toggle}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active">
                HOME
                </SidebarLink>
                <SidebarLink
                to="about"
                onClick={toggle}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active">
                ABOUT
                </SidebarLink>
                <SidebarLink
                to="projects" 
                onClick={toggle}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active">
                PROJECTS
                </SidebarLink>
                <SidebarLink
                to="contact"
                onClick={toggle}
                smooth={true}
                duration={1000}
                spy={true}
                offset={-80}
                activeClass="active">
                CONTACT
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
