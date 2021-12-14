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

  &:hover {
    border: 1px solid rgb(243, 243, 243);
  
  }
`


export const Browsesr = styled.div`
   height: 20px;
    background-color: #000;
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
  background-color: #808080;
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
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
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
  background: rgba(0,0,0, 0.3);
  padding: 40px;
`

export const ProDescription = styled.p`
  width: 100%;
  height: 100px;
  z-index: 4;
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
  text-align: justify;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
`

export const ContainerVideo = styled.div`
  height: 100%;
`


export const LinksVisit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
 
`
