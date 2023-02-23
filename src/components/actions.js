


export const addToCart = (sneaker) => {
    console.log(sneaker)
    return {
        type: "ADD_TO_CART",
        payload: {
            brand: sneaker.brand,
            model: sneaker.model,
            price: sneaker.price
        }
    };
};

export const removeFromCart = (sneaker) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: sneaker,
    };
};