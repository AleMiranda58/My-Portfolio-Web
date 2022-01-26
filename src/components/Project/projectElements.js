import styled from "styled-components";


export const ProjectElement = styled.div`
  width: 100%;
  height: 100%;
  // height: 50vh;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -ms-border-radius: 10px 10px 10px 10px;
  -o-border-radius: 10px 10px 10px 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


    @media only screen and (max-width: 600px) {
      height: 30vh;

    }

    @media only screen and (min-width: 600px) {
      height: 40vh;
    }

    @media only screen and (min-width: 768px) {
      height: 40vh;
    }

    @media only screen and (min-width: 889px) {
      height: 60vh;
    }

    @media only screen and (min-width: 1200px) {
      height: 70vh;
    }

    @media only screen and (orientation: landscape) {
      height: 60vh;
    }
`


export const ContainerImage = styled.div`
  height: 100%;
  @media only screen and (max-width: 600px) { 
      height: 40%;

    }

    @media only screen and (min-width: 600px) {
      height: 60%;

    }

    @media only screen and (min-width: 768px) {
      height: 60%;
    }

    @media only screen and (min-width: 889px) {
      height: 60%;

    }

    @media only screen and (min-width: 1200px) {
    }
`


export const DescriptionProject = styled.div`
  width: 100%;
  z-index: 3;
  background: #000;
  display: flex;
  align-items: center;  
  justify-content: center;

    @media only screen and (min-width: 600px) {
      height: 15%;
      padding: 15px 30px;
    }
  
    @media only screen and (max-width: 600px) {
      height: 15%;
      padding: 15px 30px;
    }

    @media only screen and (min-width: 768px) {
      height: 15%;
    }

    @media only screen and (min-width: 889px) {
      height: 10%;
    }

    @media only screen and (min-width: 1200px) {
      height: 10%;
    }
  `



export const ImgProject = styled.img`
  width: 100%;
  z-index: -1;
  transition: all 10s ease;
  -webkit-transition: all 10s ease;
  -moz-transition: all 10s ease;
  -ms-transition: all 10s ease;
  -o-transition: all 10s ease;
  &:hover {
    transform: translateY(-70%);
    -webkit-transform: translateY(-70%);
    -moz-transform: translateY(-70%);
    -ms-transform: translateY(-70%);
    -o-transform: translateY(-70%);
  }
`

