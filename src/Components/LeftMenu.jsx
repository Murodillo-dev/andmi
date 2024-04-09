import React, { useState } from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('IMT K-88-21', '1', <PieChartOutlined />,[
        getItem('TJCHAB k-99-22'),
        getItem('Mexatronika k-77-22')
    ]),
    getItem('Dars jadvali', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
    ]),

];
const LeftMenu = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 0,
                    position: 'absolute',
                    zIndex: 2,

                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>


            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{
                    fontSize:20,
                    paddingTop: `${30}px`,
                    position: 'relative',
                    height: `${100}vh`
                }}
            >

            </Menu>
        </div>
    );
};
export default LeftMenu;