import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import Button from '../../components/button';
import style from './CartPage.module.scss';
import Hero from '../../components/hero';
import CartProductItem from './CartProductItem';
import { CartContext } from '../../context/cart';
import config from '../../config';

const cx = classNames.bind(style);

const CartPage = ({ hero }) => {
    const { cart } = useContext(CartContext);
    const [productTotal, setProductTotal] = useState(cart.total);

    useEffect(() => {
        setProductTotal(cart.total);
    }, [cart.total]);
    return (
        <div>
            <Hero title={hero.title} subTitle={hero.subTitle} />

            <div className={cx('content')}>
                {cart.cartList.length > 0 ? (
                    <>
                        <div className={cx('header')}>
                            <div className={cx('title')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng tiền</div>
                            <div className={cx('title')}>Xóa</div>
                        </div>
                        <div className={cx('body')}>
                            {cart.cartList.map((item, index) => {
                                return (
                                    <CartProductItem
                                        key={index}
                                        name={item.product.name}
                                        priceProduct={
                                            item.product.price.newPrice
                                        }
                                        size={item.size}
                                        qualityProduct={item.quality}
                                        img={item.product.img[0]}
                                        productId={item.product.productId}
                                    />
                                );
                            })}
                        </div>
                        <div className={cx('bottom')}>
                            <div className={cx('bottom-total')}>
                                <h4>Tổng tiền</h4>
                                <p>{productTotal}₫</p>
                            </div>
                            <div className={cx('btn-group')}>
                                <Button
                                    large
                                    className={cx('btn')}
                                    to={config.publicRoutes.home}
                                >
                                    Tiếp tục mua hàng
                                </Button>
                                <Button large className={cx('btn')}>
                                    Tiến hành thanh toán
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={cx('empty')}>
                        Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua
                        sắm.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
