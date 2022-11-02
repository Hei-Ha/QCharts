import React from 'react';
import { Grid } from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export const ColumnChartsContent = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return <div className='flex flex-wrap w-calc[100%-300px]'>
        {arr.map((item) => {
            return <div style={{ width: '700px', height: '50px' }} className='bg-#CCCCCC border border-solid border-#CCCCCC mb-2'>{item}</div>
        })}
    </div>
}