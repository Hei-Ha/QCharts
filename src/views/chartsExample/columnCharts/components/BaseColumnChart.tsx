import React, {useEffect, useRef, useState} from 'react';
import { Card } from '@arco-design/web-react';
import BaseColumnMd from '../markdown/BaseColumnChart.md';
import {DocumentLayout} from '@src/components/documentLayout';

import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent} from 'echarts/components';
import {BarChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import { EChartsCoreOption } from '@src/type/type';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);


export const BaseColumnChart = () => {
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    const [configOption, setConfigOption] = useState<EChartsCoreOption>({
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
    });

    useEffect(() => {
        initChart();
    }, [])

    const initChart = () => {
        const chartDom = document.getElementById('BaseColumnChart');
        currentChartInstance.current = echarts.init(chartDom);
        let option = {
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
        option && currentChartInstance.current && currentChartInstance.current.setOption(option);
    }

    const chartDom: React.FC = () => {
        // return <Card className='flex w-full h-full pb-5 bg-#CCCCCC'>
        //     {/*<div className='header h-5 bg-#CCCCCC'>header</div>*/}
        //     <div
        //         id='BaseColumnChart'
        //         className='w-full h-calc[100%-40px]'
        //     />
        // </Card>
        return <div className='flex w-full h-full pb-5 bg-#FFFFFF'>
            <div className='header h-5 bg-#CCCCCC'>header</div>
            <div
                id='BaseColumnChart'
                className='w-full h-calc[100%-40px]'
            />
        </div>
    }


    const reloadChart = (option: EChartsCoreOption) => {
        option && currentChartInstance.current.setOption(option);
    }

    return <DocumentLayout
        mdContent={BaseColumnMd}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}