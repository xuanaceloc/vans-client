import config from '../config';
import HomePage from '../page/homePage';
import ShowProductPage from '../page/showProductPage';
import ProductDetail from '../page/productDetail';
import Auth from '../page/auth';
import SizeChartPage from '../page/sizeChartPage';
import AboutUs from '../page/aboutUs';
import LatestVansNewsPage from '../page/latestVansNewsPage';
import VansNewsDetail from '../page/vansNewsDetail';
import CartPage from '../page/cartPage';
import InfoPage from '../page/infoPage';

export const routes = [
    {
        path: config.publicRoutes.home,
        component: HomePage,
    },
    {
        path: config.publicRoutes.allVans,
        component: ShowProductPage,
        collection: config.collectionConstant.allVans,
        hero: config.heroData.allVans,
    },
    {
        hero: config.heroData.vansClassic,
        path: config.publicRoutes.vansClassic,
        component: ShowProductPage,
        collection: config.collectionConstant.vansClassic,
    },
    {
        hero: config.heroData.vansVault,
        path: config.publicRoutes.vansVault,
        component: ShowProductPage,
        collection: config.collectionConstant.vansVault,
    },
    {
        path: config.publicRoutes.vansOldSkool,
        hero: config.heroData.vansOldSkool,
        component: ShowProductPage,
        collection: config.collectionConstant.vansOldSkool,
    },
    {
        path: config.publicRoutes.vansSlipOn,
        hero: config.heroData.vansSlipOn,
        component: ShowProductPage,
        collection: config.collectionConstant.vansSlipOn,
    },
    {
        hero: config.heroData.vansAuthentic,
        path: config.publicRoutes.vansAuthentic,
        component: ShowProductPage,
        collection: config.collectionConstant.vansAuthentic,
    },
    {
        hero: config.heroData.vansSK8,
        path: config.publicRoutes.vansSk8,
        component: ShowProductPage,
        collection: config.collectionConstant.vansSk8,
    },
    {
        path: config.publicRoutes.vansEra,
        hero: config.heroData.vansEra,
        component: ShowProductPage,
        collection: config.collectionConstant.vansEra,
    },
    {
        path: config.publicRoutes.backpack,
        hero: config.heroData.backpack,
        component: ShowProductPage,
        collection: config.collectionConstant.backpack,
    },
    {
        path: config.publicRoutes.vansWallet,
        hero: config.heroData.wallet,
        component: ShowProductPage,
        collection: config.collectionConstant.vansWallet,
    },
    {
        path: config.publicRoutes.vansCheckerBoard,
        hero: config.heroData.checkerboard,
        component: ShowProductPage,
        collection: config.collectionConstant.vansCheckerBoard,
    },
    {
        path: config.publicRoutes.login,
        component: Auth,
        login: true,
    },
    {
        path: config.publicRoutes.register,
        component: Auth,
        login: false,
    },
    {
        path: config.publicRoutes.sizeChart,
        component: SizeChartPage,
    },
    {
        path: config.publicRoutes.newArrival,
        hero: config.heroData.newArrival,
        component: ShowProductPage,
        collection: config.collectionConstant.newArrival,
    },
    {
        path: config.publicRoutes.saleOff,
        hero: config.heroData.saleOff,
        component: ShowProductPage,
        collection: config.collectionConstant.saleOff,
    },
    {
        path: config.publicRoutes.accessories,
        component: ShowProductPage,
        hero: config.heroData.accessories,
        collection: config.collectionConstant.Accessories,
    },
    {
        path: config.publicRoutes.showProduct,
        component: ProductDetail,
    },
    {
        path: config.publicRoutes.aboutUs,
        component: AboutUs,
    },
    {
        path: config.publicRoutes.latestVansNews,
        component: LatestVansNewsPage,
    },
    {
        path: config.publicRoutes.latestVansNewsDetail,
        component: VansNewsDetail,
    },
    {
        path: config.publicRoutes.cartPage,
        component: CartPage,
        hero: config.heroData.cart,
    },
    {
        path: config.publicRoutes.chinhSach,
        component: InfoPage,
        data: config.chinhSach,
        hero: config.heroData.chinhsach,
    },
    {
        path: config.publicRoutes.doiTraBaoHanh,
        component: InfoPage,
        data: config.baoHanhDoiTra,
        hero: config.heroData.baoHanhDoitra,
    },
    {
        path: config.publicRoutes.heThongCuaHang,
        component: InfoPage,
        data: config.heThongCuaHang,
        hero: config.heroData.heThongCuaHang,
    },
];
