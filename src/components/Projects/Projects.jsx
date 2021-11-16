import React from 'react'
import Project from '../Project/Project'
import './projects.scss'
import { projects } from '../../data'

const Projects = () => {
    return (
        <div className="project-section">
            <div className="intro-section">
                <h1>My projects</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis felis at mi pharetra fermentum. Vivamus a felis non arcu fermentum commodo quis at nisi. Aliquam cursus scelerisque lorem at auctor. Suspendisse dictum quis sem a maximus. Curabitur sodales tincidunt eleifend. Sed vitae risus feugiat, feugiat lectus eu, bibendum urna. Suspendisse vel facilisis augue, eu volutpat dolor.</p>
            </div>
            <div className="project-list">
                { projects.map((item)=> (
                <Project key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default Projects
