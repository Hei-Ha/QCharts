import React, { useEffect, useRef } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const PercentStackedColumnChart = () => {
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    // let data = {
    //     arrA: [20, 40, 80, 140, 30, 60, 80],
    //     arrAPercent: [10, 20, 40, 70, 15, 30, 40],
    //     arrB: [100, 100, 80, 20, 40, 70, 40],
    //     arrBPercent: [50, 50, 40, 10, 20, 35, 20],
    //     arrC: [80, 60, 40, 40, 130, 70, 80],
    //     arrCPercent: [40, 30, 20, 20, 65, 35, 40],
    // }
    let configOption = {
        legend: {
            show: true,
            bottom: 10,
            icon: 'circle',
            data: ['A类别', 'B类别', 'C类别'],
        },
        xAxis: {
            type: 'category',
            data: ['2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00'],
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
                data: [10, 30, 40, 20, 15, 30, 40],
                type: 'bar',
                stack: 'total',
                barGap: 0,
                barMinWidth: 40,
                barMaxWidth: 40,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: (v: any) => {
                            return v.value + '%';
                        }
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#468DFF'
                    }
                }
            },
            {
                name: 'B类别',
                data: [50, 50, 40, 70, 20, 35, 20],
                type: 'bar',
                stack: 'total',
                barGap: 0,
                barMinWidth: 40,
                barMaxWidth: 40,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: (v: any) => {
                            return v.value + '%';
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#86DF6C'
                    }
                }
            },
            {
                name: 'C类别',
                data: [40, 20, 20, 10, 65, 35, 40],
                type: 'bar',
                stack: 'total',
                barGap: 0,
                barMinWidth: 40,
                barMaxWidth: 40,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: (v: any) => {
                            return v.value + '%';
                        }
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#846BCE'
                    }
                }
            },
        ]
    };

    useEffect(() => {
        initChart();
    }, [])

    const initChart = () => {
        const chartDom = document.getElementById('PercentStackedColumnChart');
        currentChartInstance.current = echarts.init(chartDom);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div className='flex flex-col w-full h-full pb-5 bg-#FFFFFF'>
            <div className='header h-5 w-full'>百分比堆叠柱状图</div>
            <div
                id='PercentStackedColumnChart'
                className='w-full h-400px'
            />
        </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'百分比堆叠柱状图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}