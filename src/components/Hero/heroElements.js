import styled from "styled-components";


export const SectionContainer = styled.section`

    @media only screen and (max-width: 600px) {
        height: 40vh;
    }

    @media only screen and (min-width: 600px) {
        height: 50vh;
    }

    @media only screen and (min-width: 768px) {
        height: 70vh;
    }

    @media only screen and (min-width: 889px) {
        height: 80vh;

    }

    @media only screen and (min-width: 1200px) {
    height: 92vh; 

    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    @media only screen and (max-width: 600px) {
        margin-top: 60px;
    }

    @media only screen and (min-width: 600px) {
        margin-top: 60px;
    }

    @media only screen and (min-width: 768px) {
        margin-top: 0px;
        
    }

    @media only screen and (min-width: 889px) {
    }

    @media only screen and (min-width: 1200px) {
    }
`

export const LeftSide = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    pading: 0 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${'' /* margin-bottom: 80px; */}

    @media only screen and (max-width: 600px) {
        width: 70%;

    }

    @media only screen and (min-width: 600px) {
        width: 60%;
    }

    @media only screen and (min-width: 768px) {
        width: 70%;
    }

    @media only screen and (min-width: 889px) {
        width: 60%;
       
    }

    @media only screen and (min-width: 1200px) {
    }
`

export const Intro = styled.div`
    ${'' /* width: 100%;
    position: absolute;
    left : 60px; */}
`

export const Text = styled.p`
        width: 100%;
        font-weight: 200;
        font-size: 50px;
        color: #fff;
        ${'' /* color: rgba(255,255,255, 0.3); */}

    & + & {
        font-weight: 600;
        font-size: 60px;
        ${'' /* color: rgba(255,255,255, 0.5); */}
        ${'' /* color: rgba(255,255,255, 0.5); */}
    }
    
    & + & + & {
        font-weight: 600;
        font-size: 40px;
        letter-spacing: 10px;
        color: #fff;
        letter-spacing: 0;
        ${'' /* color: rgba(255,255,255, 0.3) */}
    }

    & + & + & + &{
        font-weight: 900;
        font-size: 100px;
        color: #01BF71;
        letter-spacing: 0;
        ${'' /* color: #fff; */}
    }

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        & + & {
            font-size: 20px;
        }
        & + & + &{
            font-size: 20px;
            letter-spacing: 0;
        }
        & + & + & + &{
            font-size: 20px;
        }
        & + & + & + & + & {
            font-size: 20px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 600px) {
        font-size: 30px;
        & + & {
            font-size: 30px;
        }
        & + & + &{
            font-size: 25px;
            letter-spacing: 0;
        }
        & + & + & + &{
            font-size: 20px;
        }
        & + & + & + & + & {
            font-size: 20px;
            font-weight: 200;
            color: #fff;

        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 30px;
        letter-spacing: 0;
        & + & {
            font-size: 30px;
            letter-spacing: 0;
        }
        & + & + &{
            font-size: 30px;
            letter-spacing: 0;

        }
        & + & + & + &{
            font-size: 30px;
            letter-spacing: 0;

        }
        & + & + & + & + & {
            font-size: 30px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 889px) {
        font-size: 40px;
        letter-spacing: 0;
        & + & {
            font-size: 40px;
        }
        & + & + &{
            font-size: 80px;
            letter-spacing: 0;
        }
        & + & + & + &{
            font-size: 40px;
        }
        & + & + & + & + & {
            font-size: 40px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 1200px) {
        width: 100%;
        font-weight: 200;
        font-size: 60px;

    & + & {
        font-weight: 400;
        font-size: 80px;
    }
    
    & + & + &{
        font-weight: 400;
        font-size: 50px;
        letter-spacing: 0;
       
    }

    & + & + & + &{
        font-size: 70px;
        font-weight: 600;
        letter-spacing: 0;
    }

    & + & + & + & + & {
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;
    }

    }
`

export const MediaBar = styled.div`
   ${'' /* height: 100%;
   width: 120px;
   position: absolute;
   left: 20px;
   bottom: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end; */}

   @media only screen and (max-width: 600px) {
        display: none;
    }

    @media only screen and (min-width: 600px) {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }

    @media only screen and (min-width: 889px) {
        display: none;

    }

    @media only screen and (min-width: 1200px) {
        height: 20%;
        width: 60px;
        position: absolute;
        left: 0px;
        ${'' /* bottom: 0px; */}
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${'' /* background: rgba(255,255,255, 0.8); */}
        background: #01BF71;
        ${'' /* justify-content: flex-end; */}
    }
`

export const Icons = styled.a`
   margin: 10px 0px;
   font-size: 30px;
   color: #fff;
   &:hover {
       color: #172438;
   }
`

export const RightSide = styled.div`
    width: 50%;

    @media only screen and (max-width: 600px) {
        width: 40%;
    }

    @media only screen and (min-width: 600px) {
        width: 40%;
    }

    @media only screen and (min-width: 768px) {
        width: 60%;
    }

    @media only screen and (min-width: 889px) {
        width: 40%;

    }

    @media only screen and (min-width: 1200px) {
    }
`

export const SideBg = styled.div`
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    ${'' /* width: 100%;
    height: 100%; */}
    ${'' /* background: rgba(255,255,255, 0.8); */}
    background: #01BF71;
    position: relative;

    @media only screen and (max-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 600px) {
        height: 70%;
    }

    @media only screen and (min-width: 768px) {
        height: 80%;
    }

    @media only screen and (min-width: 889px) {
        height: 80%;

    }

    @media only screen and (min-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const PhotoContainer = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
`

export const Photo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: 0px;
    ${'' /* width: 80%; */}
    object-fit: cover;

    @media only screen and (max-width: 600px) {
        width: 85%;
    }

    @media only screen and (min-width: 600px) {
        width: 85%;

    }

    @media only screen and (min-width: 768px) {
        width: 85%;
    }

    @media only screen and (min-width: 889px) {
        width: 85%;

    }

    @media only screen and (min-width: 1200px) {
        width: 85%;

    }
`