import classNames from 'classnames/bind';

import style from './AboutUs.module.scss';
import Hero from '../../components/hero';
import Docs from '../../components/docs';
import images from '../../assets';
import config from '../../config';

const cx = classNames.bind(style);

const AboutUs = () => {
    return (
        <div>
            <Hero
                title="Lịch Sử Của VANS Từ Năm 1996 Tới Nay"
                subTitle="Lịch Sử Của VANS Từ Năm 1996 Tới Nay"
            />
            <div className={cx('content')}>
                <h3 className={cx('title')}>
                    Lịch Sử Của VANS Từ Năm 1996 Tới Nay
                </h3>
                <div className={cx('sub-title')}>
                    VANS KỈ NIỆM NĂM VÀNG, HÃY NHÌN LẠI 50 NĂM LỊCH SỬ "OFF THE
                    WALL"
                </div>
                <div className={cx('logo')}>
                    <img src={images.logo50} alt="" />
                </div>
                <div className={cx('sub-title')}>LỊCH SỬ CỦA VANS</div>
                <Docs data={config.DATA_ABOUT_US} />
            </div>
        </div>
    );
};

export default AboutUs;
