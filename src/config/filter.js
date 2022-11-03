import { publicRoutes } from './routes';

export const sidebarFilter = {
    menu: [
        {
            path: publicRoutes.allVans,
            content: 'all vans',
        },
        {
            path: publicRoutes.allVans,
            content: 'shoes',
            children: [
                {
                    path: publicRoutes.vansClassic,
                    content: 'vans classic',
                },
                {
                    path: publicRoutes.vansVault,
                    content: 'vans vault',
                },
                {
                    path: publicRoutes.vansOldSkool,
                    content: 'vans old skool',
                },
                {
                    path: publicRoutes.vansSlipOn,
                    content: 'vans slip-on',
                },
                {
                    path: publicRoutes.vansAuthentic,
                    content: 'vans authentic',
                },
                {
                    path: publicRoutes.vansSk8,
                    content: 'vans sk8',
                },
                {
                    path: publicRoutes.vansEra,
                    content: 'vans Era',
                },
            ],
        },
        {
            path: publicRoutes.newArrival,
            content: 'new arrivals',
        },
        {
            path: publicRoutes.accessories,
            content: 'accessories',
            children: [
                {
                    path: publicRoutes.backpack,
                    content: 'backpack',
                },
                {
                    path: publicRoutes.vansWallet,
                    content: 'vans wallet',
                },
            ],
        },
        {
            path: publicRoutes.allVans,
            content: 'collection',
            children: [
                {
                    path: publicRoutes.vansClassic,
                    content: 'classic',
                },
                {
                    path: publicRoutes.vansCheckerBoard,
                    content: 'checkerboard',
                },
                {
                    path: publicRoutes.vansVault,
                    content: 'vans vault',
                },
            ],
        },
        {
            path: publicRoutes.saleOff,
            content: 'sale off',
        },
        {
            path: publicRoutes.sizeChart,
            content: 'size chart',
        },
        {
            path: publicRoutes.aboutUs,
            content: 'about us',
        },
        {
            path: publicRoutes.latestVansNews,
            content: 'latest vans news',
        },
    ],
    color: {
        title: 'Màu sắc',
        content: [
            { value: 'black', content: '' },
            { value: 'white', content: '' },
            { value: 'red', content: '' },
            { value: 'blue', content: '' },
            { value: 'green', content: '' },
            { value: 'yellow', content: '' },
            { value: 'brown', content: '' },
            { value: 'violet', content: '' },
            { value: 'grey', content: '' },
            { value: 'multicolour', content: '' },
        ],
    },
    sale: {
        title: 'SALE OFF',
        content: [
            {
                value: '10',
                content: 'sale 10%',
            },
            {
                value: '30',
                content: 'sale 30%',
            },
            {
                value: '50',
                content: 'sale 50%',
            },
        ],
    },
    brand: {
        title: 'Thương hiệu',
        content: [
            {
                value: 'Vans',
                content: 'Vans',
            },
        ],
    },
    sort: {
        title: 'Sắp xếp theo',
        content: [
            {
                value: 'default',
                content: 'Mặc định',
            },
            {
                value: 'a asc',
                content: 'A -> Z',
            },
            {
                value: 'a desc',
                content: 'Z -> A',
            },
            {
                value: 'price-asc',
                content: 'Giá tăng dần',
            },
            {
                value: 'price-desc',
                content: 'Giá giảm dần',
            },
            {
                value: 'new product',
                content: ' Hàng mới nhất',
            },
            {
                value: 'old product',
                content: 'Hàng cũ nhất',
            },
        ],
    },
};
