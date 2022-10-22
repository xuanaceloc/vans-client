import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Button.module.scss';

const cx = classNames.bind(style);

const Button = ({
    href,
    to,
    primary,
    outline,
    large,
    leftIcon,
    disable,
    children,
    className,
}) => {
    let Comp = 'button';
    const props = {};
    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }

    let classes = cx('container', {
        primary,
        outline,
        large,
        disable,
        [className]: className,
    });

    return (
        <Comp {...props} className={classes}>
            {leftIcon && (
                <span className={cx('left-icon')}>
                    <FontAwesomeIcon icon={leftIcon} />
                </span>
            )}
            {children}
        </Comp>
    );
};

export default Button;
