import styled from "styled-components";

export const LinksProjects = styled.a`
    height: auto;
    text-decoration: none;
    color: ${({light}) => (light ? '#01BF71ff' : '#000')};
    border: 2px solid #01BF71ff;
    outline: none;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    font-size: 16px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({light}) => (light ? '#fff' : '#000')};
        border: 2px solid #fff;
        letter-spacing: 3px;
    }

   
    
    @media only screen and (min-width: 600px) {
        width: 100%;
    }
    
    @media only screen and (max-width: 600px) { 
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        width: 60%;
    }

    @media only screen and (min-width: 889px) {
        width: 40%;
    }

    @media only screen and (min-width: 1200px) {
        width: 55%;
    }
`
