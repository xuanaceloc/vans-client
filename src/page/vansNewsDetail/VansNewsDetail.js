import classNames from 'classnames/bind';
import { useContext, useState, useEffect } from 'react';

import Button from '../../components/button';
import style from './VansNewsDetail.module.scss';
import Hero from '../../components/hero';
import { NewsContext } from '../../context/news';
import Docs from '../../components/docs';

const cx = classNames.bind(style);

const VansNewsDetail = () => {
    const [data, setData] = useState();
    const [dataNews, setDataNews] = useState();
    const { news, getNewsDetail } = useContext(NewsContext);

    // get data from api
    useEffect(() => {
        getNewsDetail();
    }, []);

    // set data for state
    useEffect(() => {
        setData(news.currentNews);
    }, [news.currentNews]);

    // format data for docs component
    useEffect(() => {
        setDataNews(() => {
            if (data) {
                let content = [];

                for (let i = 0; i < 20; i++) {
                    if (i < data.content.length) {
                        content.push({ content: data.content[i] });
                    }
                    if (i < data.img.length) {
                        content.push({ src: data.img[i] });
                    }
                }

                return {
                    title: [{ title: data.title }],
                    mainImg: [data.img[0]],
                    content: content,
                };
            }
        });
    }, [data]);

    return (
        <div>
            {!!dataNews && (
                <>
                    <Hero title={data.title} subTitle={data.title} />
                    <div className={cx('content')}>
                        <Docs data={[{ src: data.img[0] }]} />
                        <Docs data={dataNews.title} />
                        <Docs data={dataNews.content} />
                    </div>

                    {/* bottom */}
                    <div className={cx('social-share')}>
                        <h4>Chia sẻ : </h4>
                        <div className={cx('social-share-box')}>
                            <div className={cx('social-share-item')}></div>
                        </div>
                    </div>
                    <div className={cx('comment')}>
                        <h4 className={cx('title')}>Viết bình luận của bạn:</h4>
                        <div className={cx('comment-info')}>
                            <input placeholder="Họ và tên" />
                            <input placeholder="email" />
                        </div>
                        <div className={cx('comment-content')}>
                            <textarea placeholder="Viết bình luận của bạn"></textarea>
                        </div>
                        <Button large primary className={cx('submit')}>
                            Gửi bình luận
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default VansNewsDetail;
