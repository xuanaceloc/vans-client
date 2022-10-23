import classNames from 'classnames/bind';

import style from './Docs.module.scss';

const cx = classNames.bind(style);

const data = [
    {
        src: 'https://bizweb.dktcdn.net/100/140/774/files/tui-vans-m-ward-cross-body-pack-red-check-vn0a2zxxrnd-jpg-1.jpg?v=1659259794259',
    },
    {
        content: '',
    },
];

const Docs = () => {
    return (
        <div>
            {data.map((data, index) => {
                return (
                    <p key={index}>
                        {data.src && <img src={data.src} alt="" />}
                        {data.content}
                    </p>
                );
            })}
        </div>
    );
};

export default Docs;
