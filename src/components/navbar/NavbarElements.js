import styled from "styled-components"
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    width: 100%;
    height: 8vh;
    z-index: 4;
    display: flex;
    align-items: center;
    background: ${({ scrollNav }) => (scrollNav ? '#0d47a1' : '#0d47a1')};
    ${'' /* border-bottom: 1px solid  rgba(255, 255, 255, 0.1); */}
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

    export const NavLogo = styled(LinkRouter)`
    width: 100%;
    margin-left: 24px;
    text-decoration: none;
    margin-left: 40px;
    cursor: pointer;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Dosis', sans-serif;
    

    @media screen and (max-width: 768px) {
        ${'' /* margin-left: 0;
        display: flex;
        align-items: center; */}
        display: none;
    }
    `
   /*Testing */
   export const Name = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #fff;
    &:after {
        ${'' /* content: '< AleMiranda />'; */}
    }
   `

   
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
        ${'' /* display: flex;
        align-items: center;
        tranform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff; */}

        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
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
    display: flex;
    align-items: center;
    align-items: center;
    `
    
    export const NavLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    align-items: center;
    text-decoration: none;
    color: #f0f0f0;
    font-size: 22px;
    margin: 0 1rem;
    height: 35px;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    font-weight: 500;
    ${'' /* border-bottom: 1px solid #000; */}
    border-bottom: 1px solid #0d47a1;

    &.active {
        border-bottom: 1px solid #fff;
        color: #fff;
    }

    &:hover {
        border-bottom: 1px solid #fff;
        ${'' /* border-bottom: ${({ borderBottom }) => (borderBottom ? 'red' : 'blue')}; */}
    }
    `