import React, {useEffect, useRef} from "react";

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
        </div>
        <div className='dragAxis w-4 h-full bg-#CCCCCC cursor-col-resize' />
        <div className='rightWrap flex flex-auto justify-center h-full bg-#EAEBF2 select-none'>
            <props.chartDom />
        </div>
    </div>
}