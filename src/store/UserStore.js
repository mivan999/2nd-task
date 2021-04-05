import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {
            name:"admin",
            password:"asd"
    }
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth=bool
    }
    setUser(user){
        this._user=user
    }
    getIsAuth(){
        return this._isAuth
    }
    getUser(){
        return  this._user
    }
}