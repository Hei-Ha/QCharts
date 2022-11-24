import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import {getUIModeSlice} from "@src/store/reducer/UIMode";

import { Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
const MenuItem = Menu.Item;

export const SlidMenu = () => {
    const [currentSelectKey, setCurrentSelectKey] = useState<string[]>(['columnCharts']);
    const theme = useSelector(getUIModeSlice);


    return <div>
        <div className='text-#FFFFFF border-b border-solid border-#E4E8EF h-12'>
            轻舟图表
        </div>
        <Menu
            mode='vertical'
            theme={theme}
            defaultSelectedKeys={currentSelectKey}
            className='w-full h-full box-border'
            onClickMenuItem={(key) => { setCurrentSelectKey([key]) }}
        >
            {/*<MenuItem key='QCraftChart' disabled className='text-#FFFFFF border-b border-solid border-#E4E8EF'>*/}
            {/*    轻舟图表*/}
            {/*</MenuItem>*/}
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
    </div>
}