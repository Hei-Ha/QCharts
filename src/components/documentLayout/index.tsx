import React, {useEffect, useRef} from "react";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-javascript";

interface PropsType {
    mdContent: string;
    chartDom: React.FC;
    axisChange: Function;
}

export const DocumentLayout = (props: PropsType) => {
    const leftWrap = useRef<HTMLDivElement>(null);
    const dragAxis = useRef<HTMLDivElement>(null);
    const rightWrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        init();

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


    return <div className='flex h-full w-full'>
        <div className='leftWrap' style={{ width: `600px`}}>
            <article className='markdown-body' dangerouslySetInnerHTML={{ __html: props.mdContent }} />
            <AceEditor
                mode="javascript"
                theme="github"
                onChange={() => {console.log(1)} }
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                defaultValue={'ndasda'}
                style={{ width: '100%', height: '100%'}}
                setOptions={{'useWorker': false}}
            />
        </div>
        <div className='dragAxis w-1 h-full bg-#F0F1F8 cursor-col-resize' />
        <div className='rightWrap flex flex-auto justify-center h-full bg-#F0F1F8 select-none pl-4 pr-5 py-20'>
            <props.chartDom />
        </div>
    </div>
}