import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMagnifyingGlass,
    faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Tippy from '@tippyjs/react/headless';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Actions.module.scss';
import config from '../../../config';
import Cart from '../cart';
import { CartContext } from '../../../context/cart';

const cx = classnames.bind(style);

const Actions = ({ onOpenMenu }) => {
    const isDesktop = useMediaQuery({ query: '(min-width : 990px)' });
    const [qualityCart, setQualityCart] = useState(0);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        setQualityCart(cart.cartList.length);
    }, [cart]);

    return (
        <div className={cx('container')}>
            {!isDesktop && (
                <div className={cx('item')} onClick={onOpenMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            )}

            {/* search */}
            {/* Using a wrapper  <span> tag around the reference element solves this by creating a new parentNode context.  */}
            <span>
                <Tippy
                    interactive
                    placement="bottom-start"
                    offset={[-100, 0]}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <div className={cx('search')}>
                                <input placeholder="Tìm kiếm..." />
                                <span>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                            </div>
                        </div>
                    )}
                >
                    <div className={cx('item')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </Tippy>
            </span>

            {/* cart */}
            {/* Using a wrapper  <span> tag around the reference element solves this by creating a new parentNode context.  */}
            <span>
                <Tippy
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <Cart />
                        </div>
                    )}
                >
                    <Link
                        to={config.publicRoutes.cartPage}
                        className={cx('item')}
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className={cx('item-quality')}>
                            {qualityCart}
                        </span>
                    </Link>
                </Tippy>
            </span>
        </div>
    );
};

export default Actions;
