import classNames from 'classnames/bind';

import Hero from '../../components/hero';
import DetailRight from './DetailRight';
import ThumbProduct from './ThumbProduct';
import style from './ProductDetail.module.scss';

const cx = classNames.bind(style);

const ProductDetail = () => {
    return (
        <div>
            <Hero />

            <div className={cx('content')}>
                <ThumbProduct />

                <DetailRight />
            </div>
        </div>
    );
};

export default ProductDetail;
