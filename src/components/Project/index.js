import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import { LinksProjects } from '../links/link'
import {ProjectElement, ContainerVideo, Browsesr, Circles, DescriptionProject, ProDescription, LinksVisit} from './projectElements'


// const Project = ({ img, link, description, video }) => {
const Project = ({ link, description, video }) => {
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
                    {/* <ImgProject src={img} alt="Project image"></ImgProject> */}
                    <ReactPlayer url={video} />
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
                        dark= "true"
                        fontBig= "true"
                        bold= "true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        CODE SOURCE
                        </LinksProjects>
                        <LinksProjects
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        primary= "true"
                        dark= "false"
                        fontBig= "true"
                        bold= "true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        WEB SITE
                        </LinksProjects>
                        {/* <CodeSource
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        primary= "true"
                        dark= "true"
                        fontBig= "true"
                        bold= "true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        CODE SOURCE
                        </CodeSource> */}
                        {/* <CodeSource
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        primary= "true"
                        dark= "false"
                        fontBig= "true"
                        bold= "true"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        tEST
                        </CodeSource> */}
                    </LinksVisit>
                   
                </DescriptionProject>
        </ProjectElement>
        </>
    )
}

export default Project
