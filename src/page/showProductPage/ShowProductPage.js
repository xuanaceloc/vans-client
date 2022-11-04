import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';

import style from './ShowProductPage.module.scss';
import Hero from '../../components/hero';
import Sidebar from '../../components/sidebar';
import BestSeller from '../../components/bestSeller';
import Product from '../../components/product';
import { ProductContext } from '../../context/product';
import config from '../../config';

const cx = classNames.bind(style);

const ShowProductPage = ({ collection, hero }) => {
    const {
        productList,
        getCollectionProduct,
        getNewArrivalProduct,
        getSaleOffProduct,
        getAllProduct,
        getAccessoriesProduct,
    } = useContext(ProductContext);

    useEffect(() => {
        if (collection === config.collectionConstant.allVans) {
            getAllProduct();
        } else if (collection === config.collectionConstant.newArrival) {
            getNewArrivalProduct();
        } else if (collection === config.collectionConstant.saleOff) {
            getSaleOffProduct();
        } else if (collection === config.collectionConstant.Accessories) {
            getAccessoriesProduct();
        } else {
            getCollectionProduct(collection);
        }
    }, [collection]);

    return (
        <div>
            <Hero title={hero.title} subTitle={hero.subTitle} />
            <Sidebar />
            <div className={cx('content')}>
                {!!productList.data &&
                    productList.data.map((data, index) => {
                        return (
                            <Product
                                key={index}
                                brand={data.brand}
                                productName={data.name}
                                newPrice={data.price.newPrice}
                                imgProduct={data.img}
                                productId={data.productId}
                                newProduct={data.newArrival}
                                sale={data.sale}
                            />
                        );
                    })}
            </div>
            {!!productList.data && (
                <div className={cx('empty')}>Không có sản phẩm.</div>
            )}
            <BestSeller />
        </div>
    );
};

export default ShowProductPage;
