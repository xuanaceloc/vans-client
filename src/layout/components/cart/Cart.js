import classNames from 'classnames/bind';

import style from './Cart.module.scss';
import CartItem from './CartItem';
import Button from '../../../components/button';

const cx = classNames.bind(style);

const Cart = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <CartItem
                    name="VANS VAULT OG CLASSIC SLIP ON CHECKERBOARD/OFF WHITE"
                    price="2.600.000"
                    src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/200206140_976469796440596_1130803011116164899_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1_3fhaX2OyIAX8r-Qt7&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-pIAL3oxUGDd5hqGmHWF6ePFU-7HA0axUeAY1_lcv4Vg&oe=6373F606"
                    to="/"
                />
            </div>

            <div className={cx('bottom')}>
                <div className={cx('total')}>
                    Tổng cộng :{' '}
                    <span className={cx('total-price')}>6.165.000₫</span>
                </div>
                <div className={cx('btn-group')}>
                    <Button primary large to="/">
                        Giỏ hàng
                    </Button>
                    <Button primary large to="/">
                        Thanh toán
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
