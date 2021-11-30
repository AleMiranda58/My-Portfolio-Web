import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1200px) {
        height: 75vh;
    }

    @media screen and (max-width: 800px) {
        height: 70vh;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const RightSide = styled.div`
    width: 50%;
    position: relative;
    margin-top: 80px;

    @media screen and (max-width: 800px) {
        width: 50%;
    }
`

export const BgPhoto = styled.div`
   clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
   width: 100%;
   height: 100%;
   background: purple;

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
    font-size: 60px;
    text-align: center;
    font-family: "Poppins", sans-serif;

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
    margin-top: 34px;
    cursor: pointer;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px
`

