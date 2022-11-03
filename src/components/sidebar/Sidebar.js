import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import style from './Sidebar.module.scss';
import Item from './Item';
import config from '../../config';
import FilterBox from './FilterBox';
import SidebarItem from './SidebarItem';

const cx = classNames.bind(style);

const variant = {
    open: {
        x: '0',
    },
    close: {
        x: '100%',
    },
};

const Sidebar = () => {
    const isDesktop = useMediaQuery({ query: '(min-width : 1200px)' });
    const [isShowMenu, setIsShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setIsShowMenu((prev) => !prev);
    };

    useEffect(() => {
        if (isDesktop) {
            setIsShowMenu(true);
        } else {
            setIsShowMenu(false);
        }
    }, [isDesktop]);

    return (
        <>
            <motion.div
                className={cx('container')}
                animate={isShowMenu ? 'open' : 'close'}
                transition={{ duration: 0.25 }}
                variants={variant}
            >
                {!isDesktop && (
                    <div
                        className={cx('filter-menu')}
                        onClick={handleToggleMenu}
                    >
                        {isShowMenu ? (
                            <FontAwesomeIcon icon={faXmark} />
                        ) : (
                            <FontAwesomeIcon icon={faFilter} />
                        )}
                    </div>
                )}
                <div className={cx('content')}>
                    <FilterBox title="Danh mục">
                        <div className={cx('filter-select')}>
                            {config.sidebarFilter.menu.map((item, index) => {
                                return <Item data={item} key={index} />;
                            })}
                        </div>
                    </FilterBox>
                    <SidebarItem
                        title={config.sidebarFilter.color.title}
                        data={config.sidebarFilter.color.content}
                        color
                    />
                    <SidebarItem
                        title={config.sidebarFilter.sale.title}
                        data={config.sidebarFilter.sale.content}
                    />
                    <SidebarItem
                        title={config.sidebarFilter.brand.title}
                        data={config.sidebarFilter.brand.content}
                    />
                    <SidebarItem
                        title={config.sidebarFilter.sort.title}
                        data={config.sidebarFilter.sort.content}
                        sort
                    />
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
