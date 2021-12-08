import styled from "styled-components";


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
    position: relative;
    display: flex;
    justify-content: center;
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
    justify-content: space-around;
`

export const ContentSide = styled.div`
    height: 70%;
    
`

export const Psection = styled.p`
    color: #fff;
    font-size: 25px;
    font-family: 'Dosis', sans-serif;
    margin: 20px 0px;
`


// 
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