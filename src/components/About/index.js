import React from 'react'
import {AboutContainer,  AboutContent, LeftSide, RightSide, Psection, TitleSection, ContentSide,
    PhotoContainer, BgPhoto, Photo} from './aboutElements'
    import { Developer } from '../../assets/index'


const About = () => {

    return (
        <AboutContainer id="about">
            <AboutContent>
                <LeftSide>
                        <BgPhoto>
                            <PhotoContainer>
                            <Photo src={Developer} alt="web-dev-person" className="profile-picture" />
                            </PhotoContainer>
                        </BgPhoto>
                </LeftSide>
                <RightSide>
                    <TitleSection>Hi, I'm Alejandra</TitleSection>
                    <ContentSide>
                        <Psection>I am junior front-end developer with a background in digital marketing. I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences</Psection>
                        <Psection>I am junior front-end developer with a background in digital marketing. I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences</Psection>
                        <Psection>
                        <br />Motivation: 
                        <br />Professional goal: Become a full stack developer
                        <br />Enery drink: Coffee
                        <br />Best feeling: Find out solutions
                        </Psection>
                    </ContentSide>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
