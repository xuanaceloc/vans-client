import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../components/button';
import style from './Auth.module.scss';
import Hero from '../../components/hero';
import config from '../../config';
import images from '../../assets';

const cx = classNames.bind(style);

const heroData = {
    login: {
        title: 'Đăng nhập tài khoản',
        subTitle: ' Đăng nhập tài khoản',
    },
    register: {
        title: 'Đăng ký tài khoản',
        subTitle: 'Đăng ký tài khoản',
    },
};

const Auth = ({ login }) => {
    const [isShowRecoverPassword, setIsShowRecoverPassword] = useState(false);
    const handleShowRecoverPassword = () => {
        setIsShowRecoverPassword(true);
    };
    const hero = login ? heroData.login : heroData.register;
    return (
        <div className={cx('container')}>
            <Hero title={hero.title} subTitle={hero.subTitle} />
            <h3 className={cx('title')}>{login ? 'Đăng nhập' : 'Đăng ký'}</h3>
            <div className={cx('content')}>
                {!login && (
                    <>
                        <div className={cx('item')}>
                            <label htmlFor="first-name">
                                Họ <span>*</span>
                            </label>
                            <input id="first-name" placeholder="Họ" />
                        </div>
                        <div className={cx('item')}>
                            <label htmlFor="last-name">
                                Tên <span>*</span>
                            </label>
                            <input id="last-name" placeholder="Tên " />
                        </div>
                    </>
                )}
                <div className={cx('item')}>
                    <label htmlFor="email">
                        Email <span>*</span>
                    </label>
                    <input id="email" placeholder="Email " />
                </div>
                {!login && (
                    <div className={cx('item')}>
                        <label htmlFor="phone-number">
                            Số điện thoại <span>*</span>
                        </label>
                        <input id="phone-number" placeholder="Số điện thoại" />
                    </div>
                )}
                <div className={cx('item')}>
                    <label htmlFor="password">
                        Mật khẩu <span>*</span>
                    </label>
                    <input
                        type={'password'}
                        id="password"
                        placeholder="Mật khẩu"
                    />
                </div>

                <Button large primary className={cx('submit-btn')}>
                    Đăng ký
                </Button>

                {login && (
                    <div
                        className={cx('quenmk')}
                        onClick={handleShowRecoverPassword}
                    >
                        Quên mật khẩu
                    </div>
                )}

                <div className={cx('change-page')}>
                    Đã có tài khoản,
                    {login ? (
                        <>
                            đăng ký{' '}
                            <Link to={config.publicRoutes.register}>
                                tại đây
                            </Link>
                        </>
                    ) : (
                        <>
                            đăng nhập{' '}
                            <Link to={config.publicRoutes.login}>tại đây</Link>
                        </>
                    )}
                </div>

                {isShowRecoverPassword && (
                    <div className={cx('recover-password')}>
                        <div className={cx('item')}>
                            <label htmlFor="email">
                                Email <span>*</span>
                            </label>
                            <input id="email" placeholder="Email " />
                        </div>
                        <Button primary className={cx('submit-btn')}>
                            Lấy lại mật khẩu
                        </Button>
                    </div>
                )}

                <div className={cx('content-bottom')}>
                    <h3 className={cx('content-bottom-title')}>
                        Hoặc đăng nhập bằng
                    </h3>
                    <div className={cx('social-login')}>
                        <div className={cx('social-login-item')}>
                            <img src={images.fbBtn} alt="" />
                        </div>
                        <div className={cx('social-login-item')}>
                            <img src={images.gpBtn} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
