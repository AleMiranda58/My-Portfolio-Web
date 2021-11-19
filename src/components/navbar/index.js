import React from 'react'
import {FaBars} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SocialContainer,  SocialMedia} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Portfolio</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projets">Projets</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Others</NavLinks>
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
