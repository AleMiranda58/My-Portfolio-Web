import React from 'react'
import Particles from 'react-tsparticles'
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
        Photo, 
        Svgcontent, 
        PathContent} from './heroElements'
import {ProfilePicture as me} from '../../assets/index'


const Hero = () => {
    const particlesInit = (main) => {
      console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

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
                        <Icons><BsLinkedin /></Icons>
                        <Icons><BsGithub /></Icons>
                    </MediaBar>
                    <Intro>
                    <Text>Welcome to my portfolio,</Text>
                    <Text>I'm Alejandra Miranda</Text>
                    <Text>A Creative and Curious  </Text>
                    <Text>Front-End Developer</Text>
                    <Text>who enjoy finding solutions</Text>
                    </Intro>
                </LeftSide>
                <RightSide>
                    <SideBg>
                    <PhotoContainer>
                    <Photo src={me} alt="profile-picture" className="profile-picture" />
                    {/* <Svgcontent id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 498.63 190.85">
                        <PathContent className="lineGlasses" d="M364.64-293.36S321.23-321.11,250-315s-86.55,35.75-86.55,35.75-38.3-19.92-79.66-2C48-339.49-81.66-318.55-81.66-318.55s-51.57,7.66-50.55,26,4.59,88.85,31.66,115.91,65.36,41.37,112.85,31.66S94-209.28,90.15-271.06c34.85-21.45,70.23,1.53,70.23,1.53S140-170,212-141.89c22.75,8.88,51.35,13.71,78.2,4.73A104.27,104.27,0,0,0,330-161.72C373.64-204,364.64-293.36,364.64-293.36Z" transform="translate(132.73 322.72)" />
                    </Svgcontent> */}
                    </PhotoContainer>
                    </SideBg>
                </RightSide>
            </Content>
        </SectionContainer>
    )
}

export default Hero
