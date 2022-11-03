import { useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import Button from '../../components/button';
import style from './UpProduct.module.scss';
import config from '../../config';

const cx = classNames.bind(style);

const UpProduct = () => {
    // product description
    const [description, setDescription] = useState();

    // product info
    const [productInfo, setProductInfo] = useState({
        name: '',
        brand: '',
        productId: '',
        oldPrice: 0,
        newPrice: 0,
        sale: 0,
        newArrival: false,
        bestSeller: false,
    });

    const {
        name,
        brand,
        productId,
        oldPrice,
        newPrice,
        sale,
        newArrival,
        bestSeller,
    } = productInfo;

    // collection
    const [collection, setCollection] = useState('Vans Classic');

    const [detail, setDetail] = useState({
        color: 'black',
        gender: 'unisex',
        productMaterial: '',
    });
    // product img
    const [productImg, setProductImg] = useState({
        src1: '',
        src2: '',
        src3: '',
        src4: '',
        src5: '',
    });

    // product size
    const [sizeQuality, setSizeQuality] = useState({
        34.5: 0,
        35: 0,
        36: 0,
        36.5: 0,
        37: 0,
        38: 0,
        38.5: 0,
        39: 0,
        40: 0,
        40.5: 0,
        41: 0,
        42: 0,
        42.5: 0,
        43: 0,
        44: 0,
        44.5: 0,
        45: 0,
        46: 0,
        47: 0,
    });

    // verify data
    const [isEmptyName, setIsEmptyName] = useState(false);
    const [isEmptyBrand, setIsEmptyBrand] = useState(false);
    const [isEmptyProductId, setIsEmptyProductId] = useState(false);
    const [isEmptyNewPrice, setIsEmptyNewPrice] = useState(false);
    const [isEmptyImgSrc, setIsEmptyImgSrc] = useState(false);

    // function handle
    const handleChangeProductInfo = (e) => {
        setProductInfo(() => {
            let data = e.target.value;
            if (
                e.target.name === 'bestSeller' ||
                e.target.name === 'newArrival'
            ) {
                data = e.target.checked;
            }
            return {
                ...productInfo,
                [e.target.name]: data,
            };
        });
    };

    const handleChangeProductImg = (e) => {
        setProductImg({ ...productImg, [e.target.name]: e.target.value });
    };

    const handleChangeSizeQuality = (e) => {
        if (isNaN(e.target.value)) return;
        setSizeQuality({ ...sizeQuality, [e.target.name]: e.target.value });
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleChangeDetail = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value });
    };

    const handleChangeCollection = (e) => {
        setCollection(e.target.value);
    };

    const handleSubmit = () => {
        // validate info
        name === '' ? setIsEmptyName(true) : setIsEmptyName(false);
        brand === '' ? setIsEmptyBrand(true) : setIsEmptyBrand(false);
        productId === ''
            ? setIsEmptyProductId(true)
            : setIsEmptyProductId(false);
        newPrice === '' ? setIsEmptyNewPrice(true) : setIsEmptyNewPrice(false);

        setIsEmptyImgSrc(
            !Object.keys(productImg).some((src) => productImg[src] !== ''),
        );

        if (
            isEmptyName &&
            isEmptyBrand &&
            isEmptyNewPrice &&
            isEmptyProductId &&
            isEmptyImgSrc
        ) {
            return;
        } else {
            const info = {
                ...productInfo,
                sizeQuality,
                productImg,
                description,
                collection,
                detail: {
                    ...detail,
                    productId,
                    collection,
                },
            };
            try {
                axios
                    .post('http://localhost:5000/api/product', { info })
                    .then((res) => res);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={cx('container')}>
            <h1 className={cx('header')}>Add new product</h1>
            <div className={cx('content')}>
                {/* name */}
                <div className={cx('item', { invalid: isEmptyName })}>
                    <label htmlFor="name">name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Product name"
                        value={name}
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* brand */}
                <div className={cx('item', { invalid: isEmptyBrand })}>
                    <label htmlFor="brand">Brand</label>
                    <input
                        id="brand"
                        name="brand"
                        placeholder="Product brand"
                        value={brand}
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* collection */}
                <div className={cx('item')}>
                    <label>collection</label>
                    <select
                        onChange={handleChangeCollection}
                        value={collection}
                    >
                        {config.collection.map((collection, index) => (
                            <option value={collection} key={index}>
                                {collection}
                            </option>
                        ))}
                    </select>
                </div>

                {/* productID */}
                <div className={cx('item', { invalid: isEmptyProductId })}>
                    <label htmlFor="productId">Product Id</label>
                    <input
                        id="productId"
                        name="productId"
                        placeholder="Product ID"
                        value={productId}
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* price */}
                <div className={cx('item', { invalid: isEmptyNewPrice })}>
                    <label htmlFor="price">Price</label>

                    <input
                        id="price"
                        name="newPrice"
                        placeholder="New price"
                        value={newPrice}
                        type={'number'}
                        min={0}
                        onChange={handleChangeProductInfo}
                    />
                    <input
                        id="price"
                        name="oldPrice"
                        placeholder="Old price"
                        type={'number'}
                        min={0}
                        value={oldPrice}
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* sale */}
                <div className={cx('item')}>
                    <label htmlFor="sale">sale</label>
                    <input
                        id="sale"
                        name="sale"
                        placeholder="sale"
                        type={'number'}
                        min="0"
                        max="100"
                        value={sale}
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* best seller */}
                <div className={cx('item')}>
                    <label htmlFor="bestSeller">best Seller</label>
                    <input
                        id="bestSeller"
                        name="bestSeller"
                        type="checkbox"
                        onChange={handleChangeProductInfo}
                    />
                </div>
                {/* new arrival */}
                <div className={cx('item')}>
                    <label htmlFor="newArrival">new Arrival</label>
                    <input
                        id="newArrival"
                        name="newArrival"
                        type="checkbox"
                        onChange={handleChangeProductInfo}
                    />
                </div>

                {/* size */}
                <div className={cx('item')}>
                    <label>size</label>
                    <div className={cx('size')}>
                        {config.size.map((size, index) => {
                            return (
                                <div key={index} className={cx('size-box')}>
                                    <label htmlFor={`${size}+${index}`}>
                                        {size}
                                    </label>
                                    <input
                                        type={'number'}
                                        min={0}
                                        id={`${size}+${index}`}
                                        placeholder="quality"
                                        defaultValue={0}
                                        name={size}
                                        value={sizeQuality[index]}
                                        onChange={handleChangeSizeQuality}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* src img */}
                <div className={cx('item', { invalid: isEmptyImgSrc })}>
                    <label>IMG link</label>
                    <input
                        name="src1"
                        placeholder="src img link"
                        value={productImg.src1}
                        onChange={handleChangeProductImg}
                    />
                    <input
                        name="src2"
                        placeholder="src img link"
                        value={productImg.src2}
                        onChange={handleChangeProductImg}
                    />
                    <input
                        name="src3"
                        placeholder="src img link"
                        value={productImg.src3}
                        onChange={handleChangeProductImg}
                    />
                    <input
                        name="src4"
                        placeholder="src img link"
                        value={productImg.src4}
                        onChange={handleChangeProductImg}
                    />
                    <input
                        name="src5"
                        placeholder="src img link"
                        value={productImg.src5}
                        onChange={handleChangeProductImg}
                    />
                </div>

                {/* description */}
                <div className={cx('item')}>
                    <label>Description</label>
                    <textarea
                        onChange={handleChangeDescription}
                        value={description}
                    ></textarea>
                </div>

                {/* detail */}
                <div className={cx('item')}>
                    <label>Detail</label>
                    <div className={cx('detail')}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Chất liệu:</th>
                                    <th>
                                        <input
                                            placeholder="Chất liệu:"
                                            name="productMaterial"
                                            onChange={handleChangeDetail}
                                            value={detail.productMaterial}
                                        />
                                    </th>
                                </tr>
                                <tr>
                                    <th>Màu sắc:</th>
                                    <th>
                                        <select
                                            name="color"
                                            onChange={handleChangeDetail}
                                            value={detail.color}
                                        >
                                            {config.sidebarFilter.color.content.map(
                                                (color, index) => (
                                                    <option
                                                        key={index}
                                                        value={color.value}
                                                    >
                                                        {color.value}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Giới tính:</th>
                                    <th>
                                        <select
                                            name="gender"
                                            onChange={handleChangeDetail}
                                            value={detail.gender}
                                        >
                                            <option value={'women'}>
                                                Women
                                            </option>
                                            <option value={'man'}>Man</option>
                                            <option value={'unisex'}>
                                                Unisex
                                            </option>
                                        </select>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Button
                primary
                large
                className={cx('submit-btn')}
                onClick={handleSubmit}
            >
                Add product
            </Button>
        </div>
    );
};

export default UpProduct;
