import classNames from 'classnames/bind';
import { useEffect, useContext } from 'react';

import style from './LatestVansNewsPage.module.scss';
import Hero from '../../components/hero';
import LatestNewsItem from '../../components/latestNews/LatestNewsItem';
import { NewsContext } from '../../context/news';
import config from '../../config';

const cx = classNames.bind(style);

const LatestVansNewsPage = () => {
    const { news, getNewsList } = useContext(NewsContext);

    useEffect(() => {
        getNewsList();
    }, []);

    return (
        <div>
            <Hero
                subTitle="TIN TỨC VANS MỚI NHẤT CẬP NHẬT MỖI NGÀY"
                title="TIN TỨC VANS MỚI NHẤT CẬP NHẬT MỖI NGÀY"
            />
            <div className={cx('content')}>
                {news.newsList.map((post, index) => {
                    return (
                        <LatestNewsItem
                            key={index}
                            srcImg={post.img[0]}
                            author={post.author}
                            date={post.date}
                            desc={post.content[0]}
                            title={post.title}
                            path={config.publicRoutes.latestVansNewsDetail}
                            id={post._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default LatestVansNewsPage;
