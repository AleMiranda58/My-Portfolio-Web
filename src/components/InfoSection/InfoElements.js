// import styled from "styled-components";


// export const InfoContainer = styled.div`
//     z-index: 2;
//     width: 100%;
//     height: 100vh;
// `

// export const InfoWrapper = styled.div`
//     height: 100vh;
//     width: 100%;
//     z-index: 2;

// `
// export const InfoRow = styled.div`
//     z-index: 10;
//     display: grid;
//     grid-template-columns: (3fr, 1fr);
//     ${'' /* grid-template-rows: (1fr); */}
//     align-items: center;
//     gird-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
//     justify-content: center;
//     background: black;
//     width: 100%;
//     height: 100%;

//     @media screen and (max-width: 768px) {
//         gird-template-areas: ${({imgStart}) =>
//         (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`)};
//     }
// `

// export const Column1 = styled.div`
//     margin-botton: 15px;
//     padding: 0 15px;
//     grid-area: col1;
//     height: 100vh;
//     width: 30%;
//     z-index: 2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// export const Column2 = styled.div`
//     ${'' /* margin-botton: 15px; */}
//     ${'' /* padding: 0 15px; */}
//     grid-area: col2;
//     z-index: 2;
//     ${'' /* display: flex;
//     justify-content: center;
//     align-items: center; */}
//     height: 100vh;
//     width: 40%;

//     background: red;
//     clip-path: ${({pathClip}) => (pathClip ? 'polygon(50% 0, 100% 50%, 50% 100%, 0% 100%, 0 48%, 0% 0%)' : 'polygon(100% 0%, 100% 52%, 100% 100%, 50% 100%, 0% 50%, 50% 0)')}; */}
// `

// export const TextWrapper = styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-botton: 60px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     ${'' /* z-index: 2; */}
// `

// export const TopLine = styled.p`
//     z-index: 2;
//     color: #01bf71;
//     font-size: 16px;
//     line-height: 15px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
// `

// export const Heading = styled.h1`
//     z-index: 2;
//     padding-botton: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: ${({ lighText }) => (lighText ? '#010606' : '#f7f8fa')};

//     @media screen and (max-width: 480px) {
//     z-index: 2;
//         font-size: 32px;
//     }
// `

// export const Subtitle = styled.p`
//     z-index: 2;
//     max-width: 440px;
//     margin-botton: 35px;
//     font-size: 18px;
//     line-height: 24px;
//     font-weight: 600;
//     color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
// `

// export const BtnWrap = styled.p`
//     z-index: 2;
//     display: flex;
//     justify-content: flex-start;
// `

// export const ImgWrap = styled.div`
//     z-index: 2;
//     ${'' /* max-width: 55px; */}
//     width: 100%;
//     height: 100%
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

// export const Img = styled.img`
//     z-index: 2;
//     width: 100%;
//     ${'' /* margin: 0 0 10px 0;
//     padding-right: 0; */}
// `

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