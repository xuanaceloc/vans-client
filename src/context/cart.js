import axios from 'axios';
import { useReducer, createContext } from 'react';
import cartReducer from '../reducers/cart';
import {
    DELETE_PRODUCT,
    SET_CART,
    SET_TOTAL,
    SET_QUALITY,
} from '../reducers/constant';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, {
        cartList: [],
        total: 0,
    });

    // get product by Id and add to cart list
    const addProductCart = async ({ productId, sizeSelect, selectQuality }) => {
        // check product in cart
        const isContain = cart.cartList.some((item) => {
            let result = false;
            if (productId === item.product.productId) {
                if (item.size === sizeSelect) {
                    result = true;
                }
            }
            return result;
        });

        if (isContain) {
            return;
        } else {
            try {
                await axios
                    .get('http://localhost:5000/api/product/id', {
                        params: { productId: productId },
                    })
                    .then((res) => {
                        dispatch({
                            type: SET_CART,
                            payload: {
                                product: res.data.product[0],
                                size: sizeSelect,
                                quality: selectQuality,
                            },
                        });
                        return res.data.product[0];
                    })
                    .then(() => {
                        setTotal();
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };

    // set total
    const setTotal = () => {
        const total = cart.cartList.reduce((total, product) => {
            const price = product.quality * product.product.price.newPrice;
            return total + price;
        }, 0);
        dispatch({ type: SET_TOTAL, payload: total });
        return total;
    };

    //set quality product select
    const setProductQuality = (productId, size, newSizeQuality) => {
        const product = cart.cartList.find((item) => {
            return item.product.productId === productId && item.size === size;
        });

        product.quality = newSizeQuality;
        const result = cart.cartList;
        const productIndex = result.indexOf(product);
        result.splice(productIndex, 1, product);
        dispatch({ type: SET_QUALITY, payload: result });
    };

    //remove product
    const removeProduct = (productId, size) => {
        const product = cart.cartList.find((item) => {
            return item.product.productId === productId && item.size === size;
        });
        const productIndex = cart.cartList.indexOf(product);

        let result = cart.cartList;
        result.splice(productIndex, 1);
        dispatch({ type: DELETE_PRODUCT, payload: result });
        setTotal();
    };

    const cartValue = {
        cart,
        addProductCart,
        setProductQuality,
        removeProduct,
        setTotal,
    };

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
