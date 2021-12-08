import React from 'react'
import Project from '../Project'
import { projects } from '../../data'
import {AboutContainer, TitleSection, AboutContent, LeftSide, Bground, RightSide, Psection, Skills, ListSkill, Item, TextItem, ItemContainer, LogoContainer, SectionProjects, AllProjects, ProjectsLlist, SeeMore} from './projectsElements'
import {Html, Css, Js, Jquery, LogoReact, Redux, Firebase, Sass, Git, GitHub, GitLab, Tailwindcss} from '../../assets'
import { Button } from '../Button/buttonElements'

const Projects = () => {
    return (
    <SectionProjects id="projects">
        <AboutContainer>
            <AboutContent>
                <LeftSide>
                    <TitleSection>PROJECTS</TitleSection>
                    <Psection>I have developed some projects using the following technologies and I'm ready to learn new ones ! </Psection>
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
                    </Skills>
                </LeftSide>
                <RightSide>
                        <Bground>
                        {/* <Text>
                        <TitleSection></TitleSection>
                        <Subtitle></Subtitle>
                        </Text> */}
                        </Bground>
                </RightSide>
            </AboutContent>
        </AboutContainer>
        <AllProjects>
            <ProjectsLlist>
                { projects.map((item)=> (
                /*<Project key={item.id} link={item.link} description={item.description} video={item.video}/>*/
                <Project key={item.id} img={item.img} link={item.link} description={item.description} />
                ))}
            </ProjectsLlist>
            <SeeMore>
                <Button>See more projects</Button>
            </SeeMore>
        </AllProjects>
    </SectionProjects>
    )
}

export default Projects
