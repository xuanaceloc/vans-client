import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import Button from '../button';
import style from './Product.module.scss';
import config from '../../config';
import { ProductContext } from '../../context/product';

const cx = classNames.bind(style);

const Product = ({
    sale,
    newProduct = false,
    imgProduct = [],
    newPrice,
    oldPrice,
    productName,
    brand,
    productId,
}) => {
    const [mainImg, setMainImg] = useState(imgProduct[0]);
    const { setCurrentProductId } = useContext(ProductContext);
    const handleChangeImg = (e) => {
        setMainImg(e.target.src);
    };
    useEffect(() => {
        setMainImg(imgProduct[0]);
    }, [imgProduct]);

    const handleSetProductId = () => {
        setCurrentProductId(productId);
    };

    return (
        <div className={cx('container')} onClick={handleSetProductId}>
            <div className={cx('content')}>
                {!!sale && <span className={cx('sale')}>-{sale}%</span>}
                {!!newProduct && <span className={cx('new')}>New</span>}
                <Link
                    to={config.publicRoutes.showProduct}
                    className={cx('content-thumb')}
                >
                    <img src={mainImg} alt="" />
                </Link>
                <Button
                    primary
                    className={cx('more-btn')}
                    to={config.publicRoutes.showProduct}
                >
                    TÙY CHỌN
                </Button>
            </div>

            <div className={cx('slider')}>
                <Swiper slidesPerView={3}>
                    {imgProduct.map((src, index) => {
                        if (!src) {
                            return <i key={index}></i>;
                        } else {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={cx('slider-item')}>
                                        <img
                                            onMouseMove={handleChangeImg}
                                            alt=""
                                            src={src}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        }
                    })}
                </Swiper>
            </div>

            <div className={cx('detail')}>
                <Link
                    to={config.publicRoutes.showProduct}
                    className={cx('detail-name')}
                >
                    {productName}
                </Link>
                <div className={cx('brand')}>{brand}</div>
                <div className={cx('price-group')}>
                    <span className={cx('new-price')}>{newPrice}₫</span>
                    {!!oldPrice && (
                        <span className={cx('old-price')}>{oldPrice}₫</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
