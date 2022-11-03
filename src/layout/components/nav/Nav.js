import classNames from 'classnames/bind';

import style from './Nav.module.scss';
import config from '../../../config';
import ItemNav from './ItemNav';

const cx = classNames.bind(style);

const Nav = () => {
    return (
        <div className={cx('container')}>
            {config.nav.map((nav, index) => {
                const isParent = nav.children ? true : false;
                return <ItemNav isParent={isParent} key={index} nav={nav} />;
            })}
        </div>
    );
};

export default Nav;
