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
        <Link to='/charts/columnCharts/base'>
            <Button type='primary'>
                分组柱状图
            </Button>
        </Link>
    </div>
}