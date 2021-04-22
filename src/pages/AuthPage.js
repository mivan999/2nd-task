import React, {useContext} from 'react'
import { Row, Col,  Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import {AuthContext} from '../context/AuthContext'

const style = { background: "#eee", padding: "120px 20px 20px 40px ", margin: "20% 0%", };

export const AuthPage=()=> {
    const auth = useContext(AuthContext)
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

        const onFinish = (values: any) => {
            auth.login();
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <Row >
                <Col xs={{span: 4}} lg={{span: 9}}></Col>
                <Col style={style} xs={{span: 8, offset: 4}} lg={{ span: 6}}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>
        )
    }
