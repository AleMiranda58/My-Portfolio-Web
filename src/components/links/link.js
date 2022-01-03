import styled from "styled-components";

export const LinksProjects = styled.a`
    ${'' /* width: 35%; */}
    ${'' /* height: 35px; */}
    width: 45%;
    height: auto;
    text-decoration: none;
    border-radius: 20px;
    background: ${({primary}) => (primary ? 'transparent' : '#01BF71')};
    color: ${({light}) => (light ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '16px')};
    outline: none;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    padding: 5px 10px;
    margin-bottom: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#172438' : 'transparent')}; 
        color: ${({light}) => (light ? '#fff' : '#000')};
    }

    @media screen and (max-width: 768px) {
        ${'' /* width: 25%; */}
        ${'' /* height: 25px; */}
        ${'' /* font-size: 12px */}
        border-radius: 3px;
        margin: 20px auto;
    }
`