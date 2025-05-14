
import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { createUserApi } from '../util/api';

const Register = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const { name, email, password } = values;

        const res = await createUserApi(name, email, password);
        if (res) {
            notification.success({
                message: "create user",
                description: "success"
            });
            navigate('/login');
        } else {
            notification.error({
                message: "create user",
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
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Register;