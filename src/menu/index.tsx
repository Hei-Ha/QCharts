import React, { useState} from 'react';
import { Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
const MenuItem = Menu.Item;

export const TextSliderMenu = () => {
    const [currentSelectKey, setCurrentSelectKey] = useState<string[]>(['columnCharts']);

    return <Menu
        mode='vertical'
        theme='dark'
        defaultSelectedKeys={currentSelectKey}
        className='w-full h-full box-border'
        onClickMenuItem={(key) => { setCurrentSelectKey([key]) }}
    >
        <Link to='/charts/columnCharts'>
            <MenuItem key='columnCharts'>
                柱状图
            </MenuItem>
        </Link>

        <Link to='/charts/lineCharts'>
            <MenuItem key='lineCharts'>
                折线图
            </MenuItem>
        </Link>
    </Menu>
}