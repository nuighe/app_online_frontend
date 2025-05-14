
import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../util/api';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, password } = values;

        const res = await loginApi(email, password);


        if (res) {
            notification.success({
                message: "login user",
                description: "success"
            });
            navigate("/");
        } else {
            notification.error({
                message: "login user",
                description: "error"
            });
        }

    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}

            onFinish={onFinish}

            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    login
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;