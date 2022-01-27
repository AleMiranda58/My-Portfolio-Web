import styled from "styled-components";


export const ContactSection = styled.div`
  overflow : hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 100px;

  @media only screen and (max-width: 600px) {
    height: auto;
    }

    @media only screen and (min-width: 600px) {
      height: auto;
    }

    @media only screen and (min-width: 768px) {
      height: auto;
    }

    @media only screen and (min-width: 889px) {
      height: auto;
    }

    @media only screen and (min-width: 1200px) {
      height: auto;
    }
`
export const ContentIntro = styled.div`
  padding: 100px 0px;
  text-align: center;
  height: 20%;
  display: flex;
  align-items: center;

  @media only screen and (orientation: landscape) {
    padding:  0px;
  }
`

export const TitleSection = styled.h2`
  color: #01BF71;
  padding: 50px 0px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    font-weight: 800;
    }

    @media only screen and (min-width: 600px) {
      font-size: 40px;
      font-weight: 800;
    }

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      font-weight: 800;
    }

    @media only screen and (min-width: 889px) {
      font-size: 60px;
      font-weight: 800;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 80px;
      font-weight: 800;
    }

    @media only screen and (orientation: landscape) {
      font-size: 50px;
      font-weight: 800;
    }
`


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    }

    @media only screen and (min-width: 600px) {
      flex-direction: column-reverse;

    }

    @media only screen and (min-width: 768px) {
      // flex-direction: column-reverse;

    }

    @media only screen and (min-width: 889px) {
      // flex-direction: column-reverse;

    }

    @media only screen and (min-width: 1200px) {
      flex-direction: row;

    }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
      width: 80%;
      margin: 40px auto;
    }

    @media only screen and (min-width: 600px) {
      width: 80%;
      margin: 40px auto;
    }

    @media only screen and (min-width: 768px) {
      width: 80%;
      margin: 40px auto;
    }

    @media only screen and (min-width: 889px) {
      width: 80%;
      margin: 40px auto;
    }

    @media only screen and (min-width: 1200px) {
      width: 40%;
    }
  
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
`

export const IconImage = styled.img`
  width: 50%;
  hight: 50%;
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
    color: #fff;
    }
`

export const Item = styled.h3`
  font-size: 25px;
  font-weight: 500;
`

export const ValueItem = styled.p`
  color: #fff;
  &:hover{
    cursor: context-menu;
  }
`


export const ContactForm = styled.div`
  height: 90%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 600px) {
      width: 80%;
      margin: 0 auto;
    }

    @media only screen and (min-width: 600px) {
      width: 80%;
      margin: 0 auto;
    }

    @media only screen and (min-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }

    @media only screen and (min-width: 889px) {
      width: 80%;
      margin: 0 auto;
    }

    @media only screen and (min-width: 1200px) {
      width: 40%;
    }
`

export const Form = styled.form`
`

export const FormTitle = styled.h2`
  color: white;
  font-size: 30px;
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
        width: 50%;
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
        border: 2px solid #fff;
        border-radius: 3px;

        &:hover {
          background: #fff;
          border: 1px solid #000;
          color: #000;
        }

              
          @media only screen and (max-width: 600px) {
            width: 50%;
          }
        
          @media only screen and (min-width: 600px) {
            width: 50%;
          }
        
          @media only screen and (min-width: 768px) {
            width: 30%;
          }
        
          @media only screen and (min-width: 889px) {
            // width: 100%;
          }
        
          @media only screen and (min-width: 1200px) {
            // width: 100%;
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
  ${'' /* border-bottom: 2px solid rgba(1, 191, 113, 0.8); */}
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