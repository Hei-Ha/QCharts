import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

export const BaseColumnChart = () => {
    const [leftWidth, setLeftWidth] = useState<number>(600);
    const codeWrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        init();
        initChart();
        const ele = document.getElementById('dragAxis');
        ele && ele.addEventListener('mousedown', DragAxis);

        return () => {
            ele && ele.removeEventListener('mousedown', DragAxis);
        }
    }, [])


    const init = () => {
        codeWrap.current = document.getElementsByClassName('codeWrap')[0] as HTMLDivElement;
    }


    const DragAxis = (e: Event) => {
        document.onmousemove = (e) => {
            console.log(codeWrap.current)

            codeWrap.current.style.left = `${e.clientX - 200}px`
        };

        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    const initChart = () => {
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

    return <div className='baseColumnWrap flex h-full w-full'>
        <div className='codeWrap' style={{ width: `${leftWidth}px`}}>
            code
        </div>
        <div id='dragAxis' className=' w-4 bg-#CCCCCC cursor-col-resize' />
        <div className='flex justify-center w-full h-full p-5 bg-#EAEBF2'>
            <div
                id='BaseColumnChart'
                style={{ height: '100%', width: `calc(100vw - 200px - ${leftWidth}px)` }} />
        </div>
    </div>
}