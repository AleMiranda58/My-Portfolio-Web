import styled from "styled-components";
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#fff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '16px')};
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: ${({primary}) => (primary ? '#172438' : '#fff')};
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
        
    }
`