import styled from 'styled-components';

const Button = styled.button`
    padding: 15px 25px;
    font-size: 18px;
    color: #fff;
    background-color: #8200b6;
    outline: none;
    cursor: pointer;
    border: 2px solid #fff;
    font-weight: 800;
    transition: 0.5s;

    :hover{
        background-color: #fff;
        color: #8200b6;
        border: 2px solid #8200b6;
    }
`


export default Button;