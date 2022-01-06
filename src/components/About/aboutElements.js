import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    position: relative;
    height: 92vh;

  

    @media only screen and (max-width: 600px) {
        height: 50vh;
    }

    @media only screen and (min-width: 600px) {
        height: 50vh;
    }

    @media only screen and (min-width: 768px) {
        height: 70vh;
    }

    @media only screen and (min-width: 889px) {
        height: 100vh;
    }

    @media only screen and (min-width: 1200px) {
        height: 100vh;
        margin-top: 80px;
    }
`


export const AboutContent = styled.div`
    height: 100%;
    display: flex;
    
`

export const LeftSide = styled.div`
    width: 50%;

    @media only screen and (max-width: 600px) {
        width: 25%;
    }

    @media only screen and (min-width: 600px) {
        width: 30%;
    }

    @media only screen and (min-width: 768px) {
        width: 40%;
    }

    @media only screen and (min-width: 889px) {
        width: 40%;
    }

    @media only screen and (min-width: 1200px) {
        width: 40%;
    }
`

export const BgPhoto = styled.div`
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: #01BF71;
    position: relative;

     @media only screen and (max-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 768px) {
        height: 70%;
    }

    @media only screen and (min-width: 889px) {
        height: 70%;
    }

    @media only screen and (min-width: 1200px) {
        height: 100%;
    }

`

export const Photo = styled.img`
    width: 80%;
    height: 80%;
    object-fit: cover;
`

export const PhotoContainer = styled.div`
    display: block;
    position: absolute;
    bottom: -5px;
`

export const Intro = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Text = styled.p`
    color: #01BF71;
    text-align: justify;
    font-family: 'Montserrat', sans-serif;
    
    & + & {
        color: rgba(255,255,255, 0.8);
        text-align: justify;
    }

    @media only screen and (max-width: 600px) {
        font-size: 18px;
        & + & {
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 600px) {
        font-size: 18px;
        font-weight: 600;

        & + & {
        font-size: 16px;
        font-weight: 200;
        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 20px;
        font-weight: 600;

        & + & {
        font-size: 16px;
        font-weight: 400;
        }
    }

    @media only screen and (min-width: 889px) {
        font-size: 50px;
        font-weight: 600;
        text-align: center;

        & + & {
        font-size: 20px;
        font-weight: 400;
        }
    }

    @media only screen and (min-width: 1200px) {
    font-size: 80px;
    font-weight: 900;
    text-align: center;

    & + & {
        font-size: 30px;
    }
   

`

export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
        height: 70%;
    }

    @media only screen and (min-width: 889px) {
        height: 70%;
    }

    @media only screen and (min-width: 1200px) {
        width: 50%;
        height: 100%;
    }
`





