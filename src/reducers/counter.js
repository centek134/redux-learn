import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        showCounter: true
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        toggleCounter: state => {
            state.showCounter = !state.showCounter
        },
    },
});


export const counterActions = counterSlice.actions;

export const {increment, decrement , incrementByAmount, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;
