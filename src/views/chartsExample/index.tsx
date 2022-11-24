import React from 'react';
import {Outlet} from "react-router-dom";
import { TextSliderMenu } from '@src/menu/index';


export const ChartsExample = () => {
    return <div className='flex h-[calc(100vh-50px)]'>
        <div className='h-full shrink-0 w-52 border-box'>
            <TextSliderMenu />
        </div>
        <div className='h-full w-auto flex-auto overflow-hidden border-box'>
            <Outlet/>
        </div>
    </div>
}