import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import {getUIModeSlice} from "@src/store/reducer/UIMode";

import { Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
const MenuItem = Menu.Item;

export const SlidMenu = () => {
    const [currentSelectKey, setCurrentSelectKey] = useState<string[]>(['columnCharts']);
    const theme = useSelector(getUIModeSlice);


    return <div className='h-full flex flex-col'>
        {/*${theme === 'dark' ? 'bg-#232324' : 'bg-#FFFFFF'}*/}
        <div className={`text-#1D2129 font-medium text-sm border-b border-solid border-#E4E8EF h-12 flex items-center pl-5`}>
            <img className='w-4 h-4' src="https://img.qcraftai.com/qchart/chartListIcon.png" alt="chartListIcon"/>
            <span className='ml-2'>轻舟图表</span>
        </div>
        <Menu
            mode='vertical'
            theme={theme}
            defaultSelectedKeys={currentSelectKey}
            className='w-full box-border grow'
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
    </div>
}