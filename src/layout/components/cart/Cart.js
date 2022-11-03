import classNames from 'classnames/bind';
import { useContext, useState, useEffect } from 'react';

import style from './Cart.module.scss';
import CartItem from './CartItem';
import Button from '../../../components/button';
import { CartContext } from '../../../context/cart';
import config from '../../../config';

const cx = classNames.bind(style);

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        setCartList(cart.cartList);
    }, [cart.cartList]);

    return (
        <div className={cx('wrapper')}>
            {cartList.length > 0 ? (
                <>
                    <div className={cx('content')}>
                        {cartList.map((item, index) => {
                            return (
                                <CartItem
                                    key={index}
                                    name={item.product.name}
                                    price={item.product.price.newPrice}
                                    src={item.product.img[0]}
                                    quality={item.quality}
                                    size={item.size}
                                    productId={item.product.productId}
                                />
                            );
                        })}
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('total')}>
                            Tổng cộng :{' '}
                            <span className={cx('total-price')}>
                                {cart.total}₫
                            </span>
                        </div>
                        <div className={cx('btn-group')}>
                            <Button
                                primary
                                large
                                to={config.publicRoutes.cartPage}
                            >
                                Giỏ hàng
                            </Button>
                            <Button primary large to="/">
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div className={cx('empty')}>
                    <p>Không có sản phẩm nào</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
