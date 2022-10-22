import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

const Item = ({ data }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const isParent = !!data.children;

    const handleToggleMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };

    return (
        <div className={cx('item-container')}>
            <div className={cx('item-content')}>
                <Link to={data.path}>{data.content}</Link>

                {isParent && (
                    <span
                        className={cx('item-icon')}
                        onClick={handleToggleMenu}
                    >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                )}
            </div>
            {isParent && isOpenMenu && (
                <div className={cx('menu')}>
                    {data.children.map((data, index) => {
                        return (
                            <Link key={index} to={data.path}>
                                {data.content}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Item;
