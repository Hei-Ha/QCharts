import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const BaseColumnChart = () => {

    useEffect(() => {
        init();
    }, [])

    const init = () => {
        const chartDom = document.getElementById('BaseColumnChart');
        const myChart = echarts.init(chartDom);
        let option;
        option = {
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
                        normal:{
                            color:'#468DFF'
                        }
                    }
                }
            ]
        };
        option && myChart.setOption(option);
    }

    return <div className='flex'>
        <div className='w-40% border-r border-solid border-#CCCCCC'>
            code
        </div>
        <div>
            <h3 className='text-#1D2129 text-xl mb-5 font-semibold'>基础柱状图</h3>
            <div className='flex justify-center'>
                <div id='BaseColumnChart' style={{ height: '400px', width: '800px', background: '#FFFFFF' }} />
            </div>
        </div>

    </div>
}