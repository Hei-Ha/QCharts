import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import {Index} from './columnCharts';
import {ChartsExample} from "@src/views/chartsExample/chartsExample";
import {LineCharts} from "@src/views/chartsExample/lineCharts/LineCharts";


import { BaseColumnChart } from '@src/views/chartsExample/columnCharts/components/BaseColumnChart';


export const subRoute = () => {
    return <Route path='/charts' element={<ChartsExample/>}>
        <Route path='columnCharts' element={<Index/>} />
        <Route path='columnCharts/base' element={<BaseColumnChart />} />

        <Route path='lineCharts' element={<LineCharts/>}/>
    </Route>
}
