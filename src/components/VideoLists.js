import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Row} from "antd";
import {Context} from "../index";
import VideoItem from "./VideoItem";


const VideoList = observer(() => {
  const {video} = useContext(Context);

    return (
        <Row>

               {video.getVideo().map(videos=>
                <VideoItem
                    key={videos.id}
                    videos={videos}
                />

            )}

            {/*{video.getVideo.map(video=>*/}
            {/*    <VideoItem key={video.id} video={video}/>*/}
            {/*    )}*/}
        </Row>
    );
});

export default VideoList;