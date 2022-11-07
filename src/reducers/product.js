import {
    SET_PRODUCT,
    SET_LIST_PRODUCT,
    SET_PRODUCT_ID,
    SET_BEST_SELLER,
    SET_DATA_HOME,
} from './constant';

export const initialProductList = {
    isLoading: true,
    data: [],
    currentProduct: [],
    currentProductId: '',
    bestSeller: [],
    dataHome: {
        classic: [],
        newArrival: [],
        bestSeller: [],
    },
};

export const productListReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_LIST_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        }
        case SET_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                currentProduct: payload,
            };
        }
        case SET_PRODUCT_ID: {
            return {
                ...state,
                currentProductId: payload,
            };
        }
        case SET_BEST_SELLER: {
            return {
                ...state,
                bestSeller: payload,
            };
        }
        case SET_DATA_HOME: {
            return {
                ...state,
                dataHome: {
                    classic: payload.classic,
                    newArrival: payload.newArrival,
                    bestSeller: payload.bestSeller,
                },
            };
        }
        default:
            return state;
    }
};
