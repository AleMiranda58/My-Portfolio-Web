import React from 'react'
import {AboutContainer,  AboutContent, LeftSide, RightSide, Psection, TitleSection, ContentBotton, ContentTop, Bref, BrefItem, IconItem, PhotoContainer, BgPhoto, Photo} from './aboutElements'
import { Developer, Heart, Star, Energy, Smile } from '../../assets/index'


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
                    <ContentTop>
                        <TitleSection>Hi, I'm Alejandra</TitleSection>
                        <Psection>Junior Front-End developer with a background in digital marketing.</Psection>
                    </ContentTop>
                    <ContentBotton>
                        <Psection>I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences, I am junior front-end developer with a background in digital marketing. I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences</Psection>
                        <Psection>I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences, I am junior front-end developer with a background in digital marketing. I am a creative and problem-solving person who likes logical challenges, One of my passions is to build  dynamics and reactives web sites in order to provide great user experiences</Psection>
                        <Bref>
                            <BrefItem>
                                <IconItem src={Heart} />
                                <Psection><b>Motivation :</b> </Psection>
                            </BrefItem>
                            <BrefItem>
                                <IconItem src={Star} />
                                <Psection><b>Professional goal :</b> Become a full stack developer</Psection>
                            </BrefItem>
                            <BrefItem>
                                <IconItem src={Energy} />
                                <Psection><b>Enery drink :</b> Coffee</Psection>
                            </BrefItem>
                            <BrefItem>
                                <IconItem src={Smile} />
                                <Psection><b>Best feeling :</b> Find out solutions</Psection>
                            </BrefItem>
                        </Bref>
                    </ContentBotton>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
