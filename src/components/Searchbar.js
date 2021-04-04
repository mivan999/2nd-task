import React, { useState,useRef } from 'react';
import {Button, Col, Input, InputNumber, Modal, Row, Select, Slider, Typography} from "antd";
import HeartOutlined from "@ant-design/icons/es/icons/HeartOutlined";
import AddFavourit from "./modals/Add";



const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
class IntegerStep extends React.Component {
    state = {
        inputValue: 1,
    };

    onChange = value => {
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
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ margin: '0 16px' }}
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
        this.state = {showModal: false};

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {

        this.setState({showModal: true});

    }

    handleHide() {

        this.setState({showModal: false});
    }
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });

    };
    handleSubmit = event => {
        // event.preventDefault();

        this.props.handleFormSubmit(this.state.term);
    }

    render() {

        const modal = this.state.showModal ? (
            <Modal okText="Сохранить" CancelText="Не сохранять" title="Сохранить запрос" visible={true}  onOk={this.handleHide} onCancel={this.handleHide}>
                <Text>Запрос</Text>
                <Input disabled placeholder={this.state.term}  />
                <Text rules={[{ required: true }]}>Название</Text>
                <Input placeholder="Укажите название" />
                <Text>Сортировать</Text>
                <Select style={{ width: '100%' }} defaultValue="Без сортировки">
                    <Option value="">Без сортировки</Option>
                    <Option value="">По популярности</Option>
                </Select>
                <Text>Максимальное количество</Text>
                <IntegerStep />
            </Modal>
        ) : null;
        return (
            <Col flex="auto">
              <Search onChange={this.handleChange} onSearch={this.handleSubmit} placeholder="Введите запрос.."
               enterButton="Найти" size="large" suffix={     <HeartOutlined onClick={this.handleShow} /> }/>
              {modal}
            </Col>
        )
    }
}
export default Searchbar;
// const Searchbar=()=> {
// const[value, setValue]=useState('')

    //
    // const handleChange = (event) => {
    //     console.log(event);
    //     setState({
    //         term: event.target.value
    //     });

 //   };
 //   const inputref=useRef('')

    // const handleSubmit = event => {
    // //    event.preventDefault();
    //     const handleFormSubmit=[value];
    //     console.log([value]);
    // }
// const  handleSubmit=()=>{
//     handleFormSubmit=inputref.current.state.value;
// }


//         return (
//             <Col flex="auto" >
//                 <Title level={2}>Поиск видео</Title>
//                 <Search ref={inputref} onChange={e=>setValue(e.target.value)} onSearch={value} placeholder="Введите запрос.."
//                  enterButton="Найти" size="large" suffix={<HeartOutlined />}/>
//             </Col>
//         );
//
// };
// export default Searchbar;