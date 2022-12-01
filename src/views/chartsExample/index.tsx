import React from 'react';
import {Outlet} from "react-router-dom";
import { SlidMenu } from '@src/menu';
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";


export const ChartsExample = () => {
    const theme = useSelector(getUIModeSlice);

    return <div className='flex h-[calc(100vh-50px)]'>
        <div className='h-full shrink-0 w-52 border-box'>
            <SlidMenu />
        </div>
        {/*${theme === 'dark' ? 'bg-#17171a' : 'bg-#F2F3F8'}*/}
        <div
            className={`h-full w-auto flex-auto border-box overflow-scroll`}
            style={{ backgroundColor: 'var(--color-bg-1)'}}
        >
            <Outlet/>
        </div>
    </div>
}

//