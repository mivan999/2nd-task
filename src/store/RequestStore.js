import {makeAutoObservable} from "mobx";

export default class RequestStore {
    constructor(){
        this._request = [
            {id:1, name: "чем кормить кота"},
            {id:2, name: "чем кормить пса"}
             ]

        makeAutoObservable(this)
    }


    setRequest(request){
        this._request=request
    }
    getRequest(){
        return  this._request
    }
}