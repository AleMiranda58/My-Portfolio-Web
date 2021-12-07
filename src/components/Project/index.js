import React from 'react'
import { Button } from 'react-scroll'
import {ProjectElement, ContainerVideo, Browsesr, Circles, ImgProject, DescriptionProject, ProDescription, CodeSource} from './projectElements'

const Project = ({ img, link, description }) => {
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
                </ContainerVideo>
                <DescriptionProject>
                    <ProDescription>{description}</ProDescription>
                    <CodeSource>
                         <Button primary="true" dark="true" /> 
                    </CodeSource>
                </DescriptionProject>
        </ProjectElement>
        </>
    )
}

export default Project
