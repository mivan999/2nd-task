import { Col, Row } from "antd";
import React from "react";
import youtube from "../api/api";
import SearchBar from "./Searchbar";
import VideoList from "./VideoList";

class Appp extends React.PureComponent {
  state = {
    videoss: [],
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videoss: response.data.items,
    });
    // console.log("this is resp", response.data.items);
    // console.log("this is videos", this.state.videoss);
  };

  render() {
    return (
      <Col flex="auto">
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <Row>
          <Col>Видео по запросу</Col>
          <Col>вид:</Col>
        </Row>
        <VideoList videos={this.state.videoss} />
      </Col>
    );
  }
}

export default Appp;
