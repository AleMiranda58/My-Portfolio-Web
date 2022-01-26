import React, { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Button } from '../Button/buttonElements'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {SectionContainer,
        Content,
        LeftSide,
        Intro,
        Text,
        MediaBar,
        Icons,
        RightSide,
        SideBg,
        PhotoContainer,
        Photo} from './heroElements'
import {ProfilePicture as me} from '../../assets/index'


const Hero = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    const particlesInit = (main) => {
    //   console.log(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    })

    
    return (
        <SectionContainer id="home">
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
                fpsLimit: 30,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: false,
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
                    duration: 0.1,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                    opacity: 0.1,
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    value_area: 800,
                    },
                    value: 30,
                },
                opacity: {
                    value: 0.1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 10,
                },
                },
                detectRetina: true,
            }}
            />
            <Content>
                <LeftSide>
                    <MediaBar>
                        <Icons href="https://www.linkedin.com/in/alejandra-mirandareyes/" target="_blank" rel="noreferrer"><BsLinkedin /></Icons>
                        <Icons href="https://github.com/AleMiranda58" target="_blank" rel="noreferrer"><BsGithub /></Icons>
                    </MediaBar>
                    <Intro>
                    <Text>Hello !</Text>
                    <Text>I'm Alejandra Miranda</Text>
                    <Text></Text>
                    <Text>A Front-End Developer</Text>
                    <Text>who enjoys finding solutions.</Text>
                    <Button
                    to='projects'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    data-aos="slide-left"
                    >My Projects</Button>
                    </Intro>
                </LeftSide>
                <RightSide>
                    <SideBg>
                    <PhotoContainer>
                    <Photo src={me} alt="profile-picture" className="profile-picture" />
                    </PhotoContainer>
                    </SideBg>
                </RightSide>
            </Content>
        </SectionContainer>
    )
}

export default Hero
