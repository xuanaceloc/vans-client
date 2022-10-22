import config from '../config';
import HomePage from '../page/homePage';
import ShowProductPage from '../page/showProductPage';
import ProductDetail from '../page/productDetail';

export const routes = [
    {
        path: config.publicRoutes.home,
        component: HomePage,
    },
    {
        path: config.publicRoutes.allVans,
        component: ShowProductPage,
    },
    {
        path: '/product',
        component: ProductDetail,
    },
];
