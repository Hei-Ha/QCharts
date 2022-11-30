import React from 'react';
import {Outlet} from "react-router-dom";
import { SlidMenu } from '@src/menu';


export const ChartsExample = () => {
    return <div className='flex h-[calc(100vh-50px)]'>
        <div className='h-full shrink-0 w-52 border-box'>
            <SlidMenu />
        </div>
        <div className='h-full w-auto flex-auto border-box bg-#F2F3F8 overflow-scroll'>
            <Outlet/>
        </div>
    </div>
}