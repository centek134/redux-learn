import { React } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, toggleCounter} from '../../reducers/counter.js';



const CounterSection = styled.section`
    height: 400px;
    width: 800px;
    background-color: #fff;
    border-radius: 15px;

    @media only screen and (max-width:850px){
        width: 600px;
    }
    @media only screen and (max-width:650px){
        width: 400px;
        height: 250px;
    }
    @media only screen and (max-width:450px){
        width: 300px;
        height: 250px;
    }
`;

const FlexWrap = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width:650px){
        height: 100px;
    }
    @media only screen and (max-width:450px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
    }
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px 0;
    font-size: 64px;
    @media only screen and (max-width:850px){
        font-size: 48px;
    }
    @media only screen and (max-width:650px){
        font-size: 32px;
    }
`
const CounterValue = styled.h2`
    color: #8200b6;
    text-align: center;
    margin: 20px 0;
    font-size: 48px;

    @media only screen and (max-width:650px){
        font-size: 28px;
    }
`
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
    @media only screen and (max-width:850px){
        font-size: 14px;
        padding: 15px 20px;
    }
    @media only screen and (max-width:650px){
        font-size: 14px;
        padding: 10px 15px;
    }
    @media only screen and (max-width:450px){
        padding: 10px 5px;
    }
    
`

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector( state => state.counter.value);
    const show = useSelector( state => state.counter.showCounter);

    return(
        <CounterSection>
            <Title>Redux Counter:</Title>
            {show ? 
            <CounterValue>{count}</CounterValue> : null
            }
            <FlexWrap>
                <Button onClick = {() => dispatch(increment())}>Increment by 1</Button>
                <Button onClick = {() => dispatch(decrement())}>Decrement by 1</Button>
                <Button onClick = {() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
                <Button onClick = {() => dispatch(toggleCounter())}>Toggle Counter</Button>
            </FlexWrap>
        </CounterSection>
    );
};

export default Counter;