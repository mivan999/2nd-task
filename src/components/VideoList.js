import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Row} from "antd";
import {Context} from "../index";
import VideoItem from "./VideoItem";


const VideoLists = observer(({videos}) => {
  // const {video} = useContext(Context);
console.log("videolist", videos )
    return (
        <Row>

               {videos.map(videos=>
                <VideoItem
                    key={videos.id}
                    video={videos}
                />

            )}

            {/*{video.getVideo.map(video=>*/}
            {/*    <VideoItem key={video.id} video={video}/>*/}
            {/*    )}*/}
        </Row>
    );
});

export default VideoLists;