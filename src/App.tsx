import React from 'react';
import {Layout} from "@arco-design/web-react";
import {Routers} from '@src/router/routers';
import {HashRouter, Outlet} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@src/store/store';
import {TopBar} from "@src/components/topBar";


const Header = Layout.Header;
const Content = Layout.Content;

export const App = () => {
    return <div className='w-full h-full'>
        <Provider store={store}>
            <HashRouter>
                <Layout>
                    <Header>
                        <TopBar/>
                    </Header>
                    <Content>
                        <Routers />
                        <Outlet />
                    </Content>
                </Layout>
            </HashRouter>
        </Provider>
    </div>
}


