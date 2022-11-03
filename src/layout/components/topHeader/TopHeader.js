import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './TopHeader.module.scss';
import config from '../../../config';

const cx = classNames.bind(style);

const LEFT = [
    {
        href: config.publicRoutes.gmail,
        content: 'cskh.vans@gmail.com',
    },
    {
        href: config.publicRoutes.phone,
        content: '0866956907',
    },
];

const RIGHT = [
    {
        path: config.publicRoutes.register,
        content: 'Đăng ký',
    },
    {
        path: config.publicRoutes.login,
        content: 'Đăng nhập',
    },
];

const TopHeader = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content-item', 'left')}>
                    {LEFT.map((item, index) => {
                        return (
                            <a
                                href={item.href}
                                key={index}
                                className={cx('item')}
                            >
                                {item.content}
                            </a>
                        );
                    })}
                </div>

                <div className={cx('content-item')}>
                    {RIGHT.map((item, index) => {
                        return (
                            <Link
                                to={item.path}
                                key={index}
                                className={cx('item')}
                            >
                                {item.content}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
