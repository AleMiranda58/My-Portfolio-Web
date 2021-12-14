import styled from "styled-components";
import SVG from "react-inlinesvg";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const SectionProjects = styled.div`
    width: 100%;
    height: 100%;
    ${'' /* margin-top: 160px; */}
`


export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
`


export const AboutContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SidesBg = styled.div`
    ${'' /* width: 20px;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    left: 10px;
    position: absolute; */}
`


export const Content = styled.div`
    width: 75%;
    height: 92vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const TitleSection = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 80px;
    font-weight: 800;
`

export const Psection = styled.p`
    width: 100%;
    color: #fff;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 35px;
`


export const Text = styled.div`
    
`

export const Skills = styled.div`
    width: 100%;
    height: 20%;
    z-index: 2;

    & .plus {
        font-weight: 800;
        font-size: 60px;
        font-style: italic;
        color: #000;
        text-align: center;
    }
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
`

export const TextItem = styled.p`
    width: 100px;
    color: rgba(255,255,255, 0.5);
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
        ${'' /* fill: rgba(255,255,255, 0.5);  */}
        fill: #fff; 
;
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
        color: rgb(255,255,255); ;
    }
    &:hover {
        path {
        fill: #fff;
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

export const AllProjects = styled.div`
  width: 75%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  z-index: 2;

  & .watch {
        font-weight: 800;
        font-size: 60px;
        color: #fff;
        text-align: center;
        background: #000;
        height: 120px;
    }
`

export const ProjectsLlist = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

