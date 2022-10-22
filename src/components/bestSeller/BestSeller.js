import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Product from '../product';
import style from './BestSeller.module.scss';
import images from '../../assets';

const cx = classNames.bind(style);

const BestSeller = () => {
    const isDesktop = useMediaQuery({ query: '(min-width : 990px)' });
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
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product />
                        </SwiperSlide>

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
