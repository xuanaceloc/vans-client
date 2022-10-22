import { publicRoutes } from './routes';

export const nav = [
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
];
