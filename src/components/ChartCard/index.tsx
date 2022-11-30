import React from 'react';
import ChartCardStyle from './index.module.less';
import {Button} from '@arco-design/web-react';
import {Link} from "react-router-dom";

interface PropsValue {
    title: string;
    imgUrl: string;
    path: string;
}

export const ChartCard = (props: PropsValue) => {
    return <div className={`${ChartCardStyle.chartCard} h-full w-full px-4 pt-5 relative z-0`}>
        <h2 className='font-medium'>{props.title}</h2>
        <div className='mt-4'>
            <img src={props.imgUrl} alt={`${props.imgUrl}`} />
        </div>
        <div className='operateLayer'>
            <Button type='primary'>
                <Link to={props.path}>
                    查看详情
                </Link>
            </Button>
        </div>

    </div>
}