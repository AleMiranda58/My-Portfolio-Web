import React from 'react'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { ContactSection, ContentIntro, TitleSection, Container, IconImage, ContactInfo, Box, IconBg, Info, InfoLink, Item, ValueItem, ContactForm, Form, FormTitle, InputBox, InputForm, InputDescr, TextAreaForm} from './contactElements'
import { Email, Linkedin, Phone } from '../../assets/index'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_uf17zzs',
            'template_zekrnoi',
            formRef.current,
            'user_u8Ej2mUt7GpcZVOalHQDV'
            )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });


    }

    return (
        <>
        <ContactSection id="contact">
            <ContentIntro>
                <TitleSection>Let's get in touch !</TitleSection>
            </ContentIntro>
            <Container>
                <ContactInfo>
                    <Box>
                        <IconBg>
                            <IconImage src={Phone}/>
                        </IconBg>
                        <Info>
                            <Item>Phone</Item>
                            <ValueItem>514 267 6620</ValueItem>
                        </Info>
                    </Box>
                    <Box>
                        <IconBg>
                            <IconImage src={Linkedin}/>
                        </IconBg>
                        <InfoLink>
                            <Item>Linkedin</Item>
                            <ValueItem>/in/alejandra-mirandareyes/</ValueItem>
                        </InfoLink>
                    </Box>
                    <Box>
                        <IconBg>
                            <IconImage src={Email}/>
                        </IconBg>
                        <Info>
                            <Item>Email</Item>
                            <ValueItem>ale.miranda890@gmail.com</ValueItem>
                        </Info>
                    </Box>
                </ContactInfo>
                <ContactForm>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <FormTitle>Reach me out</FormTitle>
                        <InputBox>
                            <InputForm type="text"  name="user_name" />
                            <InputDescr>Name</InputDescr>
                        </InputBox>
                        <InputBox>
                            <InputForm type="text"  name="user_subject" />
                            <InputDescr>Subject</InputDescr>
                        </InputBox>
                        <InputBox>
                            <InputForm type="email"  name="user_email" />
                            <InputDescr>Email</InputDescr>
                        </InputBox>
                        <InputBox>  
                            <TextAreaForm rows="5"  name="message" />
                            <InputDescr>Message</InputDescr>
                        </InputBox>
                        <InputBox>
                            <InputForm type="submit"  name="" value="send" /> { done && "Thank you.."}
                        </InputBox>
                    </Form>
                </ContactForm>
            </Container>
        </ContactSection>
        </>
    )
}

export default Contact
