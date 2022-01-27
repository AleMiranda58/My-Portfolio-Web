import styled from "styled-components";
import SVG from "react-inlinesvg";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const SectionProjects = styled.div`
    width: 100%;
    height: 100%;


    @media only screen and (max-width: 600px) {
        margin-top: 40px;
    }

    @media only screen and (min-width: 600px) {
        margin-top: 40px;
    }

    @media only screen and (min-width: 768px) {
        ${'' /* margin-top: -40px; */}
    }

    @media only screen and (min-width: 889px) {
    }

    @media only screen and (min-width: 1200px) {
    }
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
    background: rgba(0, 0, 0, 0.2);
    
`



export const Content = styled.div`
    width: 75%;
    height: 92vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 600px) {
        height: 40vh;
        
    }

    @media only screen and (min-width: 600px) {
        height: 50vh;
       
    }

    @media only screen and (min-width: 768px) {
        height: 50vh;
    }

    @media only screen and (min-width: 889px) {
        height: 92vh;
    }

    @media only screen and (min-width: 1200px) {
        height: 92vh;
    }

    @media screen
        and (min-width: 360px)
        and (max-width: 900px)
        and (orientation: landscape) {
            height: 92vh;
            width: 75%;
            margin: 0 auto;
            justify-content: space-evenly;
    }
`

export const TitleSection = styled.h2`
    color: #fff;
    

    @media only screen and (max-width: 600px) {
        font-size: 36px;
        font-weight: 700;
    }

    @media only screen and (min-width: 600px) {
        font-size: 40px;
        font-weight: 600;
    }

    @media only screen and (min-width: 768px) {
        font-size: 60px;
        font-weight: 600;
    }

    @media only screen and (min-width: 889px) {
        font-size: 70px;
        font-weight: 800;
    }

    @media only screen and (min-width: 1200px) {
        font-size: 80px;
        font-weight: 500;
        text-align: justify;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 915px)
    and (orientation: landscape) {
        font-size: 36px;
        font-weight: 900;
    }
`

export const Psection = styled.p`
    width: 100%;
    color: #fff;
    text-align: center;
    

    @media only screen and (max-width: 600px) {
        font-weight: 200;
        font-size: 16px;
    }

    @media only screen and (min-width: 600px) {
        font-weight: 200;
        font-size: 20px;
    }

    @media only screen and (min-width: 768px) {
        font-weight: 200;
        font-size: 26px;
    }

    @media only screen and (min-width: 889px) {
        font-weight: 400;
        font-size: 35px;
    }

    @media only screen and (min-width: 1200px) {
        font-weight: 400;
        font-size: 40px;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 915px)
    and (orientation: landscape) {
        font-weight: 200;
        font-size: 24px;
    }
`


export const Text = styled.div`
    
`

export const Skills = styled.div`
    width: 100%;
    height: auto;
    z-index: 2;

    & .plus {
        
        font-style: italic;
        color: #000;
        text-align: center;

        @media only screen and (max-width: 600px) {
            font-weight: 600;
            font-size: 18px;
        }

        @media only screen and (min-width: 600px) {
            font-weight: 800;
            font-size: 30px;
        }

        @media only screen and (min-width: 768px) {
            font-weight: 600;
            font-size: 30px;
        }

        @media only screen and (min-width: 889px) {
            font-weight: 800;
            font-size: 40px;
        }

        @media only screen and (min-width: 1200px) {
            font-weight: 800;
            font-size: 60px;
        }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 20px;
    }

    @media only screen and (min-width: 600px) {
        width: 25px;

    }

    @media only screen and (min-width: 768px) {
        width: 30px;

    @media only screen and (min-width: 889px) {
        width: 40px;

    }

    @media only screen and (min-width: 1200px) {
        width: 50px;
    }
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
        fill: #01BF71;
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
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  z-index: 2;
`

export const ProjectsLlist = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

