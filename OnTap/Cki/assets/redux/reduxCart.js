const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case 'EDIT_CART_ITEM':
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                ),
            };
        default:
            return state;
    }
};

// Action to add an item to the cart
export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
});

// Action to remove an item from the cart
export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
});

// Action to edit a cart item (update its properties)
export const editCartItem = (item) => ({
    type: 'EDIT_CART_ITEM',
    payload: item,
});

export default cartReducer;
