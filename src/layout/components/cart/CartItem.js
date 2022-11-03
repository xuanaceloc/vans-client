import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import style from './Cart.module.scss';
import { CartContext } from '../../../context/cart';

const cx = classNames.bind(style);

const CartItem = ({ name, price, src, to, quality, size, productId }) => {
    const [qualityItem, setQualityItem] = useState(quality);
    const { setProductQuality, removeProduct, setTotal } =
        useContext(CartContext);

    useEffect(() => {
        setTotal();
    }, [qualityItem]);

    const handleIncreaseQuality = () => {
        setQualityItem((prev) => {
            return prev + 1;
        });
        setProductQuality(productId, size, qualityItem + 1);
        setTotal();
    };

    const handleDecreaseQuality = () => {
        if (qualityItem === 1) return;
        setQualityItem((prev) => {
            return prev - 1;
        });
        setProductQuality(productId, size, qualityItem - 1);
        setTotal();
    };

    const handleChangeInput = (e) => {
        const data = e.target.value;
        if (isNaN(data) || data < 1) return;
        setQualityItem(data);
        setProductQuality(productId, size, data);
    };

    const handleRemoveProduct = () => {
        removeProduct(productId, size);
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

                <button
                    className={cx('close-btn')}
                    onClick={handleRemoveProduct}
                >
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
    price: PropTypes.number,
};

export default CartItem;
