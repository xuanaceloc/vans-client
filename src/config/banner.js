import images from '../assets';
import { publicRoutes } from './routes';

export const banner = {
    classic: {
        title: 'CLASSIC',
        desc: `Bộ sưu tập cổ điển Những phiên bản bất tử từ năm 1966`,
        path: publicRoutes.vansClassic,
        img: images.bannerClassic,
    },
    newArrival: {
        title: 'NEW ARRIVALS',
        desc: 'Bộ sưu tập sản phẩm mới nhất',
        path: publicRoutes.newArrival,
        img: images.bannerNewArrival,
    },
    bestSeller: {
        title: 'BEST SELLER',
        desc: `Các sản phẩm bán chạy nhất
        Được Fans hâm mộ yêu thích nhất
        Chỉ có tại hệ thống Vans Việt Nam`,
        path: publicRoutes.bestSeller,
        img: images.bannerBestSeller,
    },
};
