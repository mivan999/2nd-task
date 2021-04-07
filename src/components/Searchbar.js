import React, { useState, useRef } from "react";
import {
  Button,
  Col,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Slider,
  Typography,
} from "antd";
import HeartOutlined from "@ant-design/icons/es/icons/HeartOutlined";
import AddFavourit from "./modals/Add";
import jwt_decode from "jwt-decode";
// const jwt =require('jsonwebtoken');

let store = require("store");
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={50}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }
  handleHide() {
    this.setState({ showModal: false });
  }
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  onSave = () => {
    let decode = jwt_decode(localStorage.getItem("token"));
    let userName = decode.data;
    let date = new Date();
    store.set("user", { name: userName });
    store.set(`query ${date.getTime()}`, {
      usersession: userName,
      value: this.state.term,
    });
    this.handleHide();
  };
  render() {
    const modal = this.state.showModal ? (
      <Modal
        okText="Сохранить"
        CancelText="Не сохранять"
        title="Сохранить запрос"
        visible={true}
        onOk={this.onSave}
        onCancel={this.handleHide}
      >
        <Text>Запрос</Text>
        <Input disabled placeholder={this.state.term} />
        <Text rules={[{ required: true }]}>Название</Text>
        <Input placeholder="Укажите название" />
        <Text>Сортировать</Text>
        <Select style={{ width: "100%" }} defaultValue="Без сортировки">
          <Option value="">Без сортировки</Option>
          <Option value="">По популярности</Option>
        </Select>
        <Text>Максимальное количество</Text>
        <IntegerStep />
      </Modal>
    ) : null;
    return (
      <Col flex="auto">
        <Search
          onChange={this.handleChange}
          onSearch={this.handleSubmit}
          placeholder="Введите запрос.."
          enterButton="Найти"
          size="large"
          suffix={<HeartOutlined onClick={this.handleShow} />}
        />
        {modal}
      </Col>
    );
  }
}
export default Searchbar;
