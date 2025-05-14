import React, { useState } from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',

        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',

        },

        {
            label: 'Test Api',
            key: 'SubMenu',

            children: [
                {
                    label: 'Dang nhap',
                    key: 'login',
                },
                {
                    label: 'Dang xuat',
                    key: 'logout',
                },
            ],
        },

    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;