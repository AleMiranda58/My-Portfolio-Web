import React from 'react'
import Project from '../Project'
import { projects } from '../../data'
import {ProjectsSection, Intro, TitleSection, Psection, ProjectsLlist, SeeMore} from './projectsElements'
import { Button } from '../Button/buttonElements'

const Projects = () => {
    return (
        <ProjectsSection id="AllProjects">
        <Intro>
            <TitleSection></TitleSection>
            <Psection></Psection>
        </Intro>
        <ProjectsLlist>
            { projects.map((item)=> (
            /*<Project key={item.id} img={item.img} link={item.link} description={item.description} video={item.video}/>*/
            <Project key={item.id} link={item.link} description={item.description} video={item.video}/>
            ))}
        </ProjectsLlist>
        <SeeMore>
            <Button>See more projects</Button>
        </SeeMore>
    </ProjectsSection>
    )
}

export default Projects
