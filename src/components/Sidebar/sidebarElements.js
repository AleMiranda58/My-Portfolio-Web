import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:  ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    ${'' /* background: #000;
    color: #fff */}
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    ${'' /* font-size: 1.8rem; */}
    background: transparent;
    cursor: pointer;
    outline: none;
    color: #fff;
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        tranform: translate(-100%, 60%);
    }
`

export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarMenu = styled.ul`
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 80px);
      text-align: center;

      @media screen and (max-width: 768px){
          grid-template-rows: repeat(6, 80px);
      }

`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-styled: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

