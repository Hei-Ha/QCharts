import React from 'react';
import {
    Route,
} from 'react-router-dom';

import { ColumnCharts } from './columnCharts';
import { ChartsExample } from "@src/views/chartsExample/index";
import {LineCharts} from "@src/views/chartsExample/lineCharts/LineCharts";


import { BaseColumnChart } from '@src/views/chartsExample/columnCharts/components/BaseColumnChart';


export const subRoute = () => {
    return <Route path='/charts' element={<ChartsExample/>}>
        <Route path='columnCharts' element={<ColumnCharts/>} />
        <Route path='columnCharts/base' element={<BaseColumnChart />} />

        <Route path='lineCharts' element={<LineCharts/>}/>
    </Route>
}
