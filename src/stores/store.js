import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// Define the initial state of your application
const initialState = {
    cart: []
};

// Define a reducer function that will update the state based on actions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.sneaker]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item, index) => index !== action.index)
            };
        default:
            return state;
    }
};

// Create the store with the reducer function and initial state
const store = configureStore(reducer);

export default store;