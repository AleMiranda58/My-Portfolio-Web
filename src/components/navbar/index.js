import React from 'react'
import {FaBars} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SocialContainer,  SocialMedia} from './NavbarElements'

const Navbar = ( { toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">ABOUT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">PROJECTS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">CONTACT</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="others">OTHERS</NavLinks>
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
