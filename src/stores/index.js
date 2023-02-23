import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers/index'
export const store = configureStore({ reducer: ShopApp });
export default store;