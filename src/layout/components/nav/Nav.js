import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

import style from './Nav.module.scss';
import config from '../../../config';

const cx = classNames.bind(style);

const Nav = () => {
    return (
        <div className={cx('container')}>
            {config.nav.map((nav, index) => {
                const isParent = nav.children ? true : false;

                return (
                    <div key={index} className={cx('nav-item')}>
                        <NavLink
                            className={({ isActive }) =>
                                cx('item', { active: isActive })
                            }
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
                            {isParent && (
                                <motion.div
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
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
            })}
        </div>
    );
};

export default Nav;
