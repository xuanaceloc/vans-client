import classNames from 'classnames/bind';

import style from './Docs.module.scss';

const cx = classNames.bind(style);

const Docs = ({ data = [] }) => {
    return (
        <div className={cx('container')}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('item')}>
                        {!!data.src && <img src={data.src} alt="" />}
                        {!!data.subTitle && <span>{data.subTitle}</span>}
                        {!!data.content && (
                            <p className={cx({ center: data.center })}>
                                {data.content}
                            </p>
                        )}
                        {!!data.title && <h4>{data.title}</h4>}
                    </div>
                );
            })}
        </div>
    );
};

export default Docs;
