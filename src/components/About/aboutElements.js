import styled from "styled-components";


export const AboutContainer = styled.div`
    width: 100%;
    position: relative;
    height: 92vh;

    @media only screen and (max-width: 600px) {
        height: 100vh;
    }

    @media only screen and (min-width: 600px) {
        height: 100vh;
    }

    @media only screen and (min-width: 768px) {
        height: 70vh;
    }

    @media only screen and (min-width: 889px) {
        height: 100vh;
        margin-top: 80px;

    }

    @media only screen and (min-width: 1200px) {
        height: 100vh;
        margin-top: 80px;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        margin-top: 80px;
    }
`


export const AboutContent = styled.div`
    height: 100%;
    display: flex;
`

export const LeftSide = styled.div`
    clip-path: polygon(0 0, 100% 50%, 0 100%, 0% 100%, 0 51%, 0% 0%);
    width: 40%;
    height: 100%;
    background: #01BF71;
    position: relative;
    
    @media only screen and (max-width: 600px) {
        height: 30%;
        width: 20%;
        margin: auto 0px;
    }

    @media only screen and (min-width: 600px) {
        // height: 50%;
        height: 30%;
        width: 20%;
        margin: auto 0px;
    }

    @media only screen and (min-width: 768px) {
        height: 70%;
    }

    @media only screen and (min-width: 889px) {
        height: 70%;
    }

    @media only screen and (min-width: 1200px) {
        height: 100%;
        width: 10%;
    }
`



export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 600px) {
        height: 70%;
        margin: auto;
    }

    @media only screen and (min-width: 600px) {
        height: 70%;
        margin: auto auto;
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
        height: 70%;
    }

    @media only screen and (min-width: 889px) {
        width: 60%;
        height: 100%;
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
        height: 100%;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        height: 100%;
        margin: auto;
    }
`


export const Intro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const TitleContainer = styled.div`
    
`

export const TitleSection = styled.h3`
    color: #01BF71;
        
    @media only screen and (max-width: 600px) {
        font-size: 48px;
        text-align: center;
        font-weight: 900;
    }

    @media only screen and (min-width: 600px) {
        font-size: 60px;
        font-weight: 700;
        text-align: center;

    }

    @media only screen and (min-width: 768px) {
        font-size: 60px;
        font-weight: 900;
    }

    @media only screen and (min-width: 889px) {
        font-size: 80px;
        font-weight: 900;
    }

    @media only screen and (min-width: 1200px){ 
        font-size: 80px;
        font-weight: 900;
        text-align: center;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        font-size: 36px;
        text-align: center;
        font-weight: 900;
    }
`

export const Text = styled.p`
    color: #01BF71;
    margin-bottom: 40px;
    
    @media only screen and (max-width: 600px) {
        font-size: 24px;
        text-align: center;
        font-weight: 400;
        margin-top: 40px;
    }
    
    @media only screen and (min-width: 600px) {
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }
    
    @media only screen and (min-width: 768px) {
        font-size: 24px;
        font-weight: 400;
    }

    @media only screen and (min-width: 889px) {
        font-size: 24px;
        font-weight: 400;
    }

    @media only screen and (min-width: 1200px){ 
        font-size: 36px;
        font-weight: 600;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        font-size: 20px;
        text-align: center;
        font-weight: 400;
    }

    & + & {
        color: #ffffff;
        @media only screen and (max-width: 600px) {
            font-size: 24px;
            text-align: center;
            font-weight: 200;
        }
        
        @media only screen and (min-width: 600px) {
            font-size: 24px;
            font-weight: 400;
            text-align: center;
        }
    
        @media only screen and (min-width: 768px) {
            font-size: 24px;
            font-weight: 400;
        }
    
        @media only screen and (min-width: 889px) {
            font-size: 24px;
            font-weight: 400;
        }
    
        @media only screen and (min-width: 1200px){ 
            font-size: 36px;
            font-weight: 600;
        }

        @media screen
        and (min-width: 360px)
        and (max-width: 768px)
        and (orientation: landscape) {
            font-size: 20px;
            text-align: center;
            font-weight: 200;
        }
    }
`










