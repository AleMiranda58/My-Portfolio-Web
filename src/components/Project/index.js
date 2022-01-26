import React, {useState, useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { LinksProjects } from '../links/link'
import {ProjectElement,
        ContainerImage,
        DescriptionProject,
        ImgProject} from './projectElements'


const Project = ({ img, link}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        })
    })

    return (
        <>
        <ProjectElement data-aos="slide-up">
                <ContainerImage>
                    <ImgProject src={img} alt="Project image"></ImgProject>
                </ContainerImage>
                <DescriptionProject>
                        <LinksProjects
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        light= 'true'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        offset={-80}>
                        CODE SOURCE
                        </LinksProjects>
                </DescriptionProject>
        </ProjectElement>
        </>
    )
}

export default Project
