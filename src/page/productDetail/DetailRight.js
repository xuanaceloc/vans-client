import classNames from 'classnames/bind';
import { useState } from 'react';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import style from './ProductDetail.module.scss';
import config from '../../config';

const cx = classNames.bind(style);

const size = [
    { size: 36, soldOut: false },
    { size: 37, soldOut: false },
    { size: 38, soldOut: false },
    { size: 39, soldOut: false },
    { size: 40, soldOut: true },
    { size: 41, soldOut: true },
    { size: 42, soldOut: true },
    { size: 43, soldOut: true },
    { size: 44, soldOut: true },
];

const DetailRight = () => {
    const [sizeSelect, setSizeSelect] = useState();
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [selectQuality, setSelectQuality] = useState(1);

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
        if (e.target.dataset.soldout === 'true') {
            setIsSoldOut(true);
        } else {
            setIsSoldOut(false);
        }
        setSizeSelect(e.target.value);
    };

    return (
        <div className={cx('right')}>
            <h3 className={cx('right-title')}>
                VANS VAULT OG CLASSIC SLIP ON BLACK/TRUE WHITE
            </h3>

            <div className={cx('right-status')}>
                <span>
                    Thương hiệu:
                    <p>VANS VAULT</p>
                </span>
                /
                <span>
                    Mã sản phẩm:
                    <p>VN000UDF3SY</p>
                </span>
            </div>

            <div className={cx('right-separate')}></div>

            <div className={cx('right-price-group')}>
                <span className={cx('new-price')}>1.575.000₫</span>
                <span className={cx('old-price')}>1.575.000₫</span>
            </div>

            <div className={cx('size-group')}>
                <h4>SIZE</h4>

                {size.map((data, index) => {
                    return (
                        <div className={cx('size-box')} key={index}>
                            <input
                                id={`size-${data.size}`}
                                type="radio"
                                value={data.size}
                                data-soldout={data.soldOut}
                                onChange={handleSelectSize}
                                checked={data.size == sizeSelect}
                            />
                            <label
                                htmlFor={`size-${data.size}`}
                                className={data.soldOut ? cx('sold-out') : ''}
                            >
                                {data.size}
                            </label>
                        </div>
                    );
                })}

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
            </div>
        </div>
    );
};

export default DetailRight;
