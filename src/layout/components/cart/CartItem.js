import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import style from './Cart.module.scss';

const cx = classNames.bind(style);

const CartItem = ({ name, price, src, to }) => {
    const [qualityItem, setQualityItem] = useState(1);

    const handleIncreaseQuality = () => {
        setQualityItem((prev) => prev + 1);
    };

    const handleDecreaseQuality = () => {
        if (qualityItem === 1) return;
        setQualityItem((prev) => prev - 1);
    };

    const handleChangeInput = (e) => {
        const data = e.target.value;

        if (isNaN(data) || data < 1) return;
        setQualityItem(data);
    };

    return (
        <div className={cx('container')}>
            <Link to={to} className={cx('item-img')}>
                <img src={src} alt="" />
            </Link>

            <div className={cx('detail')}>
                <Link to={to}>
                    <h3 className={cx('name')}>{name}</h3>
                </Link>

                <button className={cx('close-btn')}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className={cx('price')}>{price}₫</div>
                <div className={cx('quality-group')}>
                    <button onClick={handleDecreaseQuality}>-</button>
                    <input
                        value={qualityItem}
                        min="1"
                        onChange={handleChangeInput}
                    />
                    <button onClick={handleIncreaseQuality}>+</button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.string,
};

export default CartItem;
