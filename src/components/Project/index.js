import React, {useState} from 'react'
// import ReactPlayer from 'react-player'
import { LinksProjects } from '../links/link'
import {ProjectElement, ContainerVideo, Browsesr, Circles, DescriptionProject, ProDescription, LinksVisit, ImgProject} from './projectElements'


const Project = ({ img, link, description }) => {
// const Project = ({ link, description, video }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
        <ProjectElement>
                <ContainerVideo>
                    <Browsesr>
                        <Circles></Circles>
                        <Circles></Circles>
                        <Circles></Circles>
                    </Browsesr>
                    <ImgProject src={img} alt="Project image"></ImgProject>
                    {/* <ReactPlayer url={video} /> */}
                </ContainerVideo>
                <DescriptionProject>
                    <ProDescription>{description}</ProDescription>
                    <LinksVisit>
                        <LinksProjects
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        primary= "true"
                        fontBig= "true"
                        light= 'true'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        CODE SOURCE
                        </LinksProjects>
                    </LinksVisit>
                   
                </DescriptionProject>
        </ProjectElement>
        </>
    )
}

export default Project
