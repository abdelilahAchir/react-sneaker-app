const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemIndex = state.items.findIndex(
                (item) => item.brand === action.payload.brand && item.model === action.payload.model
            );
            if (itemIndex === -1) {
                // Item is not yet in the cart
                const newItem = { ...action.payload, quantity: 1 };
                return {
                    ...state,
                    items: [...state.items, newItem],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + newItem.price,
                };
            } else {
                // Item is already in the cart, increase quantity
                const updatedItems = [...state.items];
                updatedItems[itemIndex].quantity += 1;
                return {
                    ...state,
                    items: updatedItems,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.payload.price,
                };
            }
        case "REMOVE_FROM_CART":
            const itemToRemoveIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const itemToRemove = state.items[itemToRemoveIndex];
            if (itemToRemove.quantity === 1) {
                // Remove the whole item from the cart
                return {
                    ...state,
                    items: state.items.filter((item) => item.id !== action.payload.id),
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - itemToRemove.price,
                };
            } else {
                // Decrease quantity of the item in the cart
                const updatedItems = [...state.items];
                updatedItems[itemToRemoveIndex].quantity -= 1;
                return {
                    ...state,
                    items: updatedItems,
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - itemToRemove.price,
                };
            }
        case "CLEAR_CART":
            return {
                ...state,
                items: [],
                totalItems: 0,
                totalPrice: 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
