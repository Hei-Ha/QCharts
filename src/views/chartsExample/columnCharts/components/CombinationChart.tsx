import React, { useEffect, useRef, useState } from 'react';
import { DocumentLayout } from '@src/components/documentLayout';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent, DatasetComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent, DatasetComponent]);

export const CombinationChart = () => {
    const theme = useSelector(getUIModeSlice);
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
        legend: {
            show: true,
            bottom: 10,
            icon: 'circle'
        },
        dataset: {
            source: [
                ['年份', '2012', '2013', '2014', '2015'],
                ['A类别', 41, 30, 65, 53],
                ['B类别', 86, 47, 19, 5],
                ['C类别', 24, 44, 67, 20]
            ]
        },
        xAxis: [
            { type: 'category', gridIndex: 0 },
            { type: 'category', gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: '55%' }, { top: '55%' }],
        series: [
            {
                type: 'bar',
                seriesLayoutBy: 'row',
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#468DFF'
                    }
                }
            },
            {
                type: 'bar',
                seriesLayoutBy: 'row',
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#86DF6C'
                    }
                }
            },
            {
                type: 'bar',
                seriesLayoutBy: 'row',
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#846BCE'
                    }
                }
            },
            {
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#FEC745'
                    }
                }
            },
            {
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#E55D8F'
                    }
                }
            },
            {
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#5FD0F6'
                    }
                }
            },
            {
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barMinWidth: 20,
                barMaxWidth: 40,
                itemStyle: {
                    normal: {
                        color: '#EE5C3D'
                    }
                }
            },
        ]
    };

    useEffect(() => {
        initChart();
    }, [theme])

    const initChart = () => {
        const chartDom = document.getElementById('CombinationChart');
        currentChartInstance.current = echarts.init(chartDom, theme);
        configOption && currentChartInstance.current && currentChartInstance.current.setOption(configOption);
    }

    const chartDom: React.FC = () => {
        return <div
            id='CombinationChart'
            className='w-full h-full'
        />
        // return <div className='flex flex-col w-full h-full pb-5 bg-#FFFFFF'>
        //     <div className='header h-5 w-full'>组合图</div>
        //     <div
        //         id='CombinationChart'
        //         className='w-full h-400px'
        //     />
        // </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        title={'组合图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}