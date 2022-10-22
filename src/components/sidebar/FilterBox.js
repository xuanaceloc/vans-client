import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

const FilterBox = ({ title, children }) => {
    return (
        <div className={cx('filter-group')}>
            <h3>
                {title}
                <span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </h3>
            {children}
        </div>
    );
};

export default FilterBox;
