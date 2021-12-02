import styled from "styled-components";


export const ProjectElement = styled.div`
  width: 48%;
  height: 50vh;
  margin: 20px 5px;
  border: 1px solid rgb(243, 243, 243);
  border-radius: 10px 10px 0px 0px;
  -webkit-border-radius: 10px 10px 0px 0px;
  -moz-border-radius: 10px 10px 0px 0px;
  -ms-border-radius: 10px 10px 0px 0px;
  -o-border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  position: relative;
  z-index: 2;
`

export const ProjectContainer = styled.div`
  width: 100%;
`

export const UpSide = styled.div`
  height: 70%
`

export const Browsesr = styled.div`
   height: 20px;
    background-color: #ff26f8;
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
  background-color: white;
`

export const ImgProject = styled.img`
  width: 100%;
  z-index: -1;
  transition: all 10s ease;
  -webkit-transition: all 10s ease;
  -moz-transition: all 10s ease;
  -ms-transition: all 10s ease;
  -o-transition: all 10s ease;
  ${'' /* &:hover {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
  } */}
`

export const DownSide = styled.div`
  width: 100%;
    background-color: rgba(black, 0.8);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    z-index: 4;
`

export const ProDescription = styled.div`
  position: sticky;
  z-index: 4;
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
`

export const CodeSource = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
`