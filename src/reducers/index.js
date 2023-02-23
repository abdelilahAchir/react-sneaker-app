import { combineReducers } from 'redux';
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART, UpdateCart } from '../actions';

export const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: []
}

function todoProduct(state = initProduct, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: action.payload
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            const newCart = {
                id: action.payload.id,
                quantity: 1,
                brand: action.payload.brand,
                images: action.payload.images,
                price: action.payload.price,
                model: action.payload.model,
                sizes: action.payload.sizes,
                colors: action.payload.colors
            };
            const cartIndex = state.Carts.findIndex(cart => cart.id === action.payload.id);
            const updatedCarts = state.Carts.slice();
            console.log(updatedCarts)
            if (cartIndex !== -1) {
                updatedCarts[cartIndex].quantity++;
            } else {
                updatedCarts.push(newCart);
            }

            return {
                ...state,
                numberCart: state.numberCart + 1,
                Carts: updatedCarts
            };
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id !== state.Carts[action.payload].id
                })

            }
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct: todoProduct
});
export default ShopApp;