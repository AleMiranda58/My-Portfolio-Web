import React from 'react'
import { Button } from 'react-scroll'
import {ProjectElement, ProjectContainer, UpSide, Browsesr, Circles, ImgProject, DownSide, ProDescription, CodeSource} from './projectElements'

const Project = ({ img, link, description }) => {
    return (
        <>
        <ProjectElement>
            <ProjectContainer>
                <UpSide>
                    <Browsesr>
                        <Circles></Circles>
                        <Circles></Circles>
                        <Circles></Circles>
                    </Browsesr>
                    <ImgProject src={img} alt="Project image"></ImgProject>
                </UpSide>
                <DownSide>
                    <ProDescription>{description}</ProDescription>
                    {/* <CodeSource>
                         <Button primary="true" dark="true"> Code Source </Button>
                    </CodeSource> */}
                </DownSide>
            </ProjectContainer>
        </ProjectElement>
        </>
    )
}

export default Project
