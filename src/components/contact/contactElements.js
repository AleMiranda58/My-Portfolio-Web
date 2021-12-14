import styled from "styled-components";


export const ContactSection = styled.div`
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 100px;
`
export const ContentIntro = styled.div`
  padding: 100px 0px;
  text-align: center;
  height: 20%;
  display: flex;
  align-items: center;
`

export const TitleSection = styled.h2`
  font-size: 80px;
  font-weight: 800;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

`


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${'' /* align-items: center; */}
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



export const IconBg = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  font-size: 22px;
`

export const IconImage = styled.img`
  width: 25px;
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

export const InfoLink = styled.a`
  text-decoration:none;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 300;
  justify-content: center;
    &:hover{
    color: blue;
    }
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
  height: 90%;
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
  background: #fff;

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
        width: 20%;
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
        border: 2px solid #fff;
        border-radius: 3px;
        ${'' /* position: absolute;
        top: -25px; */}

        &:hover {
          background: #fff;
          border: 1px solid #000;
          color: #000;
        }
      }
`
export const InputDescr = styled.span`
  position: absolute;
  left: 5px;
  padding: 5px 0;
  margin: 10px 0;
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  color: rgba(0,0,0, 0.5);
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
  background: #fff;

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