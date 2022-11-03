/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper';
import { useMediaQuery } from 'react-responsive';

import style from './ProductDetail.module.scss';

const cx = classNames.bind(style);

const ThumbProduct = ({ productImg = [] }) => {
    const isMediumDesktop = useMediaQuery({ query: '(max-width : 1200px)' });
    const isLowDesktop = useMediaQuery({ query: '(max-width : 990px)' });
    const isTablet = useMediaQuery({ query: '(max-width : 768px)' });
    const [slidesPerView, setSlidesPerView] = useState(4);

    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const [thumbImg, setThumbImg] = useState(productImg[0]);

    const handleActiveThumb = (e) => {
        setThumbImg(e.target.src);
    };

    // set thumb img initial
    useEffect(() => {
        setThumbImg(productImg[0]);
    }, [productImg]);

    // set slide per view
    useEffect(() => {
        if (isTablet) {
            setSlidesPerView(3);
        } else if (isLowDesktop) {
            setSlidesPerView(4);
        } else if (isMediumDesktop) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(4);
        }
    }, [isMediumDesktop, isLowDesktop, isTablet]);

    return (
        <div className={cx('thumb-container')}>
            <div className={cx('thumb')}>
                <img src={thumbImg} alt="" />
            </div>
            <div className={cx('slide')}>
                <Swiper
                    slidesPerView={slidesPerView}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevBtnRef.current;
                        swiper.params.navigation.nextEl = nextBtnRef.current;
                    }}
                >
                    {productImg.map((src, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={cx('slide-img')}>
                                    <img
                                        src={src}
                                        onClick={handleActiveThumb}
                                        alt=""
                                    />
                                </div>
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
    );
};

export default ThumbProduct;
