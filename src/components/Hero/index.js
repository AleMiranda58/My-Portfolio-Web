import React, {useState} from 'react'
import Particles from 'react-tsparticles'
import {HeroContainer, Photo, Svgcontent, PathContent, PhotoContainer, HeroContent,LeftSide, BgPhoto, RightSide, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroElements'
import {Button} from '../Button/buttonElements'
import {ProfilePicture as me} from '../../assets/index'


const Hero = () => {
    const particlesInit = (main) => {
      console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                color: {
                    value: "#0d47a1",
                },
                },
                fpsLimit: 60,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    value_area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
            />
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
