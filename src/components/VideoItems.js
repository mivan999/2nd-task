import React from 'react';
import {Card, Col} from "antd";

const VideoItem = ({videos}) => {
    console.log({videos});
    return (
        <Col block span={5} offset={1}>
            <Card><div>{videos.name}</div>
             <img width={150} height={150} />

               <div>Название канала</div>
               <div> Количество просмотров</div>
           </Card>
        </Col>
    );
};

export default VideoItem;