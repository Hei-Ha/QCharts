import React from 'react';
import { ChartCard } from '@src/components/ChartCard';
import {Button, Grid} from '@arco-design/web-react';
import {Link} from "react-router-dom";

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
            <Col span={7} offset={1} className='bg-#CCCCCC'>
                <Link to='/charts/columnCharts/grouped'>
                    <Button type='primary'>
                        分组柱状图
                    </Button>
                </Link>
            </Col>
            <Col span={7} offset={1} className='bg-#CCCCCC '>
                <Link to='/charts/columnCharts/stacked'>
                    <Button type='primary'>
                        堆叠柱状图
                    </Button>
                </Link>
            </Col>
        </Row>
        <Row className='mb-4'>
            <Col span={7} className='bg-#CCCCCC'>
                <Link to='/charts/columnCharts/percentStacked'>
                    <Button type='primary'>
                        百分比堆叠柱状图
                    </Button>
                </Link>
            </Col>
        </Row>
        <Link to='/charts/columnCharts/dualAxisColumnAndLine'>
            <Button type='primary'>
                双轴图-柱状图+线
            </Button>
        </Link>
        <Link to='/charts/columnCharts/dualAxisAndDualColumn'>
            <Button type='primary'>
                双轴图-双柱图
            </Button>
        </Link>
    </div>
}
