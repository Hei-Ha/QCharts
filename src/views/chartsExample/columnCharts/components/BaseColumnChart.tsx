import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer, LegendComponent]);

type EChartsCoreOption = echarts.EChartsCoreOption;

export const BaseColumnChart = () => {
    // const [leftWidth, setLeftWidth] = useState<number>(600);
    const codeWrap = useRef<HTMLDivElement>(null);
    const dragAxis = useRef<HTMLDivElement>(null);
    const chartWrap = useRef<HTMLDivElement>(null);

    const myChart = useRef<echarts.EChartsType>(null);

    useEffect(() => {
        init();
        initChart();

        return () => {
            dragAxis.current && dragAxis.current.removeEventListener('mousedown', DragAxis);
        }
    }, [])


    const init = () => {
        codeWrap.current = document.getElementsByClassName('codeWrap')[0] as HTMLDivElement;
        dragAxis.current = document.getElementsByClassName('dragAxis')[0] as HTMLDivElement;
        chartWrap.current = document.getElementsByClassName('chartWrap')[0] as HTMLDivElement;

        dragAxis.current && dragAxis.current.addEventListener('mousedown', DragAxis);
    }


    const DragAxis = (e: MouseEvent) => {
        if (!codeWrap.current || !dragAxis.current) return;
        document.onmousemove = (ev) => {
            // let distance = ev.clientX - e.clientX;
            // dragAxis.current.style.transform = `translateX(${distance})px`;
        };

        document.onmouseup = (ev) => {
            let distance = ev.clientX - e.clientX;
            codeWrap.current.style.width = codeWrap.current.offsetWidth + distance + 'px';
            document.onmousemove = null;
            document.onmouseup = null;
            myChart.current && myChart.current.resize();
        };
    }

    const initChart = () => {
        const chartDom = document.getElementById('BaseColumnChart');
        myChart.current = echarts.init(chartDom);
        let option: EChartsCoreOption;
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
                        normal: {
                            color:'#468DFF'
                        }
                    }
                }
            ]
        };
        option && myChart.current && myChart.current.setOption(option);
    }

    return <div className='baseColumnWrap flex h-full w-full'>
        <div className='codeWrap select-none' style={{ width: `600px`}}>
            code
        </div>
        <div className='dragAxis w-4 h-full bg-#CCCCCC cursor-col-resize' />
        <div className='chartWrap flex grow justify-center h-full bg-#EAEBF2 select-none'>
            <div
                id='BaseColumnChart'
                className='w-full h-full'
            />
        </div>
    </div>
}