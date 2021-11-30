import React from 'react'
import {ContainerAbout, TitleSection, PSection, Description, Skills, ListSkill, Item} from './aboutElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, WordPress, Sass, Git, Figma} from '../../assets'


const About = () => {
    return (
        <>
        <ContainerAbout id="about">
        <Description>
        <TitleSection>ABOUT ME</TitleSection>
        <PSection>Hi, I'm Alejandra Miranda! I'm a Front-end developer with a background in marketing and advertising. I'm ceative, logical thinking and problem-solving individual who enjoys building user experiences in order to create the best possible user experience.</PSection>
        <PSection>Hi, I'm Alejandra Miranda! I'm a Front-end developer with a background in marketing and advertising. I'm ceative, logical thinking and problem-solving individual who enjoys building user experiences in order to create the best possible user experience.</PSection>
        <PSection>There are some of the technologies with I'm used to work on my projects</PSection>
        </Description>
        <Skills>
            <ListSkill>
                <Item src={Html} alt="asdf"></Item>
                <Item src={Css} alt="asdf"></Item>
                <Item src={Js} alt="asdf"></Item>
                <Item src={Jquery} alt="asdf"></Item>
                <Item src={LogoReact} alt="asdf"></Item>
                <Item src={Redux} alt="asdf"></Item>
                <Item src={Firebase} alt="asdf"></Item>
                <Item src={WordPress} alt="asdf"></Item>
                <Item src={Sass} alt="asdf"></Item>
                <Item src={Git} alt="asdf"></Item>
                <Item src={Figma} alt="asdf"></Item>
            </ListSkill>
        </Skills>
        </ContainerAbout>
        </>
    )
}

export default About
