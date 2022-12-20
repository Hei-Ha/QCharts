import React, { useEffect, useRef, useState } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const HistogramChart = () => {
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
                barGap: 0,
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

    const initChart = () => {
        const chartDom = document.getElementById('HistogramChart');
        currentChartInstance.current = echarts.init(chartDom);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div className='flex flex-col w-full h-full pb-5 bg-#FFFFFF'>
            <div className='header h-5 w-full'>直方图</div>
            <div
                id='HistogramChart'
                className='w-full h-400px'
            />
        </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'直方图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}