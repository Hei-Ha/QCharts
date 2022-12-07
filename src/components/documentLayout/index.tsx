import React, {useEffect, useRef, useState} from "react";
import AceEditor from 'react-ace';
import {Tabs, Button, Card} from "@arco-design/web-react";
import documentLayoutStyle from './index.module.less';
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import {useSelector} from "react-redux";
import {getUIModeSlice} from "@src/store/reducer/UIMode";


interface PropsType {
    chartDom: React.FC;
    axisChange: Function;
    configOption: JSON;
    onOptionChange: Function;
    title?: string;
}

export const DocumentLayout = (props: PropsType) => {
    const theme = useSelector(getUIModeSlice);
    const leftWrap = useRef<HTMLDivElement>(null);
    const dragAxis = useRef<HTMLDivElement>(null);
    const rightWrap = useRef<HTMLDivElement>(null);
    const editorId = (new Date()).getTime();
    const [activeTab, setActiveTab] = useState<string>('codeEdit');

    const [currentOption, setCurrentOption] = useState<string>('');

    useEffect(() => {
        init();
        initCode();

        return () => {
            dragAxis.current && dragAxis.current.removeEventListener('mousedown', DragAxis);
        }
    }, [])

    const init = () => {
        leftWrap.current = document.getElementsByClassName('leftWrap')[0] as HTMLDivElement;
        dragAxis.current = document.getElementsByClassName('dragAxis')[0] as HTMLDivElement;
        rightWrap.current = document.getElementsByClassName('rightWrap')[0] as HTMLDivElement;
        dragAxis.current && dragAxis.current.addEventListener('mousedown', DragAxis);
    }

    const DragAxis = (e: MouseEvent) => {
        if (!leftWrap.current || !dragAxis.current) return;
        document.onmousemove = (ev) => {};

        document.onmouseup = (ev) => {
            let distance = ev.clientX - e.clientX;
            leftWrap.current.style.width = leftWrap.current.offsetWidth + distance + 'px';
            document.onmousemove = null;
            document.onmouseup = null;
            props.axisChange(); // 当中间轴位置变化的时候，触发函数；
        };
    }


    // 初始化编辑器 code
    const initCode = () => {
        setCurrentOption(JSON.stringify(props.configOption, null, 4));
    }

    const editor = (code: string) => {
        return <AceEditor
            mode="javascript"
            theme={theme === 'dark' ? 'terminal' : 'textmate'}
            name={String(editorId)}
            editorProps={{$blockScrolling: true}}
            style={{
                width: '100%',
                height: 'calc(100vh - 50px - 40px - 38px)',
            }}
            value={code}
            setOptions={{
                useWorker: false,
                tabSize: 4,
            }}
            debounceChangePeriod={1500}
            onChange={(newValue) => {
                props.onOptionChange(JSON.parse(newValue));
                setCurrentOption(newValue);
            }}
        />
    }


    return <div className={`${documentLayoutStyle.documentLayout} flex h-full w-full p-5`}>
        <div className='leftWrap h-full' style={{width: `600px`}}> {/*border-r border-solid border-#D9DBE1*/}
            <Tabs
                type={'card'}
                defaultActiveTab='codeEdit'
                activeTab={activeTab}
                onChange={(tab) => {setActiveTab(tab)}}
                className='h-full w-full'
                extra={(
                    <div>
                        <Button size='mini' className='btn mr-3' onClick={() => { initCode() }}>重制</Button>
                        <Button size='mini' type='primary'>运行</Button>
                    </div>
                )}
            >
                <Tabs.TabPane
                    title='代码编辑'
                    key='codeEdit'
                >
                    {editor(currentOption)}
                </Tabs.TabPane>
                <Tabs.TabPane
                    title='完整代码'
                    key='fullCode'
                >
                    {editor(currentOption)}
                </Tabs.TabPane>
            </Tabs>
        </div>
        <div className='dragAxis w-1 h-full cursor-col-resize mr-4'/>
        <Card className='rightWrap flex flex-auto flex-col h-calc[100vh-50px-40px] select-none p-5'>
            <Card
                title={props.title}
                className='p-5 w-full border border-solid border-current overflow-scroll'
                bodyStyle={{height: '400px'}}
            >
                <props.chartDom />
            </Card>
        </Card>
    </div>
}