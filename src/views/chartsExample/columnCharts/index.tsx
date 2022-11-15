import React from 'react';
import { Grid } from '@arco-design/web-react';
import {Link} from "react-router-dom";

import { BaseColumnChart } from '@src/views/chartsExample/columnCharts/components/BaseColumnChart';

const Row = Grid.Row;
const Col = Grid.Col;

export const Index = () => {
    return <div>
        <Link to='/charts/columnCharts/base'>
            基础柱状图
        </Link>
    </div>
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // return <div className='flex flex-wrap justify-between w-calc[100%-300px]'>
    //     <div>
    //
    //     </div>
    //     {/*{arr.map((item) => {*/}
    //     {/*    return <div style={{ width: '700px', height: '50px' }} className='bg-#CCCCCC border border-solid border-#CCCCCC mb-2'>{item}</div>*/}
    //     {/*})}*/}
    // </div>
}