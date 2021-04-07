import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import "./Auth.css";

//import {login, registration} from "../http/userAPI";
//import {values} from "mobx";
import { YOUTUBE_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import { observer } from "mobx-react-lite";
import {Context} from "../index";

const jwt = require("jsonwebtoken");

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const { Title } = Typography;

const Auth = observer(() => {
  const {user} = React.useContext(Context);
  const [loginVal, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    console.log(user.getIsAuth() + "  авторизован(useEffect)?");
  }, []);
  // React.useEffect(() => {
  //     // console.log("test")
  //     if(localStorage.getItem("token")){
  //         console.log(user.getIsAuth()+" useref")
  //         let decode=jwt_decode(localStorage.getItem("token"))
  //         if(decode.data==="admin"){
  //         console.log("success")
  //         user.setIsAuth(true)
  //         history.push(YOUTUBE_ROUTE)
  //      }
  //     }
  // },[]);   ??????????????????????????????????

  const style = { background: "#fff", padding: "0px ", margin: "20% 0%" };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const signIn = () => {
    // console.log(user.getIsAuth(),"isAuth?");
    // console.log("user.getUser.name()=", user.getUser().name);
    // console.log("логин равен пользователю?", loginVal === user.getUser().name);

    if ((loginVal === "admin") && (password === "admin")) {
      console.log("seccses login");
      user.setUser(user);
      user.setIsAuth(true);
      console.log(user.getIsAuth(),"isAuth?inIF");
      const token = jwt.sign(
        {
          data: loginVal,
        },
        "secret",
        { expiresIn: "24h" }
      );
      localStorage.setItem("token", token);
      
      console.log("пользователь авторизован", user.getIsAuth());
      if (history.push(YOUTUBE_ROUTE)) {
        console.log("routing");
      }

      // console.log(user.getIsAuth())
    }
  };

  return (
    <Row className="rowstyle" justify="space-around" align="center">
      <Col span={10}>
        <div style={style}>
          <Row justify="center">
            <img alt="logo" src="https://hh.ru/employer-logo/2658382.png" />
          </Row>

          <Title align="center">Вход</Title>
          <Row align="center">
            <Form
              layout="vertical"
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
                onChange={(e) => setLogin(e.target.value)}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Войти
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      </Col>
    </Row>
  );
});

export default Auth;
