import classNames from 'classnames/bind';
import { useState } from 'react';

import style from './Sidebar.module.scss';
import Item from './Item';
import config from '../../config';
import FilterBox from './FilterBox';

const cx = classNames.bind(style);

const Sidebar = () => {
    const [filter, setFilter] = useState({
        color: '',
        sale: [],
    });

    const handleSelectColor = (e) => {
        const data = e.target.dataset.color;
        setFilter((prev) => {
            return { ...prev, color: data };
        });
    };

    const handleSelectSale = (e) => {
        const data = e.target.dataset.sale;
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <FilterBox title="Danh mục">
                    <div className={cx('filter-select')}>
                        {config.sidebarFilter.menu.map((item, index) => {
                            return <Item data={item} key={index} />;
                        })}
                    </div>
                </FilterBox>
                <FilterBox title="Màu sắc">
                    <div className={cx('filter-select-color', 'filter-select')}>
                        {config.sidebarFilter.color.map((color, index) => {
                            return (
                                <div
                                    onClick={handleSelectColor}
                                    key={index}
                                    data-color={color}
                                    className={cx('color-select', `${color}`)}
                                ></div>
                            );
                        })}
                    </div>
                </FilterBox>
                <FilterBox title="SALE OFF">
                    <div className={cx('filter-select')}>
                        {config.sidebarFilter.sale.map((sale, i) => {
                            let isActive = false;
                            if (filter.sale.length > 0) {
                                isActive = filter.sale.some(
                                    (filterSale) => sale === filterSale,
                                );
                            }

                            return (
                                <div
                                    key={i}
                                    className={cx('filter-select-option', {
                                        active: isActive,
                                    })}
                                >
                                    <span
                                        data-sale={sale}
                                        onClick={handleSelectSale}
                                    ></span>
                                    <p>sale {sale}</p>
                                </div>
                            );
                        })}
                    </div>
                </FilterBox>
            </div>
        </div>
    );
};

export default Sidebar;
