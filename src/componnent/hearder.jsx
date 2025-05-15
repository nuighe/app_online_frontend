import React, { useContext, useState } from 'react';

import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const Header = () => {

    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',

        },
        // ...(auth.isAuthenticate ? [{
        //     label: <Link to={"/user"}>Users</Link>,
        //     key: 'user',

        // }] : []),
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',

        },

        {
            label: `welcome ${auth?.user?.email}`,
            key: 'SubMenu',

            children: [
                {
                    label: <Link to={"/login"}>Dang Nhap</Link>,
                    key: 'login',
                },
                {
                    label: <span onClick={() => {
                        localStorage.clear("access_token"); // xoá token
                        navigate("/")
                    }}>Dang Xuat</span>,
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