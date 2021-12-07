import styled from "styled-components";
import SVG from "react-inlinesvg";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const AboutContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const LeftSide = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Psection = styled.p`
    color: #fff;
    font-size: 45px;
    text-align: center;
    font-family: 'Dosis', sans-serif;
    margin-bottom: 50px;
`

export const Skills = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    margin: 50px 0;
`

export const ListSkill = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

`

export const ItemContainer = styled.div`
    height: 90px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${'' /* background: black; */}
`

export const TextItem = styled.p`
    width: 100px;
    color: #fff;
    ${'' /* background: rgba(255,255,255, 0.5); */}
    font-weight: bold;
    font-size: 20px;
    display: none;
    position: absolute; 
    bottom: 0;
    text-align: center;
`

export const Item = styled(SVG)`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    path {
        fill: #fff;
    }
    &:hover {
        width: 60px;
        height: 60px; 
        position: absolute;
        left: 0;
    }
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    &:hover + ${TextItem} {
        display: block;
        text-align: center;
        border-box: 3px;
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    }
    &:hover {
        path {
        fill: #000;
        transition: 0.1s ease-out;
        width: 100px;
        }
    
    }
`


export const BtnWrapper = styled.div`
    width: 30%;
    margin-top: 34px;
    cursor: pointer;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
`


export const RightSide = styled.div`
    width: 30%;
    position: relative;
`

export const Bground = styled.div`
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 50% 100%, 0% 50%, 50% 0);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Text = styled.div`
    padding-left: 60px;
    color: #172438;
`

export const TitleSection = styled.h3`
    font-size: 70px;
    font-weight: 600;
`

export const Subtitle = styled.p`
    text-align: center;
    color: #172438;
`
