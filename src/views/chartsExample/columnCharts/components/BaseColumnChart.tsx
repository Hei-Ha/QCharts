import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent} from 'echarts/components';
import {BarChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

import BaseColumnMd from '../markdown/BaseColumnChart.md'
import {DocumentLayout} from '@src/components/documentLayout';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);
type EChartsCoreOption = echarts.EChartsCoreOption;


export const BaseColumnChart = () => {
    const currentChartInstance = useRef<echarts.EChartsType>(null);

    useEffect(() => {
        initChart();
    }, [])

    const initChart = () => {
        const chartDom = document.getElementById('BaseColumnChart');
        currentChartInstance.current = echarts.init(chartDom);
        let option: EChartsCoreOption;
        option = {
            legend: {
                show: true,
                bottom: 10,
                icon: 'circle'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true,
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Mon',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    barMinWidth: 40,
                    barMaxWidth: 40,
                    itemStyle: {
                        normal: {
                            color: '#468DFF'
                        }
                    }
                }
            ]
        };
        option && currentChartInstance.current && currentChartInstance.current.setOption(option);
    }

    const chartDom: React.FC = () => {
        return <div
            id='BaseColumnChart'
            className='w-full h-full'
        />
    }

    return <DocumentLayout
        mdContent={BaseColumnMd}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
    />
}