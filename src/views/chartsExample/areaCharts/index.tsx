import React from 'react';
import { ChartCard } from '@src/components/ChartCard';
import {Grid} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export const AreaCharts = () => {
    return <div className='flex flex-col py-5 px-10'>
        <h2 className='text-base text-#000000 mb-5'>面积图</h2>
        <Row className='mb-4 min-h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='基础面积图'
                    imgUrl='https://img.qcraftai.com/qchart/baseAreaChart.png'
                    path='/charts/areaCharts/base'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='堆叠面积图'
                    imgUrl='https://img.qcraftai.com/qchart/stackedAreaChart.png'
                    path='/charts/areaCharts/stacked'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title={'百分比面积图'}
                    imgUrl='https://img.qcraftai.com/qchart/percentageAreaChart.png'
                    path='/charts/areaCharts/percentage'
                />
            </Col>
        </Row>
        <Row className='mb-4 min-h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='双轴面积图'
                    imgUrl='https://img.qcraftai.com/qchart/dualAxisAreaChart.png'
                    path='/charts/areaCharts/dualAxis'
                />
            </Col>
        </Row>
    </div>
}
