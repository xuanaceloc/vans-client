import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';

import style from './Slider.module.scss';
import config from '../../config';

const cx = classNames.bind(style);
const Slider = () => {
    return (
        <div className={cx('container')}>
            <Swiper
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                loop
                autoplay={{ delay: 3500 }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class='${cx(
                            'slide-bullet',
                        )} ${className}' ${index}></span>`;
                    },
                    bulletActiveClass: cx('slide-bullet-active'),
                }}
            >
                {config.slider.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link to={slide.path} className={cx('slider')}>
                                <img src={slide.src} alt="" />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
