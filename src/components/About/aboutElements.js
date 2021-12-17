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
    width: 30%;

    @media only screen and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
        width: 30%;

    }

    @media only screen and (min-width: 889px) {

    }

    @media only screen and (min-width: 1200px) {

    }
`

export const BgPhoto = styled.div`
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 50%, 0% 0%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
    position: relative;

   

     @media only screen and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
        height: 80%;
    }

    @media only screen and (min-width: 889px) {
        height: 100%;
    }

    @media only screen and (min-width: 1200px) {
        height: 100%;
    }

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



    @media only screen and (max-width: 600px) {
        font-size: 18px;
        & + & + &{
            font-size: 25px;
        }
        & + & + & + &{
            font-size: 16px;
            letter-spacing: 0px;
        }
    }

    @media only screen and (min-width: 600px) {
        font-size: 18px;
        & + & + &{
            font-size: 25px;
        }
        & + & + & + &{
            font-size: 16px;
            letter-spacing: 0px;
        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 25px;
        & + & + &{
            font-size: 45px;
        }
        & + & + & + &{
            font-size: 20px;
            letter-spacing: 0px;
        }
    }

    @media only screen and (min-width: 889px) {

    }

    @media only screen and (min-width: 1200px) {
    font-size: 50px;
    font-weight: 200;
    letter-spacing: 5px;

    & + & + &{
        font-size: 80px;
    }
    & + & + & + &{
        font-size: 40px;
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

    @media only screen and (max-width: 600px) {
    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
        width: 70%;
        height: 80%;
    }

    @media only screen and (min-width: 889px) {

    }

    @media only screen and (min-width: 1200px) {

    }
`

export const Slider = styled.div`
    margin-top: 80px;

    @media only screen and (max-width: 600px) {
        margin-top: 30px;

    }

    @media only screen and (min-width: 600px) {
        margin-top: 30px;

    }

    @media only screen and (min-width: 768px) {
        margin-top: 30px;
    }

    @media only screen and (min-width: 889px) {

    }

    @media only screen and (min-width: 1200px) {

    }
`

export const Item = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }

    @media only screen and (min-width: 600px) {
        font-size: 20px;

    }

    @media only screen and (min-width: 768px) {
        font-size: 25px;
    }

    @media only screen and (min-width: 889px) {

    }

    @media only screen and (min-width: 1200px) {

    }
    
`




