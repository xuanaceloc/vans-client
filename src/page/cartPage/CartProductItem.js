import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

import style from './CartPage.module.scss';
import { CartContext } from '../../context/cart';

const cx = classNames.bind(style);

const CartProductItem = ({
    name,
    size,
    img,
    qualityProduct,
    priceProduct = 1,
    productId,
}) => {
    const { setProductQuality, removeProduct, setTotal } =
        useContext(CartContext);
    const [quality, setQuality] = useState(qualityProduct);
    const [totalProduct, setTotalProduct] = useState(priceProduct);
    const isDesktop = useMediaQuery({
        query: '(min-width : 990px)',
    });

    // handle change total price
    useEffect(() => {
        if (isNaN(quality)) return;
        setTotalProduct(quality * priceProduct);
        setProductQuality(productId, size, quality);
    }, [quality]);

    // delete product

    const handleDeleteProduct = () => {
        removeProduct(productId, size);
    };

    // handle change quality product
    const handleIncreaseQuality = () => {
        setQuality((prev) => prev + 1);
        setProductQuality(productId, size, quality + 1);
        setTotal();
    };

    const handleDecreaseQuality = () => {
        if (quality <= 1) return;
        setQuality((prev) => prev - 1);
        setProductQuality(productId, size, quality - 1);
        setTotal();
    };

    const handleChangeInput = (e) => {
        const data = e.target.value;

        if (isNaN(data)) {
            return;
        } else if (data < 1) {
            return;
        } else {
            setQuality(data);
        }
    };

    return (
        <>
            <div className={cx('item-content')}>
                <Link className={cx('item-img')} to="/">
                    <img src={img} alt="" />
                </Link>
                <div className={cx('item-detail')}>
                    <Link className={cx('name')} to="/">
                        {name}
                    </Link>
                    <div className={cx('size')}>{size}</div>
                    <div className={cx('price')}>{priceProduct}₫</div>
                </div>
            </div>
            <div className={cx('quality')}>
                <button onClick={handleDecreaseQuality}>-</button>
                <input value={quality} onChange={handleChangeInput} />
                <button onClick={handleIncreaseQuality}>+</button>

                <button
                    className={cx('remove-btn')}
                    onClick={handleDeleteProduct}
                >
                    Xoá
                </button>
            </div>
            {isDesktop && <div className={cx('total')}>{totalProduct}₫</div>}
            {isDesktop && (
                <div className={cx('delete-btn')}>
                    <button onClick={handleDeleteProduct}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}
        </>
    );
};

export default CartProductItem;
