import React, {useState, useEffect} from 'react'
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

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
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
