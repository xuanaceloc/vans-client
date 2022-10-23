/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { Navigation } from 'swiper';

import style from './ProductDetail.module.scss';

const cx = classNames.bind(style);

const ThumbProduct = () => {
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const [thumbImg, setThumbImg] = useState(
        'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/giay-vans-x-moca-judy-baca-authentic-vn0a5krdyq8-1.jpg?v=1663176378000',
    );

    const handleActiveThumb = (e) => {
        setThumbImg(e.target.src);
    };

    return (
        <div>
            <div className={cx('thumb')}>
                <img src={thumbImg} alt="" />
            </div>
            <div className={cx('slide')}>
                <Swiper
                    slidesPerView={4}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevBtnRef.current;
                        swiper.params.navigation.nextEl = nextBtnRef.current;
                    }}
                >
                    <SwiperSlide>
                        <div className={cx('slide-img')}>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/small/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg?v=1661757331440"
                                onClick={handleActiveThumb}
                                alt=""
                            />
                        </div>
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

export default ThumbProduct;
