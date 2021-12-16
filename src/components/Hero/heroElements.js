import styled from "styled-components";


export const SectionContainer = styled.section`
    ${'' /* height: 92vh;  */}
    margin-bottom: 50px;

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
        font-size: 60px;
        color: #fff;

    & + & {
        font-weight: 600;
        font-size: 60px;
    }
    
    & + & + &{
        font-weight: 900;
        font-size: 100px;
        color: #000;
    }

    & + & + & + &{
        font-weight: 600;
        font-size: 40px;
        letter-spacing: 10px;
        color: #000;

    }

    @media only screen and (max-width: 600px) {
        font-size: 18px;
        & + & {
            font-size: 25px;
        }
        & + & + &{
            font-size: 30px;
        }
        & + & + & + &{
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 600px) {
        font-size: 30px;
        & + & {
            font-size: 35px;
        }
        & + & + &{
            font-size: 60px;
        }
        & + & + & + &{
            font-size: 20px;
        }
    }

    @media only screen and (min-width: 768px) {
        font-size: 30px;
        & + & {
            font-size: 30px;
        }
        & + & + &{
            font-size: 60px;
        }
        & + & + & + &{
            font-size: 30px;
        }
    }

    @media only screen and (min-width: 889px) {
        font-size: 45px;
        & + & {
            font-size: 40px;
        }
        & + & + &{
            font-size: 80px;
        }
        & + & + & + &{
            font-size: 40px;
        }
    }

    @media only screen and (min-width: 1200px) {
        width: 100%;
        font-weight: 200;
        font-size: 60px;
        color: #fff;

    & + & {
        font-weight: 600;
        font-size: 60px;
    }
    
    & + & + &{
        font-weight: 900;
        font-size: 100px;
        color: #000;
    }

    & + & + & + &{
        font-weight: 600;
        font-size: 40px;
        letter-spacing: 10px;
        color: #000;

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
        height: 100%;
        width: 120px;
        position: absolute;
        left: 20px;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
`

export const Icons = styled.div`
   margin: 10px 0px;
   font-size: 30px;
   color: #fff;
   &:hover {
       color: #000;
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
        width: 30%;
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
    background: rgba(255,255,255, 0.8);
    position: relative;

    @media only screen and (max-width: 600px) {
        height: 100%;
    }

    @media only screen and (min-width: 600px) {
        height: 100%;
    }

    @media only screen and (min-width: 768px) {
        height: 80%;
    }

    @media only screen and (min-width: 889px) {
        height: 100%;

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
    margin-right: auto;
    ${'' /* width: 80%; */}
    object-fit: cover;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }

    @media only screen and (min-width: 600px) {
        width: 80%;

    }

    @media only screen and (min-width: 768px) {
        width: 100%;
    }

    @media only screen and (min-width: 889px) {
        width: 90%;

    }

    @media only screen and (min-width: 1200px) {
        width: 80%;

    }
`

export const Svgcontent = styled.svg`
    width: 31%;
    height: 500px;
    position: absolute;
    top: 29%;
    left: 52%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);

    @media only screen and (max-width: 600px) {

    }

    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 768px) {
        width: 42%;
    }

    @media only screen and (min-width: 889px) {
        width: 39%;

    }

    @media only screen and (min-width: 1200px) {
    }
   
`

export const PathContent = styled.path`
    stroke: #fff;
    stroke-width: 1px;
    fill: transparent;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    stroke-linejoin: round;
    animation: animate 5s forwards infinite;
    -webkit-animation: animate 5s forwards infinite;

    @keyframes animate {
          0% {
            filter: drop-shadow(0px 0px 1px #fff)
            drop-shadow(0px 0px 3px #fff)
            drop-shadow(0px 0px 10px #ff80b3)
            drop-shadow(0px 0px 10px #ff4d94)
            drop-shadow(0px 0px 10px #ff0066);
          }

          100% {
            stroke-dashoffset: 0;
            filter: drop-shadow(0px 0px 3px #fff)
            drop-shadow(0px 0px 6px #fff)
            drop-shadow(0px 0px 15px #ff80b3)
            drop-shadow(0px 0px 5px #ff4d94)
            drop-shadow(0px 0px 5px #ff0066);
          }
`