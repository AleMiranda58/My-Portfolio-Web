import React, {useState} from 'react'
import {AboutContainer,  
        AboutContent, 
        LeftSide, 
        RightSide, 
        Text, 
        Intro, 
        PhotoContainer, 
        BgPhoto, 
        Photo} from './aboutElements'
import {PhotoAlejandra as me} from '../../assets/index'

import { Button } from '../Button/buttonElements'


const About = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <AboutContainer id="about">
            <AboutContent>
                <LeftSide>
                        <BgPhoto>
                            <PhotoContainer>
                            <Photo src={me} alt="web-dev-person" className="profile-picture" />
                            </PhotoContainer>
                        </BgPhoto>
                </LeftSide>
                <RightSide>
                    <Intro>
                    <Text>Creative & Logical Thinker</Text>
                    <Text>My journey started when I was working in marketing, by doing the marketing plans to help businesses grow. But my technical curiosity and the need on optaining better solutions led me to explore the web development world, where I discovered a new passion which is the Front-End development.</Text>
                    </Intro>
                    <Button
                    to='projects-list'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    fontBig='true'
                    >See my projects</Button>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
