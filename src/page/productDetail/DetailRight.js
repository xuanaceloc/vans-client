import classNames from 'classnames/bind';
import { useState, useContext, useEffect } from 'react';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import style from './ProductDetail.module.scss';
import config from '../../config';
import { CartContext } from '../../context/cart';

const cx = classNames.bind(style);

const DetailRight = ({
    name,
    price = { newPrice: '', oldPrice: '' },
    brand,
    productId,
    size = [],
    detail = '',
}) => {
    const { cart, addProductCart } = useContext(CartContext);

    const [sizeSelect, setSizeSelect] = useState();
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [selectQuality, setSelectQuality] = useState(1);
    const [showSize, setShowSize] = useState(true);

    useEffect(() => {
        if (
            detail.collection === config.collectionConstant.vansWallet ||
            detail.collection === config.collectionConstant.backpack
        ) {
            setShowSize(false);
        } else {
            setShowSize(true);
        }
    }, [detail]);

    const handleIncreaseQuality = () => {
        setSelectQuality((prev) => prev + 1);
    };

    const handleDecreaseQuality = () => {
        if (selectQuality === 1) return;
        setSelectQuality((prev) => prev - 1);
    };

    const handleSetQuality = (e) => {
        const data = e.target.value;

        if (isNaN(data) || data < 1) return;
        setSelectQuality(data);
    };

    const handleSelectSize = (e) => {
        if (e.target.dataset.soldout === '0') {
            setIsSoldOut(true);
        } else {
            setIsSoldOut(false);
        }
        setSizeSelect(e.target.value);
    };

    // handle add product to cart list
    const handleBuyProduct = () => {
        addProductCart({ productId, sizeSelect, selectQuality });
    };

    return (
        <div className={cx('right')}>
            <h3 className={cx('right-title')}>{name}</h3>

            <div className={cx('right-status')}>
                <span>
                    Thương hiệu:
                    <p>{brand}</p>
                </span>
                /
                <span>
                    Mã sản phẩm:
                    <p>{productId}</p>
                </span>
            </div>

            <div className={cx('right-separate')}></div>

            <div className={cx('right-price-group')}>
                <span className={cx('new-price')}>{price.newPrice}₫</span>
                {!!price.oldPrice && (
                    <span className={cx('old-price')}>{price.oldPrice}₫</span>
                )}
            </div>

            <div className={cx('size-group')}>
                {showSize && (
                    <>
                        <h4>SIZE</h4>
                        {Object.keys(size).map((key, index) => {
                            return (
                                <div className={cx('size-box')} key={index}>
                                    <input
                                        id={`size-${key}`}
                                        type="radio"
                                        value={key}
                                        data-soldout={size[key]}
                                        onChange={handleSelectSize}
                                        checked={key === sizeSelect}
                                    />
                                    <label
                                        htmlFor={`size-${key}`}
                                        className={
                                            !size[key] ? cx('sold-out') : ''
                                        }
                                    >
                                        {key}
                                    </label>
                                </div>
                            );
                        })}
                    </>
                )}

                <div className={cx('right-btn-group')}>
                    {isSoldOut ? (
                        <Button
                            primary
                            large
                            disable
                            leftIcon={faBasketShopping}
                            className={cx('right-btn')}
                        >
                            Hết hàng
                        </Button>
                    ) : (
                        <>
                            <div className={cx('right-btn-group-quality')}>
                                <button onClick={handleDecreaseQuality}>
                                    -
                                </button>
                                <input
                                    min="1"
                                    value={selectQuality}
                                    onChange={handleSetQuality}
                                />
                                <button onClick={handleIncreaseQuality}>
                                    +
                                </button>
                            </div>
                            <Button
                                primary
                                large
                                leftIcon={faBasketShopping}
                                className={cx('right-btn')}
                                onClick={handleBuyProduct}
                            >
                                Mua ngay
                            </Button>
                        </>
                    )}
                </div>

                <div className={cx('right-separate')}></div>
            </div>

            <div className={cx('hotline')}>
                <span>Tư vấn:</span>
                <a href={config.publicRoutes.phone}>0866956907</a>
            </div>

            <div className={cx('summary')}>
                <Link
                    to={config.publicRoutes.sizeChart}
                    className={cx('size-chart')}
                >
                    SIZE CHART
                </Link>

                {/* show detail */}
                {detail.collection &&
                    detail.productId &&
                    detail.productMaterial &&
                    detail.color && (
                        <div className={cx('detail')}>
                            <div className={cx('detail-item')}>
                                <h5>Dòng sản phẩm:</h5>
                                <p>{detail.collection}</p>
                            </div>
                            <div className={cx('detail-item')}>
                                <h5>Mã SKU:</h5>
                                <p>{detail.productId}</p>
                            </div>
                            <div className={cx('detail-item')}>
                                <h5>Chất liệu:</h5>
                                <p>{detail.productMaterial}</p>
                            </div>
                            <div className={cx('detail-item')}>
                                <h5>Màu sắc:</h5>
                                <p>{detail.color}</p>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default DetailRight;
