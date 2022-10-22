import { publicRoutes } from './routes';

export const footerContact = [
    {
        header: 'Trải Nghiệm VANS Store Ngay Tại Nhà',
        content: [
            {
                content: 'Hệ Thống VANS Online',
            },
            {
                content: 'Địa chỉ: Hồ Chí Minh',
            },
            {
                content: 'Hotline: 0866956907',
                href: publicRoutes.phone,
            },
        ],
    },
    {
        header: 'Về Chúng Tôi ',
        content: [
            {
                content: 'About Us',
                path: publicRoutes.aboutUs,
            },
            {
                content: 'Size Chart',
                path: publicRoutes.sizeChart,
            },
            {
                content: 'Hệ Thống Cửa Hàng',
                path: publicRoutes.heThongCuaHang,
            },
        ],
    },
    {
        header: 'Chính Sách',
        content: [
            {
                content: 'Chính sách thanh toán',
                path: publicRoutes.chinhSach,
            },
            {
                content: 'Chính sách đổi trả',
                path: publicRoutes.doiTraBaoHanh,
            },
            {
                content: 'Chính sách bảo hành',
                path: publicRoutes.doiTraBaoHanh,
            },
        ],
    },
];
