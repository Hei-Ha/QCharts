import React, { useState } from 'react';
import { Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUIModeSlice} from "@src/store/reducer/UIMode";
import {switchUiToNight, switchUIToDay}  from '@src/store/reducer/UIMode';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export const BaseMenu = () => {
    const dispatch = useDispatch();
    const UIMode = useSelector(getUIModeSlice);
    const [defaultSelectKeys, setDefaultSelectKeys] = useState<string[]>(['charts']);

    return <div className='h-12 w-full bg-#1D2129 flex items-center justify-between'>
        <div className='h-full w-32 leading-8 ml-7 flex items-center mr-3 cursor-pointer select-none'>
            <Link key='icon' to='/home'>
                <img src="https://img.qcraftai.com/qdata/images/qdata/logo.png" alt="homeIcon"/>
            </Link>
        </div>
        <div className='mr-10'>
            {UIMode === 'day' ?
                <div className='w-6 h-6' onClick={() => { dispatch(switchUiToNight()) }}>
                    <img src="https://img.qcraftai.com/qdata/images/qdata/day.png" alt="day"/>
                </div>
                :
                <div className='w-6 h-6' onClick={() => { dispatch(switchUIToDay()) }}>
                    <img src="https://img.qcraftai.com/qdata/images/qdata/night.png" alt="night"/>
                </div>
            }
        </div>
    </div>

    // return <Menu
    //     mode='horizontal'
    //     theme='dark'
    //     defaultSelectedKeys={defaultSelectKeys}
    //     className='box-border'
    //     onClickMenuItem={(key) => { setDefaultSelectKeys([key]) }}
    // >
    //     <MenuItem key='QCraftIcon' disabled>
    //         <div className='h-8 w-32 leading-8 flex items-center mr-3 cursor-pointer select-none'>
    //             <Link key='icon' to='/home'>
    //                 <img src="https://img.qcraftai.com/qdata/images/qdata/logo.png" alt="homeIcon"/>
    //             </Link>
    //         </div>
    //     </MenuItem>
    //
    //     <Link to='/charts/columnCharts'>
    //         <MenuItem key='charts'>
    //             图表/Chart
    //         </MenuItem>
    //     </Link>
    //
    //     <Link to='/test'>
    //         <MenuItem key='test'>
    //             Link to text
    //         </MenuItem>
    //     </Link>
    //
    //     <MenuItem key=''>
    //         {UIMode === 'day' ?
    //             <div className='w-6 h-6' onClick={() => { dispatch(switchUiToNight()) }}>
    //                 <img src="https://img.qcraftai.com/qdata/images/qdata/day.png" alt="day"/>
    //             </div>
    //             :
    //             <div className='w-6 h-6' onClick={() => { dispatch(switchUIToDay()) }}>
    //                 <img src="https://img.qcraftai.com/qdata/images/qdata/night.png" alt="night"/>
    //             </div>
    //         }
    //     </MenuItem>
    //
    // </Menu>
}