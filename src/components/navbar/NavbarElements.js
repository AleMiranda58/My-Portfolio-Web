import styled from "styled-components"
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#172438' : 'rgba(0,0,0, 0.1)')};
    border-bottom: 1px solid  rgba(255, 255, 255, 0.2);
    height: 80px;
    ${'' /* margin-top: -80px; */}
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 3;
    width: 100%;


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
    ${'' /* max-width: 1700px; */}
    `

    export const NavLogo = styled(LinkRouter)`
    width: 100%;
    margin-left: 24px;
    ${'' /* font-weight: bold; */}
    text-decoration: none;
    margin-left: 40px;
    cursor: pointer;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Dosis', sans-serif;
    

    @media screen and (max-width: 768px) {
        margin-left: 0;
        display: flex;
        align-items: center;
    }
    `
   /*Testing */
   export const Name = styled.p`
    font-size: 35px;
    color: #fff;
   `

   export const Profession = styled.p`
    font-size: 20px;
   `
//  fin  testing

    export const ImgLogo = styled.img`
    width: 300px;
    padding-top: 10px;

    @media screen and (max-width: 768px) {
        width: 250px;
    }

    @media screen and (max-width: 500px) {
        width: 150px;
    }
    `

    export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        tranform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
    `

    export const NavMenu = styled.ul`
    display: flex;
    margin-right: 40px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
    `

    export const NavItem = styled.li`
    height: 80px;
    font-size: 18px;
    `
    
    export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 5px solid #fff;
    }
    `