import axios from 'axios';
const KEY = 'AIzaSyBhEf5rQOodWrNgV6tZ33WFph53EtxiWPQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})