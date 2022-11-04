import classNames from 'classnames/bind';

import Hero from '../../components/hero';
import Docs from '../../components/docs';
import style from './InfoPage.module.scss';

const cx = classNames.bind(style);

const InfoPage = ({ hero, data }) => {
    return (
        <div>
            <Hero title={hero.title} subTitle={hero.subTitle} />
            <div className={cx('content')}>
                <Docs data={data} />
            </div>
        </div>
    );
};

export default InfoPage;
