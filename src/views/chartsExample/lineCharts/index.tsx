import React from 'react';
import { ChartCard } from '@src/components/ChartCard';
import {Grid} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export const LineCharts = () => {
    return <div className='flex flex-col py-5 px-10'>
        <h2 className='text-base text-#000000 mb-5'>折线图</h2>
        <Row className='mb-4 min-h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='基础折线图'
                    imgUrl='https://img.qcraftai.com/qchart/baseLineChart.png'
                    path='/charts/lineCharts/base'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='双折线'
                    imgUrl='https://img.qcraftai.com/qchart/doubleLineChart.png'
                    path='/charts/lineCharts/double'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title={'阶梯折线'}
                    imgUrl='https://img.qcraftai.com/qchart/stepLineChart.png'
                    path='/charts/lineCharts/step'
                />
            </Col>
        </Row>
        <Row className='mb-4 min-h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='双轴折线'
                    imgUrl='https://img.qcraftai.com/qchart/biaxialLineChart.png'
                    path='/charts/lineCharts/biaxial'
                />
            </Col>
        </Row>
    </div>
}
