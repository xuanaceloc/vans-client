import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Hero.module.scss';
import images from '../../assets';
import config from '../../config';

const cx = classNames.bind(style);
const Hero = ({ title, subTitle }) => {
    return (
        <div
            className={cx('container')}
            style={{ backgroundImage: `url('${images.heroBg}')` }}
        >
            <h1 className={cx('title')}>{title}</h1>
            <div className={cx('content')}>
                <Link to={config.publicRoutes.home}>Trang chủ</Link>/
                <span> {subTitle}</span>
            </div>
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default Hero;
