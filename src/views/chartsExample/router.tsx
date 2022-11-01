import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import {ColumnChartsContent} from './columnCharts/ColumnChartsContent';
import {ChartsExample} from "@src/views/chartsExample/chartsExample";
import {LineCharts} from "@src/views/chartsExample/lineCharts/LineCharts";


export const subRoute = () => {
    return <Route path='/charts' element={<ChartsExample/>}>
        <Route path='columnCharts' element={<ColumnChartsContent/>}/>
        <Route path='lineCharts' element={<LineCharts/>}/>
    </Route>
}
