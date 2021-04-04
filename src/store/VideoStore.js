import {makeAutoObservable} from "mobx";

export default class VideoStore {
    constructor(){
        this._id=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
        this._videos = [
            {id:1, name: "видео1"},
            {id:2, name: "видео2"},
            {id:3, name: "видео3"},
            {id:4, name: "видео4"},
            {id:5, name: "Видео5"},
            {id:6, name: "Видео6"}
        ]

        makeAutoObservable(this)
    }


    setVideo(videos){
        this._videos=videos
    }
    getVideo(){
        return  this._videos
    }
}