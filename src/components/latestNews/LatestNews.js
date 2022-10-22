import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'swiper';

import style from './LatestNews.module.scss';

const cx = classNames.bind(style);

const demoNewsPosts = [
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/desktop3.jpg?v=1665417347433',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'CON CONCEPT X VANS – NGUỒN CẢM HỨNG THỜI TRANG PUNK',
        desc: '     Giống như các dự án trước đây của họ, nhà bán lẻ và thương hiệu giày dép có t...',
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/one-piece-vans-authentic-teaser-0.jpg?v=1665415143090',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'HÌNH ẢNH ĐẦU TIÊN TỪ LẦN COLLAB ĐÁNG MONG CHỜ ONE PIECE X VANS',
        desc: '      Không phụ lòng sự mong đợi của người hâm mộ, ngay khi One Piece Film: Red ch...',
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/one-piece-vans-authentic-teaser-0.jpg?v=1665415143090',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'HÌNH ẢNH ĐẦU TIÊN TỪ LẦN COLLAB ĐÁNG MONG CHỜ ONE PIECE X VANS',
        desc: '      Không phụ lòng sự mong đợi của người hâm mộ, ngay khi One Piece Film: Red ch...',
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/one-piece-vans-authentic-teaser-0.jpg?v=1665415143090',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'HÌNH ẢNH ĐẦU TIÊN TỪ LẦN COLLAB ĐÁNG MONG CHỜ ONE PIECE X VANS',
        desc: '      Không phụ lòng sự mong đợi của người hâm mộ, ngay khi One Piece Film: Red ch...',
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/one-piece-vans-authentic-teaser-0.jpg?v=1665415143090',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'HÌNH ẢNH ĐẦU TIÊN TỪ LẦN COLLAB ĐÁNG MONG CHỜ ONE PIECE X VANS',
        desc: '      Không phụ lòng sự mong đợi của người hâm mộ, ngay khi One Piece Film: Red ch...',
    },
    {
        src: 'https://bizweb.dktcdn.net/thumb/large/100/140/774/articles/one-piece-vans-authentic-teaser-0.jpg?v=1665415143090',
        date: '10/10/2022',
        author: 'VANS Việt Nam',
        title: 'HÌNH ẢNH ĐẦU TIÊN TỪ LẦN COLLAB ĐÁNG MONG CHỜ ONE PIECE X VANS',
        desc: '      Không phụ lòng sự mong đợi của người hâm mộ, ngay khi One Piece Film: Red ch...',
    },
];

const LatestNews = () => {
    const [newsPosts, setNewsPosts] = useState(demoNewsPosts);
    const [slidesPerView, setSlidesPerView] = useState(3);

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
                    {newsPosts.map((post, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link to="/" className={cx('item')}>
                                    <div className={cx('header-item')}>
                                        <img src={post.src} alt="" />
                                        <div className={cx('date')}>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faCalendarDays}
                                                />
                                            </span>
                                            <b>{post.date}</b> Đăng bởi:{' '}
                                            <b>{post.author}</b>
                                        </div>
                                    </div>

                                    <div className={cx('content-item')}>
                                        <h4>{post.title}</h4>
                                        <p>{post.desc}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default LatestNews;
