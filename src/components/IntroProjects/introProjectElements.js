import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


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


export const RightSide = styled.div`
    width: 50%;
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
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    margin: 50px 0;
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