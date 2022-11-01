import React from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import { Test } from '@src/views/test/test';

import { subRoute } from "@src/views/chartsExample/router";

export const Routers = () => {
    return <Routes>
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Navigate to='/charts' replace />} />
        {subRoute()}
    </Routes>
}