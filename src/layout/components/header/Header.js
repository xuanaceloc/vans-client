import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence } from 'framer-motion';

import TopHeader from '../topHeader';
import style from './Header.module.scss';
import config from '../../../config';
import images from '../../../assets';
import Nav from '../nav';
import NavMobile from '../navMobile';
import Actions from '../actions';

const cx = classNames.bind(style);

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width : 990px)' });

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    useEffect(() => {
        setOpenMenu(false);
    }, []);

    return (
        <div>
            <TopHeader />
            <div className={cx('content')}>
                <Link to={config.publicRoutes.home} className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </Link>
                {isDesktop ? (
                    <Nav />
                ) : (
                    <AnimatePresence>
                        {openMenu && <NavMobile onClose={handleCloseMenu} />}
                    </AnimatePresence>
                )}

                <Actions onOpenMenu={handleOpenMenu} />
            </div>
        </div>
    );
};

export default Header;
