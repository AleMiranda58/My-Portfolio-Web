import styled from "styled-components";


export const InfoContainer = styled.div`
    z-index: 2;
`

export const InfoWrapper = styled.div`
    z-index: 2;
`

export const InfoRow = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: ${({boxesPosition}) => (boxesPosition ? 'row' : 'row-reverse')};
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`

export const Column1 = styled.div`
    width: 70%;
    height: 100vh;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 80px;
`

export const Column2 = styled.div`
    z-index: 2;
    background: rgba(255,255,255, 0.5);
    clip-path: ${({pathClip}) => (pathClip ? 'polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 48%, 0% 0%)' : 'polygon(100% 0%, 100% 52%, 100% 100%, 50% 100%, 0% 50%, 50% 0)')};
    width: 35%;
`

export const TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const TopLine = styled.p`
`

export const Heading = styled.h3`
    font-size: 70px;
    font-weight: 200;
    text-align: center;
    color: ${({ lighText }) => (lighText ? '#010606' : '#f7f8fa')};
`


export const Subtitle = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-size: 30px;
    text-align: center;
`

export const BtnWrap = styled.p`
    width: 25%;
`

export const ImgWrap = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    z-index: 2;
`

export const TextSide = styled.h3`
    font-size: 70px;
    font-weight: 600;
    color: ${({ lighText }) => (lighText ? '#f7f8fa' : '#010606')};
`