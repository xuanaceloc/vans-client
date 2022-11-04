import { useEffect, useContext } from 'react';

import { ProductContext } from '../../context/product';
import Slider from '../../components/slider';
import ProductList from '../../components/productList';
import LatestNews from '../../components/latestNews';
import config from '../../config';

const HomePage = () => {
    const { getDataHome, productList } = useContext(ProductContext);

    useEffect(() => {
        getDataHome();
    }, []);

    return (
        <div>
            <Slider />
            <div>
                <ProductList
                    list={productList.dataHome.classic}
                    banner={config.banner.classic}
                />
                <ProductList
                    list={productList.dataHome.newArrival}
                    banner={config.banner.newArrival}
                />
                <ProductList
                    list={productList.dataHome.bestSeller}
                    banner={config.banner.bestSeller}
                />
            </div>
            <LatestNews />
        </div>
    );
};

export default HomePage;
