import React, { useEffect, useRef } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const DualAxisAndDualColumnChart = () => {
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
                },
                axisTick: {
                    alignWithLabel: true //控制刻度在中间显示
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
                name: 'A类别',
                type: 'bar',
                data: [70, 42, 55, 23, 38, 79, 90],
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
                type: 'bar',
                data: [200, 465, 200, 688, 966, 400, 189],
                yAxisIndex: 1,
                barGap: 0,
                barMinWidth: 20,
                barMaxWidth: 40,
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
    }, [])

    const initChart = () => {
        const chartDom = document.getElementById('DualAxisAndDualColumnChart');
        currentChartInstance.current = echarts.init(chartDom);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div className='flex flex-col w-full h-full pb-5 bg-#FFFFFF'>
            <div className='header h-5 w-full'>双轴图-双柱图</div>
            <div
                id='DualAxisAndDualColumnChart'
                className='w-full h-400px'
            />
        </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'双轴图-双柱图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}