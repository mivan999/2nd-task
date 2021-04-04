import axios from "axios";
const $authHost=axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});
const authIntercepter=config=>{
    config.headers.authorization=`Bearer ${localStorage.getItem('token')}`
    return config
};


$authHost.interceptors.request.use(authIntercepter)

export {
    $authHost,
    $host
}