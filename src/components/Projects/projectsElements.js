import styled from "styled-components";
import SVG from "react-inlinesvg";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const SectionProjects = styled.div`
  /*Contenedor general de toda mi section projectos */
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`


// Primera parte de la seccion projectos: description de technologias
export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const AboutContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const LeftSide = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const TitleSection = styled.h3`
    font-size: 70px;
    font-weight: 600;
    color: #fff;
    
`

export const Psection = styled.p`
    color: #fff;
    font-size: 45px;
    font-family: 'Dosis', sans-serif;
`

export const Skills = styled.div`
    width: 100%;
    height: 15%;
    z-index: 2;
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
        fill: rgba(255,255,255, 0.5); 
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

export const RightSide = styled.div`
    width: 10%;
    position: relative;
`

export const Bground = styled.div`
    ${'' /* clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 50% 100%, 0% 50%, 50% 0); */}
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 100% 100%, 0 50%, 98% 0);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
// export const Text = styled.div`
//     padding-left: 60px;
//     color: #172438;
// `



// export const Subtitle = styled.p`
//     text-align: center;
//     color: #fff;
//     font-size: 50px;
// `

/*  Listado de projectos: segunda parte */
export const AllProjects = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  z-index: 2;
`

export const ProjectsLlist = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SeeMore = styled.div`
  width: 30%;
  margin-top: 15px;
  z-index: 3;
`
/*  Fin listado de projectos: segunda parte */