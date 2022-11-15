import React from 'react';
import {SiderMenu} from '@src/views/chartsExample/components/siderMenu';
import {Outlet} from "react-router-dom";


export const ChartsExample = () => {
    return <div className='flex h-[calc(100vh-52px)]'>
        <div className='h-full'>
            <SiderMenu/>
        </div>
        <div className='h-full w-full h-full overflow-hidden bg-#F2F3F8'>
            <Outlet/>
        </div>
    </div>
}