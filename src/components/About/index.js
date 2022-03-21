import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import {AboutContainer,  
        AboutContent, 
        LeftSide, 
        RightSide, 
        Text, 
        TitleSection,
        TitleContainer,
        Intro} from './aboutElements'



const About = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,})
    })

    return (
        <AboutContainer id="about">
            <AboutContent>
                <LeftSide />
                <RightSide>
                    <TitleContainer>
                    <TitleSection>ABOUT ME</TitleSection>
                    </TitleContainer>
                    <Intro>
                    <Text>I DESCRIBE MYSELF AS A CREATIVE AND LOGICAL THINKER. BESIDES, I AM SOMEONE WHO IS TRULY PASSIONATE ABOUT WEB DEVELOPMENT.</Text>
                    <Text>MY PASSION FOR TECHNOLOGY LIES IN THE ENDLESS POSSIBILITIES IT OFFERS FOR CREATING AND DEVELOPING ANY PROJECT YOU MAY HAVE IN MIND.</Text>
                    </Intro>
                </RightSide>
            </AboutContent>
        </AboutContainer>
    )
}

export default About
