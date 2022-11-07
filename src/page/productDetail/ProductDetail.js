import classNames from 'classnames/bind';
import { useEffect, useContext, useState } from 'react';

import Hero from '../../components/hero';
import DetailRight from './DetailRight';
import ThumbProduct from './ThumbProduct';
import Description from './Description';
import style from './ProductDetail.module.scss';
import { ProductContext } from '../../context/product';
import BestSeller from '../../components/bestSeller';

const cx = classNames.bind(style);

const ProductDetail = () => {
    const { getProductById, productList } = useContext(ProductContext);

    useEffect(() => {
        getProductById(productList.currentProductId);
    }, []);
    return (
        <div>
            <Hero
                title={productList.currentProduct.name}
                subTitle={productList.currentProduct.name}
            />

            <div className={cx('content')}>
                <ThumbProduct productImg={productList.currentProduct.img} />
                <DetailRight
                    name={productList.currentProduct.name}
                    brand={productList.currentProduct.brand}
                    price={productList.currentProduct.price}
                    productId={productList.currentProduct.productId}
                    size={productList.currentProduct.size}
                    detail={productList.currentProduct.detail}
                />
            </div>
            <Description
                desc={productList.currentProduct.description}
                productImg={productList.currentProduct.img}
                table={productList.currentProduct.detail}
            />
            <BestSeller />
        </div>
    );
};

export default ProductDetail;
