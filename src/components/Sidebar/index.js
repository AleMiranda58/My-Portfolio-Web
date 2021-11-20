import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './sidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    ABOUT
                </SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>
                    PROJECTS
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    CONTACT
                </SidebarLink>
                <SidebarLink to="others" onClick={toggle}>
                    OTHERS
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
