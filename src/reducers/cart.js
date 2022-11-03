import { SET_CART, SET_TOTAL, DELETE_PRODUCT, SET_QUALITY } from './constant';

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CART:
            return {
                ...state,
                cartList: [...state.cartList, payload],
            };
        case SET_TOTAL:
            return {
                ...state,
                total: payload,
            };

        case DELETE_PRODUCT: {
            return {
                ...state,
                cartList: payload,
            };
        }
        case SET_QUALITY: {
            return {
                ...state,
                cartList: payload,
            };
        }
        default:
            return { ...state };
    }
};

export default cartReducer;
