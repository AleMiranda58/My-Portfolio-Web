import React, {useState} from 'react'
import Video from '../../assets/videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, Photo, Svgcontent, PathContent, PhotoContainer, HeroContent,LeftSide, BgPhoto, RightSide, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'
import {Button} from '../Button/buttonElements'
import {ProfilePicture as me} from '../../assets/index'


const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <LeftSide>
                    <HeroP>
                    Passionate about technologies & web development
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                        to="projects"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        MY PROJECTS
                        {hover ? <ArrowForward /> : <ArrowRight /> }
                        </Button>
                        </HeroBtnWrapper>
                </LeftSide>
                <RightSide>
                    <BgPhoto>
                    <PhotoContainer>
                    <Photo src={me} alt="profile-picture" className="profile-picture" />
                    <Svgcontent id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 498.63 190.85">
                        <PathContent className="lineGlasses" d="M364.64-293.36S321.23-321.11,250-315s-86.55,35.75-86.55,35.75-38.3-19.92-79.66-2C48-339.49-81.66-318.55-81.66-318.55s-51.57,7.66-50.55,26,4.59,88.85,31.66,115.91,65.36,41.37,112.85,31.66S94-209.28,90.15-271.06c34.85-21.45,70.23,1.53,70.23,1.53S140-170,212-141.89c22.75,8.88,51.35,13.71,78.2,4.73A104.27,104.27,0,0,0,330-161.72C373.64-204,364.64-293.36,364.64-293.36Z" transform="translate(132.73 322.72)" />
                    </Svgcontent>
                    </PhotoContainer>
                    </BgPhoto>
                </RightSide>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
