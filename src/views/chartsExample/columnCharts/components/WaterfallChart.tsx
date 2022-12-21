import React, { useEffect, useRef, useState } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const WaterfallChart = () => {
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '总和'],
            axisTick: {
                alignWithLabel: true, //控制刻度在中间显示
            }
        },
        yAxis: {
            axisLabel: {
                formatter: '{value}%',
            }
        },
        series: [
            {
                name: '',
                data: [0, 15, 20, 36, 56, 64, 73, 0],
                type: 'bar',
                stack: 'Total',
                silent: true,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
            },
            {
                name: 'A类别',
                type: 'bar',
                stack: 'Total',
                barMinWidth: 20,
                barMaxWidth: 40,
                // label: {
                //     show: true,
                //     position: 'top'
                // },
                data: [15, 5, 16, 20, 8, 9, 27, '-'],
                itemStyle: {
                    normal: {
                        color: '#468DFF'
                    }
                }
            },
            {
                name: '总和',
                data: ['-', '-', '-', '-', '-', '-', '-', 100],
                type: 'bar',
                stack: 'Total',
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#86DF6C'
                    }
                }
            }
        ]
    };

    useEffect(() => {
        initChart();
    }, [theme])

    const initChart = () => {
        const chartDom = document.getElementById('WaterfallChart');
        currentChartInstance.current = echarts.init(chartDom, theme);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div
            id='WaterfallChart'
            className='w-full h-full'
        />
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'瀑布图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}