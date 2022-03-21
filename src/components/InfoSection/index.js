import React from 'react'
import { Button } from '../Button/buttonElements'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow,
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle,
    BtnWrap,
    Column2, 
    Img, 
    ImgWrap,
    TextSide 
    } from './InfoElements';


const InfoSection = ({
    id, 
    imgStart, 
    topLline, 
    lightText, 
    headline, 
    description,
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,
    pathClip,
    boxesPosition,
    textSide
}) => {
    return (
        <>
         <InfoContainer  id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart} boxesPosition={boxesPosition}>
                     <Column1>
                        <TextWrapper>
                            <TopLine>{topLline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle>{description}</Subtitle>
                            <BtnWrap>
                            <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2 = {dark2 ? 1 : 0}
                                >{buttonLabel}
                            </Button>
                            </BtnWrap>
                        </TextWrapper>
                     </Column1>
                     <Column2 pathClip={pathClip}>
                         <ImgWrap>
                             <Img src={img} alt={alt} />
                             <TextSide lightText={lightText}>{textSide}</TextSide>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection
