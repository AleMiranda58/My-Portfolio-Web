import styled from "styled-components";


export const SectionContainer = styled.section`
    @media only screen and (max-width: 600px) {
        height: 100vh;
        margin-top: 80px;
    }

    @media only screen and (min-width: 600px) {
        height: 100vh;
        margin-top: 80px;
    }

    @media only screen and (min-width: 768px) {
        height: 100vh;
    }

    @media only screen and (min-width: 889px) {
        height: 100vh;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 0px;
        height: 92vh; 
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        margin-top: 0px;
        height: 92vh;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content:space-between;

    @media only screen and (max-width: 600px) {
        margin-top: 60px;
        flex-direction: column;
        justify-content:space-around;
    }

    @media only screen and (min-width: 600px) {
        margin-top: 60px;
        flex-direction: column;
        justify-content:space-around;
    }

    @media only screen and (min-width: 768px) {
        justify-content:space-around;
        margin-top: -60px;
    }

    @media only screen and (min-width: 889px) {
        justify-content:space-around;
        margin-top: -60px;
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 0px;
        flex-direction: row;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        margin-top: 0px;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const LeftSide = styled.div`
    height: 100%;
    display: flex;
    pading: 0 50px;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 50vh;
        left: 50px;
    }

    @media only screen and (min-width: 600px) {
        width: 100%;
        height: 50vh;
        left: 50px;
    }

    @media only screen and (min-width: 768px) {
        width: 60%;
        align-items: center;
    }

    @media only screen and (min-width: 889px) {
        width: 60%;
        align-items: center;
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        pading: 0 50px;
        left: 0px;
    }

    @media only screen and (min-width: 1400px) {
        width: 60%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        pading: 0 50px;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        width: 40%;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
`

export const RightSide = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 20vh;
        position: relative;
    }

    @media only screen and (min-width: 600px) {
        width: 100%;
        height: 20vh;
        position: relative;
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: 20vh;
        position: relative;
    }

    @media only screen and (min-width: 889px) {
        width: 100%;
        height: 20vh;
        position: relative;
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
        height: 92vh;
    }

    @media only screen and (min-width: 1400px) {
        width: 40%;
        height: 92vh;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        width: 50%;
        height: 92vh; 
    }
`

export const Intro = styled.div`
    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 50%;
    }
`

export const Text = styled.p`
        width: 100%;
        font-weight: 200;
        font-size: 50px;
        color: #fff;

    & + & {
        font-weight: 600;
        font-size: 60px;
    }
    
    & + & + & {
        font-weight: 600;
        font-size: 40px;
        letter-spacing: 10px;
        color: #fff;
        letter-spacing: 0;
    }

    & + & + & + &{
        font-weight: 900;
        font-size: 100px;
        color: #01BF71;
        letter-spacing: 0;
    }

    @media only screen and (max-width: 600px) {
        font-size: 40px;
        & + & {
            font-size: 35px;
        }
        & + & + &{
            font-size: 40px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 30px;
             font-weight: 600;

        }
        & + & + & + & + & {
            font-size: 24px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 600px) {
        font-size: 40px;
        & + & {
            font-size: 40px;
        }
        & + & + &{
            font-size: 50px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 40px;
             font-weight: 600;

        }
        & + & + & + & + & {
            font-size: 20px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 60px;
        & + & {
            font-size: 50px;
        }
        & + & + &{
            font-size: 40px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 40px;
             font-weight: 600;

        }
        & + & + & + & + & {
            font-size: 35px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 889px) {
        font-size: 60px;
        & + & {
            font-size: 50px;
        }
        & + & + &{
            font-size: 40px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 40px;
             font-weight: 600;

        }
        & + & + & + & + & {
            font-size: 35px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 1200px) {
        font-size: 80px;
        & + & {
            font-size: 60px;
        }
        & + & + &{
            font-size: 0px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 60px;
             font-weight: 600;

        }
        & + & + & + & + & {
            font-size: 45px;
            font-weight: 200;
            color: #fff;
        }
    }

    @media only screen and (min-width: 1400px) {
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

    @media screen
    and (min-width: 360px)
    and (max-width: 915px)
    and (orientation: landscape) {
        font-size: 20px;
        & + & {
            font-size: 20px;
        }
        & + & + &{
            font-size: 30px;
            letter-spacing: 0;
            color: red;
        }
        & + & + & + &{
            font-size: 20px;
             font-weight: 600;
        }
        & + & + & + & + & {
            font-size: 16px;
            font-weight: 200;
            color: #fff;
        }
    }
`

export const MediaBar = styled.div`
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
        display: none;
    }

    @media only screen and (min-width: 1400px) {
        height: 20%;
        width: 60px;
        position: absolute;
        left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #01BF71;
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


export const SideBg = styled.div`
    background: #01BF71;
    position: relative;
    height: 100%;

    @media only screen and (max-width: 600px) {
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-width: 889px) {
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-width: 1200px) {
        height: 100vh;
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        height: 100vh;
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
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
    object-fit: cover;

    @media only screen and (max-width: 600px) {
        width: 60%;
        margin-right: 20px;
    }

    @media only screen and (min-width: 600px) {
        width: 55%;
        margin-right: 20px;
    }

    @media only screen and (min-width: 768px) {
        width: 40%;
        margin-right: 30px;
    }

    @media only screen and (min-width: 889px) {
        width: 40%;
        margin-right: 30px;
    }

    @media only screen and (min-width: 1200px) {
        width: 110%;
        height: 100%;
        margin-right: 0px;
    }

    @media only screen and (min-width: 1400px) {
        width: 85%;
        height: 100%;
        margin-right: 0px;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        width: 50%;
        height: 100%;
        margin-right: 120px;
    }
`