import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    height: 92vh;
    position: relative;
`


export const AboutContent = styled.div`
    height: 100%;
    display: flex;
`

export const LeftSide = styled.div`
    width: 30%;
`

export const BgPhoto = styled.div`
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    position: relative;

`

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const PhotoContainer = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
`

export const Intro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    color: #fff;
    font-size: 50px;
    font-weight: 200;
    letter-spacing: 5px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    & + & + &{
        font-size: 80px;
        font-weight: 800;
        color: #000;
        letter-spacing: 2px;
    }

    & + & + & + &{
        font-size: 40px;
        font-weight: 200;
        color: #fff;
        letter-spacing: 3px;
    }
`

export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Slider = styled.div`
    margin-top: 80px;
`

export const Item = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`




