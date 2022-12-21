import React, { useEffect, useRef } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";

echarts.use([GridComponent, BarChart, LineChart, CanvasRenderer, LegendComponent]);

export const DualAxisColumnAndLineChart = () => {
    const theme = useSelector(getUIModeSlice);
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
        legend: {
            show: true,
            bottom: 10,
            icon: 'circle',
            data: ['A类别', 'B类别']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'A类别',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            {
                type: 'value',
                name: 'B类别',
                min: 0,
                max: 1000,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name: 'A类别',
                data: [70, 42, 55, 23, 38, 79, 90],
                type: 'bar',
                barMinWidth: 40,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#468DFF'
                    }
                }
            },
            {
                name: 'B类别',
                type: 'line',
                yAxisIndex: 1,
                data: [22, 465, 200, 688, 966, 400, 189],
                itemStyle: {
                    normal: {
                        color: '#86DF6C'
                    }
                }
            },
        ]
    };

    useEffect(() => {
        initChart();
    }, [theme])

    const initChart = () => {
        const chartDom = document.getElementById('DualAxisColumnAndLineChart');
        currentChartInstance.current = echarts.init(chartDom, theme);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return  <div
            id='DualAxisColumnAndLineChart'
            className='w-full h-full'
        />
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'双轴图-柱状图+线'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}