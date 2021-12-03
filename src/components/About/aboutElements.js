import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    ${'' /* display: flex; */}
    position: relative;
    z-index: 1;

`


export const AboutContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    ${'' /* position: relative; */}
`

export const LeftSide = styled.div`
    width: 30%;
    position: relative;
`

export const Bground = styled.div`
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    display: flex;
    flex-direction: column;
    ${'' /* align-items: center; */}
    justify-content: center;
    
`
export const Text = styled.div`
    padding-left: 60px;
k
`

export const TitleSection = styled.h3`
    font-size: 70px;
    font-weight: 600;
`

export const Subtitle = styled.p`

`


export const RightSide = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 80px;
`

export const Psection = styled.p`
    color: #fff;
    font-size: 30px;
    text-align: center;
    font-family: 'Dosis', sans-serif;
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

export const Skills = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    
`

export const ListSkill = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const Item = styled.img`
    width: 50px;
`