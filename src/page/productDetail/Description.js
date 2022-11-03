import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import images from '../../assets';
import SizeChart from '../../components/sizeChart';
import style from './ProductDetail.module.scss';

const cx = classNames.bind(style);

const Description = ({ productImg = [], desc, table = {} }) => {
    const [isShowInfo, setIsShowInfo] = useState(true);

    const handleShowInfo = () => {
        setIsShowInfo(true);
    };

    const handleHideInfo = () => {
        setIsShowInfo(false);
    };

    return (
        <div className={cx('desc-container')}>
            <div className={cx('desc-content')}>
                <div className={cx('desc-header')}>
                    <img src={images.logoVans} alt="" />
                </div>
                <div className={cx('desc-btn-group')}>
                    <button
                        className={cx('desc-btn', { active: isShowInfo })}
                        onClick={handleShowInfo}
                    >
                        Thông tin sản phẩm
                    </button>
                    <button
                        className={cx('desc-btn', { active: !isShowInfo })}
                        onClick={handleHideInfo}
                    >
                        Cách đo size VANS
                    </button>
                </div>

                <div className={cx('desc-info')}>
                    {isShowInfo ? (
                        <div className={cx('desc-info-content')}>
                            {!!desc ? (
                                <>
                                    <p>{desc}</p>
                                    {productImg.map((src, index) => {
                                        return (
                                            <img key={index} src={src} alt="" />
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    {productImg.map((src, index) => {
                                        return (
                                            <img key={index} src={src} alt="" />
                                        );
                                    })}
                                    <div>
                                        <table className={cx('table')}>
                                            <tbody>
                                                <tr>
                                                    <th>Dòng sản phẩm:</th>
                                                    <th>{table.collection}</th>
                                                </tr>
                                                <tr>
                                                    <th>Mã SKU:</th>
                                                    <th>{table.productId}</th>
                                                </tr>
                                                <tr>
                                                    <th>Chất liệu:</th>
                                                    <th>
                                                        {table.productMaterial}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th>Màu sắc:</th>
                                                    <th>{table.color}</th>
                                                </tr>
                                                <tr>
                                                    <th>Giới tính:</th>
                                                    <th>{table.gender}</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <SizeChart />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Description;
