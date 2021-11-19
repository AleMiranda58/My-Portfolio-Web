import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './sidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">
                    ABOUT
                </SidebarLink>
                <SidebarLink to="projets">
                    PROJECTS
                </SidebarLink>
                <SidebarLink to="contact">
                    CONTACT
                </SidebarLink>
                <SidebarLink to="others">
                    OTHERS
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
