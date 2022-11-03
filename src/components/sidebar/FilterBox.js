import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

const FilterBox = ({ title, children }) => {
    const [isShow, setIsShow] = useState(false);

    const handleShowMenu = () => {
        setIsShow((prev) => !prev);
    };

    return (
        <div className={cx('filter-group')}>
            <h3 onClick={handleShowMenu}>
                {title}
                <span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </h3>
            {isShow && children}
        </div>
    );
};

export default FilterBox;
