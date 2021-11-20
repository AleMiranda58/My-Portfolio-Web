import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'
import {Button} from '../Button/buttonElements'

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
            <HeroP>
                Hi, my name is 
            </HeroP>
                <HeroH1>
                    Alejandra Miranda Reyes
                </HeroH1>
                <HeroP>
                    Wellcome to my portfolio web
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                    to="projects"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    See projects
                    {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
