import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import Button from '../button';
import style from './Product.module.scss';

const cx = classNames.bind(style);

const Product = ({ sale, newProduct = false, imgProduct = [] }) => {
    const [mainImg, setMainImg] = useState(imgProduct[0]);

    const handleChangeImg = (e) => {
        setMainImg(e.target.src);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                {sale && <span className={cx('sale')}>{sale}</span>}
                {newProduct && <span className={cx('new')}>New</span>}
                <Link to="/" className={cx('content-thumb')}>
                    <img src={mainImg} alt="" />
                </Link>
                <Button primary className={cx('more-btn')}>
                    TÙY CHỌN
                </Button>
            </div>

            <div className={cx('slider')}>
                <Swiper slidesPerView={3}>
                    {imgProduct.map((src, index) => {
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
                    })}
                </Swiper>
            </div>

            <div className={cx('detail')}>
                <Link to="/" className={cx('detail-name')}>
                    VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE
                </Link>
                <div className={cx('brand')}>VANS</div>
                <div className={cx('price-group')}>
                    <span className={cx('new-price')}>2.565.000₫</span>
                    <span className={cx('old-price')}>2.565.000₫</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
