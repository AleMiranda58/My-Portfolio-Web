import styled from "styled-components";

export const LinksProjects = styled.a`
    width: 35%;
    height: 35px;
    color: #fff ;
    text-decoration: none;
    border-radius: 10px;
    background: ${({primary}) => (primary ? 'transparent' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : 'transparent')}; 
        color: #010606;
    }
`