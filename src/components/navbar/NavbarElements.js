import styled from "styled-components"
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#transparent')};
    border-bottom: 1px solid  rgba(255, 0, 255, 0.3);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
    `

    export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px; 
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    ${'' /* max-width: 1100px; */}
    max-width: 1700px;
    `
    //'cause this logo is actually gonna be a link
    export const NavLogo = styled(LinkRouter)`
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    `

    export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        tranform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
    `

    export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    `

    export const NavItem = styled.li`
    height: 80px;
    font-size: 18px;
    `
    
    export const NavLinks = styled(LinkScroll)`
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 5px solid #ff26f8;
    }
    `


    
    export const SocialContainer = styled.div`
        display: flex;

        @media screen and (max-width: 768px) {
        display: none;
    }
    `

    export const SocialMedia = styled.nav`
        ${'' /* display: flex; */}
        align-items: center;
        color: #fff;
        font-size: 30px;
        padding: 0 20px;
    `