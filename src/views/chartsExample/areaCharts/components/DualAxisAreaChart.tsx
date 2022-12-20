import React, { useEffect, useRef } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';
import { useSelector } from "react-redux";
import { getUIModeSlice } from "@src/store/reducer/UIMode";

echarts.use([GridComponent, LineChart, CanvasRenderer, LegendComponent]);

export const DualAxisAreaChart = () => {
    const theme = useSelector(getUIModeSlice);
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
        legend: {
            show: true,
            bottom: 10,
            icon: 'circle',
            data: ['A类别', 'B类别']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: [
            {
                type: 'value',
                name: 'A类别',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value}%'
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
                data: [24, 28, 38, 12, 20, 40, 30],
                type: 'line',
                name: 'A类别',
                itemStyle: {
                    normal: {
                        color: '#468DFF',
                        areaStyle: {
                            color: 'rgba(70,141,255,0.2)'
                        }
                    }
                }
            },
            {
                name: 'B类别',
                type: 'line',
                yAxisIndex: 1,
                data: [500, 550, 600, 400, 500, 450, 600],
                itemStyle: {
                    normal: {
                        color: '#86DF6C',
                        areaStyle: {
                            color: 'rgba(134,223,108,0.2)',
                            origin: 'auto',
                        }
                    }
                }
            },
        ]
    };

    useEffect(() => {
        initChart();
    }, [])

    useEffect(() => {
        initChart();
    }, [theme])

    const initChart = () => {
        const chartDom = document.getElementById('BaseColumnChart');
        currentChartInstance.current = echarts.init(chartDom, theme);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div
            id='BaseColumnChart'
            className='w-full h-full'
        />
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'双轴面积图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}