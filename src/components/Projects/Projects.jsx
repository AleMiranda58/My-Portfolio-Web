import React from 'react'
import Project from '../Project/Project'
import './projects.scss'
import { projects } from '../../data'
import { Button } from '../Button/buttonElements'

const Projects = () => {
    return (
        <div className="project-section" id="projects">
            <div className="intro-section">
                <h1>My projects</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipiscing elit.haretra fermentum. Vivamus a felis non arcu fermentum commodo quis at nisi. Aliquam cursus scelerisque lorem at auctor. Suspendisse dictum quis sem a maximus. Curabitur sodales tincidunt eleifend. Sed vitae risus feugiat, feugiat lectus eu, bibendum urna. Suspendisse vel facilisis augue, eu volutpat.</p>
                {/* <Button>See codes source</Button> */}
            </div>
            <div className="project-list">
                { projects.map((item)=> (
                <Project key={item.id} img={item.img} link={item.link} description={item.description}/>
                ))}
            </div>
            <div className="btn">
            <Button>See more Projects</Button>
            </div>
        </div>
    )
}

export default Projects
