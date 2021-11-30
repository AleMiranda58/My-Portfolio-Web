import React, {useState, useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, ImgLogo} from './NavbarElements'
import {Logo} from '../../assets'


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
                <NavLogo to='/' onClick={toggleHome}>
                <ImgLogo src={Logo} alt="logo" />
                </NavLogo>
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
                        >HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >PROJECTS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true}
                        duration={900}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        >CONTACT</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar
