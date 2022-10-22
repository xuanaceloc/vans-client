import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../../components/button';
import Product from '../product';
import style from './ProductList.module.scss';

const cx = classNames.bind(style);

const ProductList = () => {
    const isTablet = useMediaQuery({ query: '(max-width : 990px)' });
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        if (isTablet) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    }, [isTablet]);

    return (
        <div className={cx('container')}>
            <div
                className={cx('banner')}
                style={{
                    backgroundImage: `url('https://bizweb.dktcdn.net/100/140/774/themes/827866/assets/bg_module_1.jpg?1666082361733%22')`,
                }}
            >
                <h2 className={cx('header')}>
                    <Link to="/">CLASSIC</Link>
                </h2>
                <div className={cx('desc')}>
                    Bộ sưu tập cổ điển
                    <br />
                    Những phiên bản bất tử
                    <br />
                    từ năm 1966
                </div>
                <Button className={cx('more-btn')} outline to="/">
                    Xem thêm
                </Button>
            </div>

            <div className={cx('list')}>
                <Swiper
                    slidesPerView={slidesPerView}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevBtnRef.current;
                        swiper.params.navigation.nextEl = nextBtnRef.current;
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
    );
};

export default ProductList;
