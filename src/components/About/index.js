import React from 'react'
import {AboutContainer,  
        AboutContent, 
        LeftSide, 
        RightSide, 
        Text, 
        Intro, 
        Slider,
        Item,
        PhotoContainer, 
        BgPhoto, 
        Photo} from './aboutElements'
import {ProfilePicture as me} from '../../assets/index'


const About = () => {

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
                    <Text>My name is</Text>
                    <Text>Alejandra Miranda.</Text>
                    <Text>I'm a motivated <br/> Junior Front-end</Text>
                    <Text>with a background in marketing.</Text>
                    </Intro>
                    <Slider>
                        <Text>I'm someone who...</Text>
                        <Item>Loves finding solutions</Item>
                    </Slider>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
