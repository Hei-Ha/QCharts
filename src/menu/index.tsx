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
        <div
            style={{borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)'}}
            className={
                `${theme === 'dark' ? 'bg-#232324 text-#FFFFFF' : 'bg-#FFFFFF text-#1D2129'} 
                font-medium text-sm h-12 flex items-center pl-5`}
        >
            <img className='w-4 h-4' src="https://img.qcraftai.com/qchart/chartListIcon.png" alt="chartListIcon"/>
            <span className='ml-2'>图表类型</span>
        </div>
        <Menu
            mode='vertical'
            theme={theme}
            defaultSelectedKeys={currentSelectKey}
            className='w-full box-border grow'
            style={{borderRight: '1px solid var(--color-border)'}}
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

            <Link to='/charts/areaCharts'>
                <MenuItem key='areaCharts'>
                    面积图
                </MenuItem>
            </Link>

            <Link to='/charts/scatterCharts'>
                <MenuItem key='scatterCharts'>
                    散点图
                </MenuItem>
            </Link>
        </Menu>
    </div>
}