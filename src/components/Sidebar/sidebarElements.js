import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    overflow : hidden;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d47a1;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:  ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
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
    font-size: 36px;
    text-decoration: none;
    list-styled: none;
    transition: 0.2s ease-in-out;
    color: #01BF71;
    cursor: pointer;
    font-weight: 400;

    &:hover {
        color: #fff;
        transition: 0.2s ease-in-out;
    }

    @media only screen and (orientation: landscape) {
        font-size: 24px;
      }
`

