import styled from "styled-components";


export const ProjectElement = styled.div`
  width: 100%;
  height: 50vh;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -ms-border-radius: 10px 10px 10px 10px;
  -o-border-radius: 10px 10px 10px 10px;
  z-index: 2;
  display: flex;
  flex-direction: row;
    border: 3px solid rgb(1, 191, 113);


  &:hover {
  border: 3px solid rgb(243, 243, 243);
  
  }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 70vh;

    }

    @media only screen and (min-width: 600px) {
      flex-direction: column;
      height: 70vh;
    }

    @media only screen and (min-width: 768px) {
      flex-direction: column;
      height: 70vh;
    }

    @media only screen and (min-width: 889px) {
      flex-direction: column;
      height: 70vh;

    }

    @media only screen and (min-width: 1200px) {
      flex-direction: row;
      height: 50vh;

    }
`


export const Browsesr = styled.div`
   height: 20px;
    ${'' /* background-color: #424040; */}
    ${'' /* background-color: #172438; */}
    background-color: #01bf71;
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 2;
`

export const Circles = styled.div`
  width: 6px;
  height: 6px;
  margin: auto 5px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  ${'' /* background-color: #fff; */}
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



export const DescriptionProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  z-index: 3;
  bottom: 0;
  ${'' /* background: rgba(255,255,255, 0.8); */}
  background: #01BF71;
  padding: 40px;


    @media only screen and (max-width: 600px) {
      height: 40%;
      ${'' /* background: #000; */}
      padding: 15px 30px;

    }

    @media only screen and (min-width: 600px) {
      height: 40%;
      ${'' /* background: #000; */}
      padding: 15px 30px;
    }

    @media only screen and (min-width: 768px) {
      height: 40%;
      ${'' /* background: #000; */}
      padding: 15px 30px;
    }

    @media only screen and (min-width: 889px) {
      height: 100%;

    }

    @media only screen and (min-width: 1200px) {
      height: 100%;

            ${'' /* padding: 15px 30px; */}
    }
`

export const ProDescription = styled.p`
  width: 100%;
  height: 100%;
  z-index: 4;
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
  text-align: justify;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
      
    @media only screen and (max-width: 600px) {
      height: 100%;
      font-size: 14px;
      margin: 5px 0;
    }

    @media only screen and (min-width: 600px) {
      height: 100%;
      font-size: 16px;
      margin: 5px 0;
    }

    @media only screen and (min-width: 768px) {
      height: 100%;
      font-size: 18px;
      margin: 5px 0;
    }

    @media only screen and (min-width: 889px) {
      height: 100%;
      font-size: 20px;
      margin: 5px 0;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 20px;
      font-weight: 400;
      ${'' /* height: 100%;
      margin: 5px 0; */}
    }
`

export const ContainerVideo = styled.div`
  height: 100%;
  @media only screen and (max-width: 600px) { 
      height: 60%;

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
      ${'' /* height: 60%; */}

    }
`


export const LinksVisit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
