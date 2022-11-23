import React from 'react';
import {Layout} from "@arco-design/web-react";
import {BaseMenu} from "@src/menu/menu";
import {Routers} from '@src/router/routers';
import {HashRouter, Outlet} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@src/store/store';


const Header = Layout.Header;
const Content = Layout.Content;

export const App = () => {
    return <div className='w-full h-full'>
        <Provider store={store}>
            <HashRouter>
                <Layout>
                    <Header>
                        <BaseMenu/>
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


