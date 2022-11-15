import React from 'react';
import { Grid, Button } from '@arco-design/web-react';
import {Link} from "react-router-dom";

import { BaseColumnChart } from '@src/views/chartsExample/columnCharts/components/BaseColumnChart';

const Row = Grid.Row;
const Col = Grid.Col;

export const Index = () => {
    return <div>
        <Link to='/charts/columnCharts/base'>
            <Button type='primary'>
                基础柱状图
            </Button>
        </Link>
    </div>
}