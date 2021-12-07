import styled from "styled-components";

export const LinksProjects = styled.a`
    width: 40%;
    height: 40px;
    padding: 20px;
    text-decoration: none;
    border-radius: 15px;
    background: ${({primary}) => (primary ? '#fff' : 'rgba(255,255,255, 0.5)')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'rgba(255,255,255, 0.5)' : '#fff')}; 
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
    }
`