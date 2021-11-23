import React from 'react'
import {Button} from '../Button/buttonElements'
import './project.scss'

const Project = ({ img, link, description }) => {
    return (
        <div className="pro">
            <div className="container">
                <div className="uno">
                    <div className="browser">
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                        <div className="cirle"></div>
                    </div>
                    <img src={img} className="proj-img" alt="All my projects"/>
                </div>
                <div className="dos">
                    <div className="description">{description}</div>
                    <a href={link} target="_blank" rel="noreferrer">
                        <Button
                        primary="true"
                        dark="true">
                        See code source
                        </Button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Project
