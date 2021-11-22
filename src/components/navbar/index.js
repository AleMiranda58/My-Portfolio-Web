import React, {useState, useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SocialContainer,  SocialMedia} from './NavbarElements'

const Navbar = ( { toggle }) => {
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

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true}
                        duration={900}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <SocialContainer>
                    <SocialMedia>
                        <AiFillLinkedin />
                    </SocialMedia>
                    <SocialMedia>
                        <AiFillGithub />
                    </SocialMedia>
                </SocialContainer>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar
