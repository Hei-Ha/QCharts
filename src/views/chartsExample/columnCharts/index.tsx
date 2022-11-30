import React from 'react';
import {Button} from '@arco-design/web-react';
import {Link} from "react-router-dom";

export const ColumnCharts = () => {
    return <div>
        <Link to='/charts/columnCharts/base'>
            <Button type='primary'>
                基础柱状图
            </Button>
        </Link>
        <Link to='/charts/columnCharts/grouped'>
            <Button type='primary'>
                分组柱状图
            </Button>
        </Link>
        <Link to='/charts/columnCharts/stacked'>
            <Button type='primary'>
                堆叠柱状图
            </Button>
        </Link>
        <Link to='/charts/columnCharts/percentStacked'>
            <Button type='primary'>
                百分比堆叠柱状图
            </Button>
        </Link>
        <Link to='/charts/columnCharts/dualAxisColumnAndLine'>
            <Button type='primary'>
                双轴图-柱状图+线
            </Button>
        </Link>
    </div>
}