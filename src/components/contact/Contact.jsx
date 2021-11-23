import React from 'react'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import phone from '../../images/phone.svg'
import email from '../../images/email.svg'
import linkedin from '../../images/linkedin.svg'
import './contact.scss'

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
        <div className="contact" id="contact">
            <div className="line" />
            <div className="wrapper">
                <div className="left">
                    <h1>Contact me</h1>
                    <div className="info">
                        <div className="item">
                            <img src={phone} alt="phone icon" className="icones" />
                            (xxx)xxx-xxxx
                        </div>
                        <div className="item">
                            <img src={email} alt="email icon" className="icones" />
                            ale.miranda890@gmail.com
                        </div>
                        <div className="item">
                            <img src={linkedin} alt="linkedin icon" className="icones" />
                            www.linkedin.com/in/alejandra-mirandareyes/
                        </div>
                    </div>
                </div>
                <div className="right">
                <div className="form-container">
                    <p className="description">
                    {/* <b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit. Nulla mollis felis at mi pharetra fermentum. Vivamus a felis non arcu fermentum commodo quis at nisi. Aliquam cursus scelerisque lorem at auctor. Suspendisse dictum quis sem a maximus. Curabitur sodales tincidunt eleifend. Sed vitae risus feugiat, feugiat lectus eu, bibendum urna. Suspendisse vel facilisis augue, eu volutpat dolor. */}
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        { done && "Thank you.."}
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
