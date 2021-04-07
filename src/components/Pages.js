import React from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "antd";
import {Context} from "../index";

const Pages = observer(({video}) => {
    const curentPage=React.useRef();
const onClick=()=>{
    console.log(curentPage.current)
    }

    // {pages.map(page=>
    //     curent={video.page==page}
    //     )}
    // {pages.map(page =>
    //     <Pagination.Item
    //         key={page}
    //         active={device.page === page}
    //         onClick={() => device.setPage(page)}
    //     >
    //         {page}
    //     </Pagination.Item>
    // )}
    return (
        < div >
            {/*{pages.map(pages=>}*/}
        <Pagination ref={curentPage} onClick={onClick()} defaultCurrent={1} total={50} />
        < /div>
)
    ;
});

export default Pages;