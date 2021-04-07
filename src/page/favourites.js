import React from 'react';
import {Card, Col, Layout, Menu, Row} from "antd";
import {LOGIN_ROUTE} from "../utils/consts";
import {Link, useHistory} from "react-router-dom";
import {Context} from "../index";
import jwt_decode from "jwt-decode";

let store = require('store')
const Favourites = () => {
    const [current, setCurrent]=React.useState('favourite')
    // const [array, setArray]=React.useState(0)
    const { Header, Content, Footer } = Layout;
    const {user} = React.useContext(Context)
    const history = useHistory();
       let arr=["чем кормить кота", "query2", "query3"];

    React.useEffect(()=>{
        let decode=jwt_decode(localStorage.getItem("token"));
        let userName=decode.data;
        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
            if(userName===store.get(key).usersession){
                //  console.log(`${key}: ${localStorage.getItem(key)}`);
                //arr[key]=store.get(key).value
                arr.push(store.get(key).value)
            }
        }
       console.log(arr)
    },[]);

    const logout=()=>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token');
        history.push(LOGIN_ROUTE)
    }

    return (
        <Layout className="layout">
            <Header style={{  background: '#fff', zIndex: 1, width: '100%' }}>
                <div className="logo" > <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 23.7637L13.4634 33.2487V43.3086L32.2629 33.8236V23.7637Z" fill="#1390E5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4634 14.2793L32.2629 23.7643V33.8242L13.4634 24.3392V14.2793Z" fill="#1180CB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 4.79492L13.4634 14.28V24.3398L32.2629 14.8548V4.79492Z" fill="#35A2EC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="48" height="48" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></div>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} selectedKeys={current}>

                    <Menu.Item  key="search" onClick={(e)=>setCurrent(e.key)}>
                        <Link to='/youtube'>
                            Поиск
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="favourite" onClick={(e)=>setCurrent(e.key)}>
                        <Link to='/favourites'>
                            Избранное
                        </Link>

                    </Menu.Item>
                    <Menu.Item style={{float:"right"}} key="3" onClick={logout}>Выход</Menu.Item>

                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>

                <Row style={{margin: '40px'}}>

                    {arr.map(e=>


                            <Col span={24}>
                                <Card>
                                    {e}
                                </Card>

                            </Col>




                    )}
                </Row>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
        ;
};

export default Favourites;