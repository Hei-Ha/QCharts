import React from 'react';
import {Layout} from "@arco-design/web-react";
import {BaseMenu} from "@src/menu/menu";
import {Routers} from '@src/router/routers';
import {HashRouter, Outlet} from "react-router-dom";


const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

export const App = () => {
    return <HashRouter>
        <Layout>
            <Header>
                <BaseMenu/>
            </Header>

            <Content>
                <Routers />
                <Outlet />
            </Content>

            {/*<Footer>*/}
            {/*    <div className='fixed bottom-0 h-6 w-full flex justify-center border border-#CCCCCC border-solid'>*/}
            {/*        design by Hei_Ha*/}
            {/*    </div>*/}
            {/*</Footer>*/}
        </Layout>
    </HashRouter>


}


