// import React from 'react'
// import {ContainerAbout, TitleSection, PSection, Description, Skills, ListSkill, Item} from './aboutElements'
// import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, WordPress, Sass, Git, Figma} from '../../assets'


// const About = () => {
//     return (
//         <>
//         <ContainerAbout id="about">
//         <Description>
//         <TitleSection>ABOUT ME</TitleSection>
//         <PSection>Hi, I'm Alejandra Miranda! I'm a Front-end developer with a background in marketing and advertising. I'm ceative, logical thinking and problem-solving individual who enjoys building user experiences in order to create the best possible user experience.</PSection>
//         <PSection>There are some of the technologies with I'm used to work on my projects</PSection>
//         </Description>
//         <Skills>
//             <ListSkill>
//                 <Item src={Html} alt="asdf"></Item>
//                 <Item src={Css} alt="asdf"></Item>
//                 <Item src={Js} alt="asdf"></Item>
//                 <Item src={Jquery} alt="asdf"></Item>
//                 <Item src={LogoReact} alt="asdf"></Item>
//                 <Item src={Redux} alt="asdf"></Item>
//                 <Item src={Firebase} alt="asdf"></Item>
//                 <Item src={WordPress} alt="asdf"></Item>
//                 <Item src={Sass} alt="asdf"></Item>
//                 <Item src={Git} alt="asdf"></Item>
//                 <Item src={Figma} alt="asdf"></Item>
//             </ListSkill>
//         </Skills>
//         </ContainerAbout>
//         </>
//     )
// }

// export default About

import React, {useState} from 'react'
import {HeroContainer, Photo, Svgcontent, PathContent, PhotoContainer, HeroContent,LeftSide, BgPhoto, RightSide, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './aboutElements'
import {Button} from '../Button/buttonElements'
import {ProfilePicture as me} from '../../assets/index'


const About = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="about">
            <HeroContent>
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
            </HeroContent>
        </HeroContainer>
    )
}

export default About
