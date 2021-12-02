import styled from "styled-components";
import {MdPhone, MdEmail} from 'react-icons/md'
import { SiLinkedin} from 'react-icons/si'


export const ContactSection = styled.div`
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ContentIntro = styled.div`
  max-width: 800px;
  text-align: center;
`

export const TitleSection = styled.h2`
  font-size: 36px;
  font-weight: 500;
  color: #fff;
`


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`

export const Icon = styled.div`
  min-width: 60px;
  height: 60px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  font-size: 22px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 20px;
  color: #fff;
  font-weight: 300;
  justify-content: center;
`


export const Item = styled.h3`
  font-size: 25px;
  font-weight: 500;
`

export const ValueItem = styled.p`
  color: #fff;
`


export const ContactForm = styled.div`
  width: 40%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.2);
`
export const Form = styled.form`
  
`

export const FormTitle = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 500;
`
  
export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`
export const InputForm = styled.input`
  width: 100%;
  padding: 5px 0;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  font-size: 16px;
  resize: none;
  background: rgba(225, 225, 225, 0.7);

  &:focus ~ span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
  }

  &[type="submit"] {
        width: 100px;
        background: #00bcd4;
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
      }
`
export const InputDescr = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  margin: 10px 0;
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  color: #666;
`
export const TextAreaForm = styled.textarea`
  width: 100%;
  padding: 5px 0;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  font-size: 16px;
  resize: none;
  background: rgba(225, 225, 225, 0.7);

  &:focus ~ span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
  }
`