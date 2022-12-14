import React from 'react';
import {
    Route,
} from 'react-router-dom';

import { ColumnCharts } from './columnCharts';
import { ChartsExample } from "@src/views/chartsExample/index";
import { BaseColumnChart } from '@src/views/chartsExample/columnCharts/components/BaseColumnChart';
import { GroupedColumnChart } from '@src/views/chartsExample/columnCharts/components/GroupedColumnChart';
import { StackedColumnChart } from '@src/views/chartsExample/columnCharts/components/StackedColumnChart';
import { PercentStackedColumnChart } from '@src/views/chartsExample/columnCharts/components/PercentStackedColumnChart';
import { DualAxisColumnAndLineChart } from '@src/views/chartsExample/columnCharts/components/DualAxisColumnAndLineChart';
import { DualAxisAndDualColumnChart } from '@src/views/chartsExample/columnCharts/components/DualAxisAndDualColumnChart';
import { WaterfallChart } from '@src/views/chartsExample/columnCharts/components/WaterfallChart';
import { CombinationChart } from '@src/views/chartsExample/columnCharts/components/CombinationChart';
import { HistogramChart } from '@src/views/chartsExample/columnCharts/components/HistogramChart';

import { LineCharts } from "@src/views/chartsExample/lineCharts";
import { BaseLineChart } from '@src/views/chartsExample/lineCharts/components/BaseLineChart';
import { DoubleLineChart } from '@src/views/chartsExample/lineCharts/components/DoubleLineChart';
import { StepLineChart } from '@src/views/chartsExample/lineCharts/components/StepLineChart';
import { BiaxialLineChart } from '@src/views/chartsExample/lineCharts/components/BiaxialLineChart';

import { AreaCharts } from "@src/views/chartsExample/AreaCharts";
import { BaseAreaChart } from '@src/views/chartsExample/areaCharts/components/BaseAreaChart';
import { StackedAreaChart } from '@src/views/chartsExample/areaCharts/components/StackedAreaChart';
import { PercentageAreaChart } from '@src/views/chartsExample/areaCharts/components/PercentageAreaChart';
import { DualAxisAreaChart } from '@src/views/chartsExample/areaCharts/components/DualAxisAreaChart';

import { ScatterCharts } from "@src/views/chartsExample/ScatterCharts";
import { BaseScatterChart } from "@src/views/chartsExample/scatterCharts/components/BaseScatterChart";


export const subRoute = () => {
    return <Route path='/charts' element={<ChartsExample/>}>
        <Route path='columnCharts' element={<ColumnCharts/>} />
        <Route path='columnCharts/base' element={<BaseColumnChart />} />
        <Route path='columnCharts/grouped' element={<GroupedColumnChart />} />
        <Route path='columnCharts/stacked' element={<StackedColumnChart />} />
        <Route path='columnCharts/percentStacked' element={<PercentStackedColumnChart />} />
        <Route path='columnCharts/dualAxisColumnAndLine' element={<DualAxisColumnAndLineChart />} />
        <Route path='columnCharts/dualAxisAndDualColumn' element={<DualAxisAndDualColumnChart />} />
        <Route path='columnCharts/waterfall' element={<WaterfallChart />} />
        <Route path='columnCharts/combination' element={<CombinationChart />} />
        <Route path='columnCharts/histogram' element={<HistogramChart />} />

        <Route path='lineCharts' element={<LineCharts />} />
        <Route path='lineCharts/base' element={<BaseLineChart />} />
        <Route path='lineCharts/double' element={<DoubleLineChart />} />
        <Route path='lineCharts/step' element={<StepLineChart />} />
        <Route path='lineCharts/biaxial' element={<BiaxialLineChart />} />

        <Route path='areaCharts' element={<AreaCharts />} />
        <Route path='areaCharts/base' element={<BaseAreaChart />} />
        <Route path='areaCharts/stacked' element={<StackedAreaChart />} />
        <Route path='areaCharts/percentage' element={<PercentageAreaChart />} />
        <Route path='areaCharts/dualAxis' element={<DualAxisAreaChart />} />

        <Route path='scatterCharts' element={<ScatterCharts />} />
        <Route path='scatterCharts/base' element={<BaseScatterChart />} />
    </Route>
}
