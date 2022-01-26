import styled from "styled-components";
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 5px;
    width: 25%;
    height: 45px;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    border: 3px solid ${({primary}) => (primary ? '#01BF71' : '#fff')};
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-top: 50px;

    &:hover {
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: ${({primary}) => (primary ? '#01BF71' : '#ffff')};
        border: 2px solid ${({primary}) => (primary ? '#ffff' : '#01BF71')};
        color: ${({dark}) => (dark ? '#fff' : '#010606')};
    }

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        width: 30%;
        height: auto;
    }

    @media screen
    and (min-width: 360px)
    and (max-width: 768px)
    and (orientation: landscape) {
        font-size: 14px;
        width: 60%;
        height: auto;
    }
`