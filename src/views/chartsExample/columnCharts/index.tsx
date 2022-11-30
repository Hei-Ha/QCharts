import React from 'react';
import { ChartCard } from '@src/components/ChartCard';
import {Grid} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export const ColumnCharts = () => {
    return <div className='flex flex-col py-5 px-10 overflow-hidden'>
        <hr className='mb-5 w-full text-#C3C7CA' />
        <h2 className='text-base text-#000000 mb-5'>柱状图</h2>
        <Row className='mb-4 h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='基础柱状图'
                    imgUrl='https://img.qcraftai.com/qchart/baseColumnChart.png'
                    path='/charts/columnCharts/base'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='分组柱状图'
                    imgUrl='https://img.qcraftai.com/qchart/groupedColumnChart.png'
                    path='/charts/columnCharts/grouped'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title={'堆叠柱状图'}
                    imgUrl='https://img.qcraftai.com/qchart/stackedColumnChart.png'
                    path='/charts/columnCharts/stacked'
                />
            </Col>
        </Row>
        <Row className='mb-4 h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='百分比堆叠柱状图'
                    imgUrl='https://img.qcraftai.com/qchart/percentStackedColumnChart.png'
                    path='/charts/columnCharts/percentStacked'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='双轴图-柱状图+线'
                    imgUrl='https://img.qcraftai.com/qchart/dualAxisColumnAndLineChart.png'
                    path='/charts/columnCharts/dualAxisColumnAndLine'
                />
            </Col>
            <Col span={7} offset={1} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='双轴图-双柱图'
                    imgUrl='https://img.qcraftai.com/qchart/dualAxisAndDualColumnChart.png'
                    path='/charts/columnCharts/dualAxisAndDualColumn'
                />
            </Col>
        </Row>
        <Row className='mb-4 h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full'>
                <ChartCard
                    title='瀑布图'
                    imgUrl='https://img.qcraftai.com/qchart/waterfallChart.png'
                    path='/charts/columnCharts/waterfall'
                />
            </Col>
        </Row>
    </div>
}
