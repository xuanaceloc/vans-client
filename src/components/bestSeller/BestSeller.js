import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import Product from '../product';
import style from './BestSeller.module.scss';
import images from '../../assets';
import { ProductContext } from '../../context/product';

const cx = classNames.bind(style);

const BestSeller = () => {
    const isDesktop = useMediaQuery({ query: '(min-width : 990px)' });
    const { getBestSeller, productList } = useContext(ProductContext);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    useEffect(() => {
        if (isDesktop) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(2);
        }
    }, [isDesktop]);

    useEffect(() => {
        getBestSeller();
    }, []);

    return (
        <div
            className={cx('container')}
            style={{ backgroundImage: `url('${images.bestSellerBg}')` }}
        >
            <div className={cx('content')}>
                <h3 className={cx('title')}>
                    <span>Vans Best Seller</span>
                </h3>

                <div className={cx('list')}>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={20}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl =
                                prevBtnRef.current;
                            swiper.params.navigation.nextEl =
                                nextBtnRef.current;
                        }}
                    >
                        {productList.bestSeller.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Product
                                        brand={data.brand}
                                        productName={data.name}
                                        newPrice={data.price.newPrice}
                                        imgProduct={data.img}
                                        productId={data.productId}
                                    />
                                </SwiperSlide>
                            );
                        })}

                        <button className={cx('prev-btn')} ref={prevBtnRef}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className={cx('next-btn')} ref={nextBtnRef}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
