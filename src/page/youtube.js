import React from "react";
import { Layout, Menu, Row } from "antd";
// import HeartOutlined from "@ant-design/icons/es/icons/HeartOutlined";
// import VideoItems from "../components/VideoItems";
// import VideoLists from "../components/VideoLists";
// import AddFavourit from "../components/modals/Add";
// import Searchbar from "../components/Searchbar";
import Appp from "../components/appp";
// import VideoList from "../components/VideoList";
import "./youtube.css";
import { LOGIN_ROUTE } from "../utils/consts";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../index";
import Pages from "../components/Pages";

const Youtube = () => {
  // const { Search } = Input;
  const [current, setCurrent] = React.useState("search");
  const { Header, Content, Footer } = Layout;
  const { user } = React.useContext(Context);
  const history = useHistory();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    history.push(LOGIN_ROUTE);
  };

  return (
    <Layout className="layout">
      <Header style={{ background: "#fff", zIndex: 1, width: "100%" }}>
        <div className="logo">
          {" "}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.2629 23.7637L13.4634 33.2487V43.3086L32.2629 33.8236V23.7637Z"
                fill="#1390E5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4634 14.2793L32.2629 23.7643V33.8242L13.4634 24.3392V14.2793Z"
                fill="#1180CB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.2629 4.79492L13.4634 14.28V24.3398L32.2629 14.8548V4.79492Z"
                fill="#35A2EC"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          selectedKeys={current}
        >
          <Menu.Item key="search" onClick={(e) => setCurrent(e.key)}>
            <Link to="/youtube">Поиск</Link>
          </Menu.Item>
          <Menu.Item key="favourite" onClick={(e) => setCurrent(e.key)}>
            <Link to="/favourites">Избранное</Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="3" onClick={logout}>
            Выход
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row style={{ margin: "40px" }}>
          <Appp />
        </Row>
        <div className="site-layout-content"></div>
        <Pages />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Youtube;
