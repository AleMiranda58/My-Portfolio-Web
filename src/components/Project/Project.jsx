import React from 'react'
import './project.scss'

const Project = ({ img, link }) => {
    return (
        <div className="pro">
        <div className="browser">
            <div className="cirle"></div>
            <div className="cirle"></div>
            <div className="cirle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} className="proj-img" alt="All my projects"/>
        </a>
        </div>
    )
}

export default Project
