import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './NavMobile.module.scss';
const cx = classNames.bind(style);

const Item = ({ nav }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isParent = nav.children;

    const handleToggleMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };

    return (
        <li className={cx('item')}>
            <Link to={nav.path}>{nav.content}</Link>
            {isParent && (
                <span onClick={handleToggleMenu}>
                    {isOpenMenu ? (
                        <FontAwesomeIcon icon={faMinus} />
                    ) : (
                        <FontAwesomeIcon icon={faPlus} />
                    )}
                </span>
            )}
            {isParent && isOpenMenu && (
                <div className={cx('sub-menu')}>
                    {nav.children.map((nav, index) => {
                        return (
                            <Link
                                className={cx('sub-menu-link')}
                                key={index}
                                to={nav.path}
                            >
                                {nav.content}
                            </Link>
                        );
                    })}
                </div>
            )}
        </li>
    );
};

export default Item;
