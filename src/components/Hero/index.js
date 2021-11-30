import React, {useState} from 'react'
import Video from '../../assets/videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, Photo, HeroContent,LeftSide, BgPhoto, RightSide, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'
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
                    <Photo src={me} alt="profile-picture" className="profile-picture" />
                    </BgPhoto>
                </RightSide>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
