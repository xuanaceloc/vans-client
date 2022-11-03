import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import style from './Nav.module.scss';

const cx = classNames.bind(style);

const ItemNav = ({ nav = [], isParent = false }) => {
    const [isOpenSubNav, setIsOpenSubNav] = useState(false);

    const handleOpenSubNav = () => {
        setIsOpenSubNav(true);
    };

    const handleCloseSubNav = () => {
        setIsOpenSubNav(false);
    };

    return (
        <div
            className={cx('nav-item')}
            onMouseLeave={handleCloseSubNav}
            onMouseEnter={handleOpenSubNav}
        >
            <NavLink
                className={({ isActive }) => cx('item', { active: isActive })}
                to={nav.path}
            >
                {nav.content}
                {isParent && (
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                )}
            </NavLink>
            <AnimatePresence>
                {isParent && isOpenSubNav && (
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={cx('menu')}
                    >
                        {nav.children.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={cx('menu-item')}
                                >
                                    {item.content}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ItemNav;
