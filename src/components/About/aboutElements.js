import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    margin-bottom: 200px;
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
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
export const Text = styled.div`
    padding-right: 60px;
    color: #172438;
`

export const TitleSection = styled.h3`
    font-size: 70px;
    font-weight: 600;
`

export const Subtitle = styled.p`
    color: #172438;
`


export const RightSide = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Psection = styled.p`
    color: #fff;
    font-size: 30px;
    text-align: justify;
    font-family: 'Dosis', sans-serif;
`


