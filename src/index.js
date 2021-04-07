import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import RequestStore from "./store/RequestStore";
import VideoStore from "./store/VideoStore";

export const Context= createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user:new UserStore(),
        video:new VideoStore(),
        request:new RequestStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
