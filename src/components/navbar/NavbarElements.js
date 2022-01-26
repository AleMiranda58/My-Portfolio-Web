import styled from "styled-components"
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    width: 100%;
    height: 8vh;
    z-index: 4;
    display: flex;
    align-items: center;
    background: ${({ scrollNav }) => (scrollNav ? '#0d47a1' : '#0d47a1')};
    border-bottom: 2px solid  #01BF71;
    font-size: 1rem;
    position: sticky;
    top: 0;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }

    @media screen and (max-width: 768px) {
        height: 60px;
        margin-top: -60px;
    }
    `

    export const NavbarContainer = styled.div`
    display: flex;
    height: 80px; 
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    `
   

    export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media only screen and (orientation: landscape) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

    export const NavMenu = styled.ul`
    list-style: none;
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media only screen and (orientation: landscape) {
        display: none;
    }
   `

    export const NavItem = styled.li`
    height: 80px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start
    `
    
    export const NavLinks = styled(LinkScroll)`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #01BF71;
    font-size: 22px;
    margin: 0 1rem;
    height: 35px;
    cursor: pointer;
    
    font-family: 'Dosis', sans-serif;
    border-bottom: 1px solid #0d47a1;

    &.active {
        color: #01BF71;
        font-weight: 900;
    }

    &:hover {
        font-weight: 900;
    }
    `