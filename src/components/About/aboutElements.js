import styled from "styled-components";

export const ContainerAbout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;

`

export const Description = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    z-index: 2;

`


export const TitleSection = styled.h2`
    font-size: 65px;
    margin-bottom: 40px;
    font-family: "Poppins", sans-serif;

`


export const PSection = styled.p`
    font-size: 25px;
    text-align: justify;
    margin-bottom: 30px;
    font-family: "Poppins", sans-serif;
    
`

export const Skills = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    
`

export const ListSkill = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const Item = styled.img`
    width: 50px;
`