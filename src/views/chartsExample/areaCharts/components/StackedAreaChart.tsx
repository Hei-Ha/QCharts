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

export const StackedAreaChart = () => {
    const theme = useSelector(getUIModeSlice);
    const currentChartInstance = useRef<echarts.EChartsType>(null);
    let configOption = {
        legend: {
            show: true,
            bottom: 10,
            icon: 'circle',
            data: ['A类别', 'B类别', 'C类别']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
                name: 'A类别',
                stack: 'total',
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
                data: [180, 260, 244, 248, 185, 177, 280],
                type: 'line',
                name: 'B类别',
                stack: 'total',
                itemStyle: {
                    normal: {
                        color: '#86DF6C',
                        areaStyle: {
                            color: 'rgba(134,223,108,0.2)'
                        }
                    }
                }
            },
            {
                data: [200, 280, 274, 288, 205, 199, 300],
                type: 'line',
                name: 'C类别',
                stack: 'total',
                itemStyle: {
                    normal: {
                        color: '#846BCE',
                        areaStyle: {
                            color: 'rgba(132,107,206,0.2)'
                        }
                    }
                }
            }
        ]
    };

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
        title={'堆叠面积图'}
        chartDom={chartDom}
        axisChange={() => { currentChartInstance.current.resize() }}
        configOption={configOption as unknown as JSON}
        onOptionChange={(value: EChartsCoreOption) => {
            reloadChart(value);
        }}
    />
}