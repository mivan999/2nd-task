import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button, Row, Col, Image, Typography, Space} from 'antd';
import './Auth.css';
import {login, registration} from "../http/userAPI";
import {values} from "mobx";
const jwt =require('jsonwebtoken');

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },

};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },

};
const { Title } = Typography;


const Auth = () => {
    const [loginVal, setLogin]=React.useState('');
    const [password, setPassword]=React.useState('');
    const style = { background: '#fff', padding: '0px ', margin:'20% 0%' };

    const onFinish = (values: any) =>{
        console.log('test');
        console.log(values);

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const signIn= (values)=>{
        // const response= await login();

        const token=jwt.sign(
            {values},
            "secret",
            {expiresIn:'24h'}
        )
        console.log(token);
        // if(response.username="admin" & response.password="qwe"){
        //
        // }

    };
    return (

        <Row  className="rowstyle" justify="space-around" align="center" >
            <Col span={10}>
                <div style={style}>
                    <Row  justify="center">
                        <img src="https://hh.ru/employer-logo/2658382.png"/>
                        {/*<Image preview="false" align="middle"*/}
                        {/*        width={200}*/}
                        {/*        src="https://hh.ru/employer-logo/2658382.png"*/}
                        {/*/>*/}
                    </Row>




                    <Title align="center">Вход</Title>
                    <Row align="center">
                        <Form layout="vertical"
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={signIn}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Логин"
                                name="username"
                                value={loginVal}
                                onChange={e=>setLogin(e.target.value)}
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Пароль"
                                name="password"
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                type="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>



                            <Form.Item  {...tailLayout}>
                                <Button onClick={signIn} type="primary" htmlType="submit">
                                    Войти
                                </Button>
                            </Form.Item>
                        </Form>
                    </Row>

                </div>
            </Col>

        </Row>

);
};

export  default Auth;


