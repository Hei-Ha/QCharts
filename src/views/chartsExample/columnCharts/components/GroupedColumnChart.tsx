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

export const GroupedColumnChart = () => {
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
                name: 'A类别',
                data: [40, 20, 25, 55, 33, 89, 97],
                type: 'bar',
                barGap: 0,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#468DFF'
                    }
                }
            },
            {
                name: 'B类别',
                data: [66, 93, 33, 59, 26, 78, 47],
                type: 'bar',
                barGap: 0,
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
        const chartDom = document.getElementById('GroupedColumnChart');
        currentChartInstance.current = echarts.init(chartDom, theme);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div
            id='GroupedColumnChart'
            className='w-full h-full'
        />
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'分组柱状图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}