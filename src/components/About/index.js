import React, {useState} from 'react'
import {AboutContainer, TitleSection, Text, AboutContent, Subtitle, LeftSide, Bground, RightSide, Psection, BtnWrapper, ArrowForward, ArrowRight, Skills, ListSkill, Item} from './aboutElements'
import {Button} from '../Button/buttonElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, StiledComponents, WordPress, Sass, Git, Figma} from '../../assets'



const About = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer id="about">
            <AboutContent>
                <LeftSide>
                        <Bground>
                        <Text>
                        <TitleSection>ABOUT ME</TitleSection>
                        <Subtitle>a bit about me</Subtitle>
                        </Text>
                        </Bground>
                </LeftSide>
                <RightSide>
                    <Psection>I'm a front-end developer with a background in digital marketing, One of my passions is to build user interfaces dynamics and reactives. I have develope some projects on my own to get more experience in front-end dev, which you can see in the projects' section below</Psection>
                    <Psection>There are some of the languages, frameworks and tools that I'm used to work with</Psection>
                    <Psection>However, I'm ready to learn new tools</Psection>
                    <Skills>
                        <ListSkill>
                            <Item src={Html} alt="html logo"></Item>
                            <Item src={Css} alt="css logo"></Item>
                            <Item src={Js} alt="js logo"></Item>
                            <Item src={Jquery} alt="jQuery logo"></Item>
                            <Item src={LogoReact} alt="React logo"></Item>
                            <Item src={Redux} alt="Redux logo"></Item>
                            <Item src={Firebase} alt="Firebase logo"></Item>
                            <Item src={WordPress} alt="WordPress logo"></Item>
                            <Item src={Sass} alt="Sass logo"></Item>
                            <Item src={Git} alt="Git logo"></Item>
                            <Item src={Figma} alt="Figma logo"></Item>
                            <Item src={StiledComponents} alt="Styled components logo"></Item>
                            
                        </ListSkill>
                    </Skills>
                    {/* <BtnWrapper>
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
                        </BtnWrapper> */}
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
