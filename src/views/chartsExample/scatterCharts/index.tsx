import React from 'react';
import { ChartCard } from '@src/components/ChartCard';
import {Grid} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export const ScatterCharts = () => {
    return <div className='flex flex-col py-5 px-10'>
        <h2 className='text-base text-#000000 mb-5'>散点图</h2>
        <Row className='mb-4 min-h-270px'>
            <Col span={7} className='bg-#FFFFFF h-full rounded-sm'>
                <ChartCard
                    title='散点图'
                    imgUrl='https://img.qcraftai.com/qchart/scatterplot.png'
                    path='/charts/scatterCharts/base'
                />
            </Col>
        </Row>
    </div>
}
