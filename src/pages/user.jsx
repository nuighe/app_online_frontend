import { notification, Table } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";

const UserPage = () => {

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if (!res?.message) {
                setDataSource(res);
            } else {
                notification.error({
                    message: "unautherrized",
                    description: res.message
                })
            }
        }
        fetchUser();
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',

        },
    ];


    return (
        <dic>
            <Table dataSource={dataSource} columns={columns}
                rowKey={"id"}
            />;
        </dic>
    )
}
export default UserPage;