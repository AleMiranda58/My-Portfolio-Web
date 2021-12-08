import styled from "styled-components";
import SVG from "react-inlinesvg";


export const AboutContainer = styled.div`
    width: 100%;
    ${'' /* height: 100vh; */}
    position: relative;
    z-index: 1;
    margin-top: 100px;

`


export const AboutContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const LeftSide = styled.div`
    width: 30%;
    height: 100%;
    ${'' /* position: relative; */}
    display: flex;
    justify-content: center;
`

export const Psection = styled.p`
    color: #fff;
    font-size: 25px;
    font-family: 'Dosis', sans-serif;
    & + & {
    margin: 20px 0px;
    }
`
export const TitleSection = styled.h3`
    font-size: 70px;
    font-weight: 600;
    color: #fff;
    align-self: flex-end;
`

export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const ContentBotton = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    ${Psection} {
        text-align: justify;
    }
    
`

export const ContentTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    ${Psection} {
        font-size: 25px;
         align-self: flex-end;
    }
`


export const Bref = styled.div`
    width: 100%;
`

export const BrefItem = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const IconItem = styled(SVG)`
    width: 30px;
    height: 30px;
    color: #fff;
    margin-right: 25px;
`
export const BgPhoto = styled.div`
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
;
`

export const Photo = styled.img`
    display: block;
    width: 150%;
    background-position: center;
    object-fit: cover;
`

export const PhotoContainer = styled.div`
    display: block;
`