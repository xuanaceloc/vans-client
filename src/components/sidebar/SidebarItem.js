import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

const SidebarItem = ({ title, data, color, sort }) => {
    const [isShow, setIsShow] = useState(false);

    const handleToggleShow = () => {
        setIsShow((prev) => !prev);
    };

    return (
        <div className={cx('filter')}>
            <div className={cx('filter-title')} onClick={handleToggleShow}>
                {title}
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {isShow && (
                <div
                    className={cx('filter-content', {
                        color: color,
                        sort: sort,
                    })}
                >
                    {data.map((data, index) => {
                        return (
                            <div className={cx('filter-item')} key={index}>
                                <label
                                    htmlFor={`${data.value}+index`}
                                    className={cx(`${data.value}`)}
                                >
                                    {data.content}
                                    <input
                                        type="checkbox"
                                        id={`${data.value}+index`}
                                        value={data.value}
                                    />
                                    <i></i>
                                </label>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
