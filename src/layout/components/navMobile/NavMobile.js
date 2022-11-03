import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import style from './NavMobile.module.scss';
import images from '../../../assets';
import config from '../../../config';
import Item from './Item';

const cx = classNames.bind(style);

const NavMobile = ({ onClose }) => {
    return (
        <div className={cx('container')}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={onClose}
                className={cx('overlay')}
            ></motion.div>
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.35 }}
                className={cx('content')}
            >
                <div className={cx('header')}>
                    <img src={images.logo} alt="" />
                </div>

                <ul className={cx('list')}>
                    {config.nav.map((nav, index) => (
                        <Item key={index} nav={nav} onClose={onClose} />
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default NavMobile;
