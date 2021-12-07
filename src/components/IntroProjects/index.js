import React, {useState} from 'react'

import {AboutContainer, TitleSection, Text, AboutContent, Subtitle, LeftSide, Bground, RightSide, Psection, Skills, ListSkill, Item, BtnWrapper, ArrowForward, ArrowRight, TextItem, ItemContainer, LogoContainer} from './introProjectElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, Sass, Git, GitHub, GitLab, Tailwindcss} from '../../assets'
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
                    <Psection>I have developed some projects using the following technologies 
                    <br />&  I'm ready to learn new ones ! </Psection>
                    <Skills>
                        <ListSkill>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Js} alt="js logo" />
                                </LogoContainer>
                                <TextItem>JavaScript</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Jquery} alt="Git logo" />
                                </LogoContainer>
                                <TextItem>jQuery</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={LogoReact} alt="React logo" />
                                </LogoContainer>
                                <TextItem>React</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Redux} alt="Redux logo" />
                                </LogoContainer>
                                <TextItem>Redux</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Firebase} alt="Firebase logo" />
                                </LogoContainer>
                                <TextItem>Firebase</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Git} alt="Git logo" />
                                </LogoContainer>
                                <TextItem>Git</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={GitHub} alt="Git logo" />
                                </LogoContainer>
                                <TextItem>Github</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={GitLab} alt="Git logo" />
                                </LogoContainer>
                                <TextItem>GitLab</TextItem>
                            </ItemContainer>
                            {/* <ItemContainer>
                                <Item src={StiledComponents} alt="Styled components logo" />
                                <TextItem>JavaScript</TextItem>
                            </ItemContainer> */}
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Sass} alt="Sass logo" />
                                </LogoContainer>
                                <TextItem>Sass</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Tailwindcss} alt="Sass logo" />
                                </LogoContainer>
                                <TextItem>Tailwinds</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Css} alt="css logo" />
                                </LogoContainer>
                                <TextItem>HTML5</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Html} alt="html logo" />
                                </LogoContainer>
                                <TextItem>CSS</TextItem>
                            </ItemContainer>
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
