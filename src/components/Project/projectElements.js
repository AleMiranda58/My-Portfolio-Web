import styled from "styled-components";


export const ProjectElement = styled.div`
  width: 100%;
  height: 50vh;
  margin: 20px auto;
  border: 1px solid rgb(243, 243, 243);
  border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -ms-border-radius: 10px 10px 10px 10px;
  -o-border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  z-index: 2;
  display: flex;
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

// export const ImgProject = styled.img`
//   width: 100%;
//   z-index: -1;
//   transition: all 10s ease;
//   -webkit-transition: all 10s ease;
//   -moz-transition: all 10s ease;
//   -ms-transition: all 10s ease;
//   -o-transition: all 10s ease;
//   &:hover {
//     transform: translateY(-100%);
//     -webkit-transform: translateY(-100%);
//     -moz-transform: translateY(-100%);
//     -ms-transform: translateY(-100%);
//     -o-transform: translateY(-100%);
//   }
// `



export const DescriptionProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  z-index: 3;
  bottom: 0;
`

export const ProDescription = styled.div`
  width: 100%;
  height: 100px;;
  z-index: 4;
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
`

export const ContainerVideo = styled.div`
  height: 100%;
  ${'' /* &:hover + ${DescriptionProject} {
        display: block;
    } */}
 
`

// export const CodeSource = styled.a`
//   width: 40%;
//   height: 40px;
//   padding: 20px;
//   text-decoration: none;
//   border-radius: 15px;
//   background: ${({primary}) => (primary ? '#fff' : 'rgba(255,255,255, 0.5)')};
//   color: ${({dark}) => (dark ? '#010606' : '#fff')};
//   font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//       transition: all 0.2s ease-in-out;
//       background: ${({primary}) => (primary ? 'rgba(255,255,255, 0.5)' : '#fff')}; 
//       color: ${({dark}) => (dark ? '#fff' : '#010606')};
//       ${'' /* font-weight: ${({bold}) => (bold ? 'bold' : '')}; */}
//   }
// `


export const LinksVisit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
 
`
