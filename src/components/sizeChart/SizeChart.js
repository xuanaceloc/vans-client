import classNames from 'classnames/bind';

import style from './SizeChart.module.scss';
import images from '../../assets';

const cx = classNames.bind(style);

const SizeChart = () => {
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>Các bước kiểm tra size giày VANS:</h4>
            <div className={cx('content')}>
                <p>
                    <span>Bước 1 :</span> Chuẩn bị một tờ giấy và đặt chân lên
                    tờ giấy đó.
                </p>
                <p>
                    <span>Bước 1 :</span> Vẽ gót chân và mũi chân lên tờ giấy.
                </p>
                <p>
                    <span>Bước 1 :</span> Kẻ 1 đường từ đầu gót chân đến đầu
                    ngón dài nhất như hình (lưu ý: sử dụng ngón chân dài nhất vì
                    một số người dài ngón cái, một số người dài ngón giữa
                    v.v...)
                </p>
                <p>
                    <span>Bước 1 :</span> Đo chiều dài đường thẳng vừa kẻ và so
                    sánh với mục Cm của bảng size.
                </p>
                <p>
                    <img src={images.sizeChart} alt="" />
                </p>
                <p>
                    <span>Lưu ý:</span> Mỗi hãng thể thao có mỗi bảng size khác
                    nhau, không áp dụng size của hãng khác vào hãng VANS.
                </p>
                <p>
                    Những sản phẩm thuộc VANSVN phân phối sẽ có những yếu tố sau
                    đây:
                </p>
                <p>
                    <img src={images.sizeChart1} alt="" />
                </p>
                <p>
                    Những sản phẩm không có phiếu bảo hành, tag độc quyền v.v...
                    chúng tôi sẽ không chịu trách nhiệm cho sản phẩm đó
                </p>
            </div>
        </div>
    );
};

export default SizeChart;
