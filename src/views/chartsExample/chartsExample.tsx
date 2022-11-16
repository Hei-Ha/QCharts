import React from 'react';
import {SiderMenu} from '@src/views/chartsExample/components/siderMenu';
import {Outlet} from "react-router-dom";


export const ChartsExample = () => {
    return <div className='flex h-[calc(100vh-52px)]'>
        <div className='h-full w-52 border-box'>
            <SiderMenu />
        </div>
        <div className='h-full w-auto overflow-hidden border-box'>
            <Outlet/>
        </div>
    </div>
}