import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import style from './FooterContact.module.scss';

const cx = classNames.bind(style);

const FooterContact = ({ data, header }) => {
    const isDesktop = useMediaQuery({ query: '(min-width : 768px)' });
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };
    return (
        <div className={cx('container')}>
            <h3 className={cx('header')}>
                {header}
                {!isDesktop && (
                    <span className={cx('icon')} onClick={handleToggleMenu}>
                        {isOpenMenu ? (
                            <FontAwesomeIcon icon={faMinus} />
                        ) : (
                            <FontAwesomeIcon icon={faPlus} />
                        )}
                    </span>
                )}
            </h3>

            <ul className={cx('content')}>
                {(isDesktop || isOpenMenu) &&
                    data.map((data, index) => {
                        let Comp = 'span';
                        const props = {};
                        if (data.href) {
                            Comp = 'a';
                            props.href = data.href;
                        } else if (data.path) {
                            Comp = Link;
                            props.to = data.path;
                        }

                        return (
                            <li key={index}>
                                <Comp {...props} className={cx('content-item')}>
                                    {data.content}
                                </Comp>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default FooterContact;
