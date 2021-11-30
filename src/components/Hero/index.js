import React, {useState} from 'react'
// import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, Photo, HeroContent,LeftSide, BgPhoto, RightSide, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'
import {Button} from '../Button/buttonElements'
import me from '../../images/me.png'


const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={""} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <LeftSide>
                    <HeroP>
                    A passionate about technologies & web development
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
                        See projects
                        {hover ? <ArrowForward /> : <ArrowRight /> }
                        </Button>
                    </HeroBtnWrapper>
                </LeftSide>
                <RightSide>
                    <BgPhoto>
                    <Photo src={me} alt="" className="profile-picture" />
                    </BgPhoto>
                </RightSide>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
