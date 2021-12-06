import React, {useState} from 'react'
import {AboutContainer, TitleSection, Text, AboutContent, Subtitle, LeftSide, Bground, RightSide, Psection, Skills, ListSkill, Item, BtnWrapper, ArrowForward, ArrowRight} from './introProjectElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, StiledComponents, WordPress, Sass, Git, Figma} from '../../assets'
import {Button} from '../Button/buttonElements'


const IntroProjects = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer id="projects">
            <AboutContent>
                <RightSide>
                    <Psection>I have developed some projects on my own using the following technologies 
                    <br />&  I'm ready to learn new ones ! </Psection>
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
                    <BtnWrapper>
                        <Button
                        to="AllProjects"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        SEE PROJECTS
                        {hover ? <ArrowForward /> : <ArrowRight /> }
                        </Button>
                    </BtnWrapper>
                </RightSide>
                <LeftSide>
                        <Bground>
                        <Text>
                        <TitleSection>PROJECTS</TitleSection>
                        <Subtitle></Subtitle>
                        </Text>
                        </Bground>
                </LeftSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default IntroProjects
