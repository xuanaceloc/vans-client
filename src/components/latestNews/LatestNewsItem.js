import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { NewsContext } from '../../context/news';

import style from './LatestNews.module.scss';

const cx = classNames.bind(style);

const LatestNewsItem = ({ path, srcImg, date, author, title, desc, id }) => {
    const { setNewsId, getNewsDetail } = useContext(NewsContext);

    const handleSetNewsId = () => {
        setNewsId(id);
        getNewsDetail(id);
    };

    return (
        <Link to={path} className={cx('item')} onClick={handleSetNewsId}>
            <div className={cx('header-item')}>
                <img src={srcImg} alt="" />
                <div className={cx('date')}>
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <b>{date}</b> Đăng bởi: <b>{author}</b>
                </div>
            </div>

            <div className={cx('content-item')}>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    );
};

export default LatestNewsItem;
