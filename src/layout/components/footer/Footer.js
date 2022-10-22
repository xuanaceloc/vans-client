import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '../../../assets';
import Button from '../../../components/button';
import style from './Footer.module.scss';
import FooterContact from '../footerContact';
import config from '../../../config';

const cx = classNames.bind(style);

const Footer = () => {
    return (
        <div className={cx('container')}>
            <div
                className={cx('top')}
                style={{ backgroundImage: `url('${images.bgFooter}')` }}
            >
                <div className={cx('top-content')}>
                    <h3>NHẬP EMAIL</h3>
                    <span>
                        Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi
                    </span>

                    <div className={cx('input-group')}>
                        <input placeholder="Nhập email của bạn" />
                        <Button primary large className={cx('input-btn')}>
                            Gửi ngay
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('content-list')}>
                    {config.footerContact.map((item, index) => (
                        <FooterContact
                            key={index}
                            data={item.content}
                            header={item.header}
                        />
                    ))}
                    <Link to={config.publicRoutes.home} className={cx('logo')}>
                        <img src={images.logoFooter} alt="" />
                    </Link>
                </div>
            </div>

            <div className={cx('copy-right')}>
                © Bản quyền thuộc về <b> VANS Việt Nam</b> | Cung cấp bởi{' '}
                <a
                    href={config.publicRoutes.home}
                    target="_blank"
                    rel="noreferrer"
                >
                    VANS
                </a>
            </div>
        </div>
    );
};

export default Footer;
