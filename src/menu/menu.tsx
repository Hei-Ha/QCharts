import React, { useState } from 'react';
import { Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export const BaseMenu = () => {
    const [defaultSelectKeys, setDefaultSelectKeys] = useState<string[]>(['charts']);
    return <Menu
        mode='horizontal'
        theme='dark'
        defaultSelectedKeys={defaultSelectKeys}
        className='box-border'
        onClickMenuItem={(key) => { setDefaultSelectKeys([key]) }}
    >
        <MenuItem key='icon' disabled>
            <div className='h-8 w-32 leading-8 flex items-center mr-3 cursor-pointer select-none'>
                <Link key='icon' to='/home'>
                    <img src="https://img.qcraftai.com/qdata/images/qdata/logo.png" alt="homeIcon"/>
                </Link>
            </div>
        </MenuItem>

        <Link to='/charts/columnCharts'>
            <MenuItem key='charts'>
                图表/Chart
            </MenuItem>
        </Link>

        <Link to='/test'>
            <MenuItem key='test'>
                Link to text
            </MenuItem>
        </Link>



    </Menu>

}