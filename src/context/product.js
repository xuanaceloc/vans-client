import { createContext, useReducer } from 'react';
import {
    SET_PRODUCT,
    SET_LIST_PRODUCT,
    SET_PRODUCT_ID,
    SET_BEST_SELLER,
    SET_DATA_HOME,
} from '../reducers/constant';
import axios from 'axios';

import { productListReducer } from '../reducers/product';
import { apiUrl } from './constant';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productList, dispatch] = useReducer(productListReducer, {
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
    });

    // set current product is
    const setCurrentProductId = (id) => {
        localStorage.setItem('ACTIVE_PRODUCT', id);
        dispatch({ type: SET_PRODUCT_ID, payload: id });
    };

    // get all Product
    const getAllProduct = async () => {
        try {
            await axios.get(`${apiUrl}/product/all-vans`).then((res) => {
                dispatch({
                    type: SET_LIST_PRODUCT,
                    payload: res.data.product,
                });
                return res.product;
            });
        } catch (error) {
            console.log(error);
        }
    };

    // get Collection Product
    const getCollectionProduct = async (collection, limit) => {
        try {
            await axios
                .get(`${apiUrl}/product/collection`, {
                    params: { collection: collection, limit: limit },
                })
                .then((res) => {
                    dispatch({
                        type: SET_LIST_PRODUCT,
                        payload: res.data.product,
                    });
                    return res.product;
                });
        } catch (error) {
            console.log(error);
        }
    };

    // get accessories
    const getAccessoriesProduct = async () => {
        let dataList = [];
        try {
            await axios
                .get(`${apiUrl}/product/collection`, {
                    params: { collection: 'Vans Wallet' },
                })
                .then((res) => {
                    dataList = [...dataList, ...res.data.product];
                });
            await axios
                .get(`${apiUrl}/product/collection`, {
                    params: { collection: 'Backpack' },
                })
                .then((res) => {
                    dataList = [...dataList, ...res.data.product];
                });

            dispatch({ type: SET_LIST_PRODUCT, payload: dataList });
        } catch (error) {
            console.log(error);
        }
    };

    // get NewArrival Product
    const getNewArrivalProduct = async () => {
        try {
            await axios.get(`${apiUrl}/product/new-arrival`).then((res) => {
                dispatch({
                    type: SET_LIST_PRODUCT,
                    payload: res.data.product,
                });
                return res.product;
            });
        } catch (error) {
            console.log(error);
        }
    };

    // get Sale Off Product
    const getSaleOffProduct = async (sale) => {
        try {
            await axios
                .get(`${apiUrl}/product/sale-off`, {
                    params: { sale: sale },
                })
                .then((res) => {
                    dispatch({
                        type: SET_LIST_PRODUCT,
                        payload: res.data.product,
                    });
                    return res.product;
                });
        } catch (error) {
            console.log(error);
        }
    };

    // get product by Id
    const getProductById = async (productId) => {
        if (!productId) {
            productId = localStorage.getItem('ACTIVE_PRODUCT');
        }
        try {
            await axios
                .get(`${apiUrl}/product/id`, {
                    params: { productId: productId },
                })
                .then((res) => {
                    dispatch({
                        type: SET_PRODUCT,
                        payload: res.data.product[0],
                    });
                    return res.data.product[0];
                });
        } catch (error) {
            console.log(error);
        }
    };

    // get best seller

    const getBestSeller = async () => {
        try {
            await axios.get(`${apiUrl}/product/best-seller`).then((res) => {
                dispatch({
                    type: SET_BEST_SELLER,
                    payload: res.data.product,
                });
                return res.data.product;
            });
        } catch (error) {
            console.log(error);
        }
    };

    //get Data For Home Page
    const getDataHome = async () => {
        try {
            const classic = await axios.get(`${apiUrl}/product/collection`, {
                params: {
                    collection: 'Vans Classic',
                },
            });

            const newArrival = await axios.get(`${apiUrl}/product/new-arrival`);

            const bestSeller = await axios.get(`${apiUrl}/product/best-seller`);

            dispatch({
                type: SET_DATA_HOME,
                payload: {
                    classic: classic.data.product,
                    newArrival: newArrival.data.product,
                    bestSeller: bestSeller.data.product,
                },
            });
        } catch (error) {}
    };

    const data = {
        getCollectionProduct,
        getNewArrivalProduct,
        getSaleOffProduct,
        getProductById,
        setCurrentProductId,
        getBestSeller,
        getAllProduct,
        getDataHome,
        getAccessoriesProduct,
        productList,
    };
    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
