import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../../components/button';
import Product from '../product';
import style from './ProductList.module.scss';

const cx = classNames.bind(style);

const ProductList = ({ list, banner }) => {
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
                    backgroundImage: `url('${banner.img}')`,
                }}
            >
                <h2 className={cx('header')}>
                    <Link to="/">{banner.title}</Link>
                </h2>
                <div className={cx('desc')}>{banner.desc}</div>
                <Button className={cx('more-btn')} outline to={banner.path}>
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
                    {list.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Product
                                    brand={product.brand}
                                    newPrice={product.price.newPrice}
                                    oldPrice={product.price.oldPrice}
                                    productName={product.name}
                                    imgProduct={product.img}
                                    productId={product.productId}
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
    );
};

export default ProductList;
