import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 1;
    padding-bottom: 200px;

    @media screen and (max-width: 1200px) {
        height: 75vh;
    }

    @media screen and (max-width: 800px) {
        height: 70vh;
    }
`


export const HeroContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 900px) {
    height: 75vh;
    }

    @media screen and (max-width: 800px) {
        height: 70vh;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }


`


export const LeftSide = styled.div`
    width: 50%;
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const RightSide = styled.div`
    width: 50%;
    position: relative;

    @media screen and (max-width: 800px) {
        width: 50%;
    }
`

export const BgPhoto = styled.div`
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.5);
;

   @media screen and (max-width: 1200px) {
    width: 100%;
   height: 70%;
    }

    @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    }

   @media screen and (max-width: 600px) {
    display: none
    }
`

export const Photo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    object-fit: cover;

    
    @media screen and (max-width: 900px) {
    width: 100%;
    }

    @media screen and (max-width: 600px) {
    display: none;
    }
`

export const HeroP = styled.p`
    color: #fff;
    font-size: 70px;
    font-weight: 200;
    text-align: center;

    @media screen and (max-width: 1500px) {
        font-size: 50px;
}

    @media screen and (max-width: 1200px) {
        font-size: 40px;
    }

    @media screen and (max-width: 900px) {
        font-size: 30px;
    }

    @media screen and (max-width: 700px) {
        font-size: 25px;
    }

    @media screen and (max-width: 500px) {
        ${'' /* font-size: 15px; */}
    }
`

export const HeroBtnWrapper = styled.div`
    width: 30%;
    margin-top: 34px;
    cursor: pointer;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

/*SVG */
export const PhotoContainer = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
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

    @media screen and (max-width: 900px) {
        width: 42%;
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