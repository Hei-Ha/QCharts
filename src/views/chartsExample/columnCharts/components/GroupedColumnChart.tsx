import React, { useEffect, useRef, useState } from 'react';
import BaseColumnMd from '../markdown/BaseColumnChart.md';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const GroupedColumnChart = () => {
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
        // TODO：这里title不显示？？
        title: {
            text: '分组柱状图',
        },
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
                data: [66, 93, 33, 59, 26, 78, 47],
                type: 'bar',
                barGap: 0,
                barMinWidth: 40,
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
    }, [])

    const initChart = () => {
        const chartDom = document.getElementById('GroupedColumnChart');
        currentChartInstance.current = echarts.init(chartDom);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div className='flex w-full h-full pb-5 bg-#FFFFFF'>
            {/* <div className='header h-5 bg-#CCCCCC'>分组柱状图</div> */}
            <div
                id='GroupedColumnChart'
                className='w-full h-calc[100%-40px]'
            />
        </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}