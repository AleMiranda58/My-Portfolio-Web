import React from 'react'
import {AboutContainer, TitleSection, Text, AboutContent, Subtitle, LeftSide, Bground, RightSide, Psection} from './aboutElements'


const About = () => {

    return (
        <AboutContainer id="about">
            <AboutContent>
                <LeftSide>
                        <Bground>
                        <Text>
                        <Subtitle></Subtitle>
                        <TitleSection>ABOUT ME</TitleSection>
                        </Text>
                        </Bground>
                </LeftSide>
                <RightSide>
                    <Psection>Hi, I am junior front-end developer with a background in digital marketing.
                    <br />I am a creative and problem-solving person who likes logical challenges,
                    <br />One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences</Psection>
                    <Psection>Professional brief:
                    <br />Motivation: 
                    <br />Professional goal: Become a full stack developer
                    <br />Enery drink: Coffee
                    <br />Best feeling: Find out solutions
                    </Psection>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
