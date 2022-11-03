import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'swiper';

import style from './LatestNews.module.scss';
import LatestNewsItem from './LatestNewsItem';
import { NewsContext } from '../../context/news';
import config from '../../config';

const cx = classNames.bind(style);

const LatestNews = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    const { news, getNewsList } = useContext(NewsContext);

    // get news list
    useEffect(() => {
        getNewsList();
    }, []);

    const isTablet = useMediaQuery({ query: '(max-width : 990px)' });
    const isMobile = useMediaQuery({ query: '(max-width : 768px)' });

    useEffect(() => {
        if (isMobile) {
            setSlidesPerView(1);
        } else if (isTablet) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    }, [isMobile, isTablet]);

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>
                <Link to="/">LATEST VANS NEWS</Link>
            </h1>
            <div className={cx('content')}>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    modules={[Pagination]}
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
                    {news.newsList.map((post, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <LatestNewsItem
                                    srcImg={post.img[0]}
                                    author={post.author}
                                    date={post.date}
                                    desc={post.content[0]}
                                    title={post.title}
                                    id={post._id}
                                    path={
                                        config.publicRoutes.latestVansNewsDetail
                                    }
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default LatestNews;
