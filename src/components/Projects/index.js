import React, { useEffect } from 'react'
import Project from '../Project'
import { projects } from '../../data'
import Aos from 'aos'
import "aos/dist/aos.css"
import {AboutContainer,
        TitleSection,
        AboutContent,
        Content,
        Text,
        Psection,
        Skills,
        ListSkill,
        Item,
        TextItem,
        ItemContainer,
        LogoContainer,
        SectionProjects,
        AllProjects,
        ProjectsLlist} from './projectsElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, Sass, Git, GitHub, GitLab, Tailwindcss} from '../../assets'

const Projects = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    })

    return (
    <SectionProjects id="projects">
        <AboutContainer>
            <AboutContent>
                <Content>
                    <TitleSection>MY PROJECTS</TitleSection>
                    <Text>
                    <Psection>I had the opportunity to work in projects such as websites developing, eCommerce, and Apps using the following technologies.</Psection>
                    </Text>
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
                                    <Item src={Css} alt="html logo" />
                                </LogoContainer>
                                <TextItem>CSS</TextItem>
                            </ItemContainer>
                            <ItemContainer>
                                <LogoContainer>
                                    <Item src={Html} alt="css logo" />
                                </LogoContainer>
                                <TextItem>HTML</TextItem>
                            </ItemContainer>
                        </ListSkill>
                        <Psection className='plus'></Psection>
                    </Skills>
                </Content>
            </AboutContent>
            <AllProjects>
                <ProjectsLlist>
                    { projects.map((item)=> (
                    <Project 
                    key={item.id} img={item.img} link={item.link} />
                    ))}
                </ProjectsLlist>
            </AllProjects>
           
        </AboutContainer>
        
    </SectionProjects>
    )
}

export default Projects
