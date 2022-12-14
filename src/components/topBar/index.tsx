import React  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUIModeSlice} from "@src/store/reducer/UIMode";
import {switchUiToDark, switchUIToLight}  from '@src/store/reducer/UIMode';

export const TopBar = () => {
    const dispatch = useDispatch();
    const UIMode = useSelector(getUIModeSlice);

    return <div className='h-50px w-full bg-#1D2129 flex items-center justify-between'>
        <div className='h-full w-32 leading-8 ml-7 flex items-center mr-3 cursor-pointer select-none'>
            <Link key='icon' to='/home'>
                <img src="https://img.qcraftai.com/qdata/images/qdata/logo.png" alt="homeIcon"/>
            </Link>
        </div>
        <div className='mr-10'>
            {UIMode === 'light' ?
                <div className='w-6 h-6' onClick={() => {
                    dispatch(switchUiToDark());
                    document.body.setAttribute('arco-theme', 'dark');
                }}>
                    <img src="https://img.qcraftai.com/qdata/images/qdata/day.png" alt="day"/>
                </div>
                :
                <div className='w-6 h-6' onClick={() => {
                    dispatch(switchUIToLight());
                    document.body.removeAttribute('arco-theme');
                }}>
                    <img src="https://img.qcraftai.com/qdata/images/qdata/night.png" alt="night"/>
                </div>
            }
        </div>
    </div>
}