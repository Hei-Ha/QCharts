import React, { useEffect, useRef } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const BaseColumnChart = () => {
    const theme = useSelector(getUIModeSlice);
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
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
        title={'基础柱状图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}