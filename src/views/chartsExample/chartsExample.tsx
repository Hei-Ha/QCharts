import React from 'react';
import {SiderMenu} from '@src/views/chartsExample/components/siderMenu';
import {Outlet} from "react-router-dom";


export const ChartsExample = () => {
    return <div className='flex h-full'>
        <div className='h-[calc(100vh-52px)]'>
            <SiderMenu/>
        </div>
        <div className='p-5 h-full w-full overflow-hidden bg-#F2F3F8'>
            <Outlet/>
        </div>
    </div>
}