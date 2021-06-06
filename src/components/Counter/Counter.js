import {React} from 'react'
import styled from 'styled-components';
import Button from '../Button/Button.js';

const CounterSection = styled.section`
    height: 400px;
    width: 800px;
    background-color: #fff;
    border-radius: 15px;
`;

const FlexWrap = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px 0;
    font-size: 64px;
`
const CounterValue = styled.h2`
    color: #8200b6;
    text-align: center;
    margin: 20px 0;
    font-size: 48px;
`

const Counter = () => {

    return(
        <CounterSection>
            <Title>Redux Counter:</Title>
            <CounterValue>2</CounterValue>
            <FlexWrap>
                <Button>Increment by 1</Button>
                <Button>Decrement by 1</Button>
                <Button>Increment by 10</Button>
                <Button>Toggle Counter</Button>
            </FlexWrap>
        </CounterSection>
    );
};

export default Counter;